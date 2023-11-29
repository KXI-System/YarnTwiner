export interface YTNode {
    name: string;
    headers: { name: string; value: string; }[],
    content: string,
    file: string,
    order: number,
    raw?: boolean,
    ignore?: boolean,
}

// takes an array of twine story passages and turns them into yarntwiner nodes
export function twinePassagesToNodes(passageData: Element[]): YTNode[] {
    return passageData.map(passage => {
        let outputNode: YTNode = {
            name: '',
            headers: [],
            content: '',
            file: 'main',
            order: 0,
        };
        let isComment = false;

        // sanitize name
        let name = passage.getAttribute('name');
        outputNode.name = name ? name.replace(/[\s\.]/g, '_') : '';

        // tags are lumped with the node attributes
        let attr = passage.getAttribute('tags')?.split(' ');
        attr = attr ?? [];

        // parse and sort the twine tags into yarn attributes
        outputNode.headers = attr.reduce((acc: { name: string; value: string; }[], val: string) => {
            // no tags
            if (!val) { return acc; }

            // special options tag
            if (val.includes('@')) {
                // treat the node contents as raw yarn data
                if (val === '@raw') { outputNode.raw = true; }

                // comment out every line
                if (val === '@comment') { isComment = true; }

                // ignore this node for final export
                if (val === '@ignore') { outputNode.ignore = true; }

                // change the order in the file export
                if (val.includes('@order')) {
                    outputNode.order = Number(val.split(':')[1]);
                }

                // target output file
                if (val.includes('@file')) {
                    outputNode.file = val.split(':')[1];
                }

                // its not a node header don't add anything
                return acc;
            }

            // assume its a normal node tag first
            let aname = 'tags';
            let avalue = '';

            // check for yarn header tag 
            if (val.includes('&')) {
                let str = val.slice(1).replace('-', ' ').split(':');
                aname = str[0];
                avalue = str[1];
            }

            // check for duplicates
            let index = acc.findIndex(x => x.name === aname);
            if (index !== -1) {
                acc[index].value += " " + avalue;
            } 
            else {
                acc.push({ name: aname.trim(), value: avalue.trim() });
            }

            return acc;
        }, outputNode.headers);

        // position attribute is similar enough between twine and yarn
        let pos = passage.getAttribute('position');
        outputNode.headers.push({ name: 'position', value: pos ?? '0,0'});

        // replace [[link]] with <<jump>>
        let inner = passage.textContent ?? '';
        outputNode.content = inner.replace(/\[\[(.*?)\]\]/g, (_match: any, target: any) => {
            return `<<jump ${target}>>`;
        });

        // turn the node contents into comments if requested
        if (isComment) {
            outputNode.content = outputNode.content.replace(/^/gm, '// ');
        }

        return outputNode;
    });
}

// turns yarntwiner nodes into yarn file text
export function nodesToString(nodes: YTNode[], printIgnore = false): string {
    return nodes
    .sort((a, b) => a.order - b.order)
    .reduce((acc, node) => {
        if (node.ignore && !printIgnore) { 
            return acc;
        }

        if (node.raw) {
            return `${acc}${node.content}\n\n` ;
        }

        let hdrs = node.headers.reduce((a: string[], x: { name: string; value: string; }) => {
            a.push(`${x.name}: ${x.value}`);
            return a;
        }, []);

        return `${acc}title: ${node.name}\n${hdrs.join('\n')}\n---\n${node.content}\n===\n\n`;
    }, '');
}
