export function TWPassagesToNodes(passageData) {
    return passageData.map(passage => {
        let isRaw = false;
        let isIgnore = false;
        let isComment = false;
        let order = 0;

        // sanitize name
        let name = passage.attributes['name'].value;
        name = name.replace(/[\s\.]/g, '_');

        // tags are lumped with the node attributes
        let attr = passage.attributes['tags'].value.split(' ').map(x => {
            // special options tag
            if (x.includes('@')) {
                // we want to treat the node contents as raw yarn data
                if (x === '@raw') { isRaw = true; }

                // comment out every line
                if (x === '@comment') { isComment = true; }
                
                // ignore this node for final export
                if (x === '@ignore') { isIgnore = true; }

                // we want to change the order in the file export
                if (x.includes('@order')) {
                    order = Number(x.split(':')[1]);
                }

                // its not a node attribute, we don't add anything
                return; 
            }

            // yarn attribute tag 
            if (x.includes('&')) {
                let str = x.slice(1).replace('-', ' ').split(':');
                return { name: str[0].trim(), value : str[1].trim() };
            }

            return { name: 'tags', value : x };
        });
        // consolidate similar names, don't know how to do this in the first map
        attr = attr.reduce((acc, val) => {
            if (val === undefined) {
                return acc;
            }

            let index = acc.findIndex(x => x.name === val.name);
            if (index !== -1) {
                acc[index].value += " " + val.value;
            } else {
                acc.push(val);
            }
            return acc;
        }, []);

        // position attribute is similar enough between twine and yarn
        let pos = passage.attributes['position'].value;

        // replace [[link]] with <<jump>>
        let inner = passage.innerHTML;
        inner = inner.replace(/\[\[(.*?)\]\]/g, (match, target) => {
            return `&lt;&lt;jump ${target}&gt;&gt;`;
        });

        // turn the node contents into comments if we requested it
        if (isComment) {
            inner = inner.replace(/^/gm, '//');
        }

        return {
            name: name,
            attributes: attr,
            position: pos,
            content: inner,
            raw: isRaw,
            ignore: isIgnore,
            order: order,
        };
    });
}

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

        let attr = node.attributes.reduce((a, x) => {
            a.push(`${x.name}: ${x.value}`)
            return a;
        }, []);

        return `${acc}title: ${node.name}\n${attr.join('\n')}\nposition: ${node.position}\n---\n${node.content}\n===\n\n`;
    }, '');
}
