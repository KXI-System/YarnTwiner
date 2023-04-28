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
        let attr = passage.attributes['tags'].value.split(' ')
        // we parse and sort the twine tags into yarn attributes
        .reduce((acc, val) => {
            // if we have no tags
            if (!val) {
                return acc;
            }

            // special options tag
            if (val.includes('@')) {
                // we want to treat the node contents as raw yarn data
                if (val === '@raw') { isRaw = true; }

                // comment out every line
                if (val === '@comment') { isComment = true; }

                // ignore this node for final export
                if (val === '@ignore') { isIgnore = true; }

                // we want to change the order in the file export
                if (val.includes('@order')) {
                    order = Number(val.split(':')[1]);
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
        attr.push({ name: 'position', value: pos});

        // replace [[link]] with <<jump>>
        let inner = passage.innerText;
        inner = inner.replace(/\[\[(.*?)\]\]/g, (match, target) => {
            return `<<jump ${target}>>`;
        });

        // turn the node contents into comments if we requested it
        if (isComment) {
            inner = inner.replace(/^/gm, '//');
        }

        return {
            name: name,
            attributes: attr,
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

        return `${acc}title: ${node.name}\n${attr.join('\n')}\n---\n${node.content}\n===\n\n`;
    }, '');
}
