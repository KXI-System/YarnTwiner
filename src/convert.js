// takes an array of twine story passages and turns them into yarntwiner yarn nodes
export function TWPassagesToNodes(passageData) {
    return passageData.map(passage => {
        let outputNode = {
            name: '',
            headers: [],
            content: '',
            raw: false,
            ignore: false,
            order: 0,
        };

        let isComment = false;

        // sanitize name
        let name = passage.attributes['name'].value;
        outputNode.name = name.replace(/[\s\.]/g, '_');

        // tags are lumped with the node attributes
        let attr = passage.attributes['tags'].value.split(' ');
        // we parse and sort the twine tags into yarn attributes
        outputNode.headers = attr.reduce((acc, val) => {
            // if we have no tags
            if (!val) {
                return acc;
            }

            // special options tag
            if (val.includes('@')) {
                // we want to treat the node contents as raw yarn data
                if (val === '@raw') { outputNode.raw = true; }

                // comment out every line
                if (val === '@comment') { isComment = true; }

                // ignore this node for final export
                if (val === '@ignore') { outputNode.isComment = true; }

                // we want to change the order in the file export
                if (val.includes('@order')) {
                    outputNode.order = Number(val.split(':')[1]);
                }

                // its not a node attribute, we don't add anything
                return acc;
            }

            // we assume its a normal node tag first
            let aname = 'tags';
            let avalue = '';

            // check for yarn attribute tag 
            if (val.includes('&')) {
                let str = val.slice(1).replace('-', ' ').split(':');
                aname = str[0];
                avalue = str[1];
            }

            // see if we already have a yarn attribute with the same name
            let index = acc.findIndex(x => x.name === aname);
            if (index !== -1) {
                acc[index].value += " " + avalue;
            } else {
                acc.push({ name: aname.trim(), value: avalue.trim() });
            }

            return acc;
        }, []);

        // position attribute is similar enough between twine and yarn
        let pos = passage.attributes['position'].value;
        outputNode.headers.push({ name: 'position', value: pos});

        // replace [[link]] with <<jump>>
        let inner = passage.innerText;
        outputNode.content = inner.replace(/\[\[(.*?)\]\]/g, (match, target) => {
            return `<<jump ${target}>>`;
        });

        // turn the node contents into comments if we requested it
        if (isComment) {
            outputNode.content = outputNode.content.replace(/^/gm, '//');
        }

        return outputNode;
    });
}

// turns yarntwiner yarn nodes into a text output
export function NodesToString(nodes, printIgnore = false) {
    return nodes
    .sort((a, b) => a.order - b.order)
    .reduce((acc, node) => {
        if (node.ignore && !printIgnore) { 
            return acc;
        }

        if (node.raw) {
            return `${acc}${node.content}\n\n` ;
        }

        let hdrs = node.headers.reduce((a, x) => {
            a.push(`${x.name}: ${x.value}`)
            return a;
        }, []);

        return `${acc}title: ${node.name}\n${hdrs.join('\n')}\n---\n${node.content}\n===\n\n`;
    }, '');
}
