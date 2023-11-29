function hljsDefineYarnStory(hljs:any) {
    const YarnVariable = {
        scope: 'variable',
        begin: /(?<!\w)\$[^ \n]+/,
    };

    return {
        aliases: ['yarn', 'yarnspinner'],
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.BACKSLASH_ESCAPE,
            {
                scope: 'tag',
                begin: /<<|>>/
            },
            {
                scope: 'tag',
                begin: /---|===/
            },
            // command
            {
                begin: /(?<=\<\<)/,
                end: /(?=\>\>)/,
                contains: [
                    hljs.NUMBER_MODE,
                    hljs.QUOTE_STRING_MODE,
                    YarnVariable,
                    {
                        scope: 'keywords',
                        beginKeywords: 'if else endif jump set call declare'
                    },
                    {
                        scope: 'operators',
                        beginKeywords: 'to and or not is eq neq le leq ge lt le gt gte'
                    }
                ]
            },
            YarnVariable,
            {
                className: 'keyword ',
                begin: /->/
            },
            // line tags
            {
                scope: 'comment',
                begin: /(?<!\w)\#[^ \n]+/,
            },
        ]
    }
}

export { hljsDefineYarnStory };

// https://github.com/highlightjs/highlight.js/blob/main/src/lib/modes.js
