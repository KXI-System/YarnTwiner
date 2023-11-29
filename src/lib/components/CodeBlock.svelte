<script lang="ts">
    import 'highlight.js/styles/github-dark-dimmed.css';
    import hljs from 'highlight.js/lib/core';
    import { hljsDefineYarnStory } from '../functions/yarn-language';

    export let fileName: string;
    export let codeData: string;
    let codeHighlighted: any;

    // @ts-ignore
    hljs.registerLanguage('yarn', hljsDefineYarnStory);
    codeHighlighted = hljs.highlight(codeData, {language: 'yarn'});

    function downloadYarnFile(): any {
        downloadFile(codeData, fileName + '.yarn');
    }

    function downloadFile(data:string, fileName:string): void {
        let file = new File([data], fileName, { type: 'application/octet-stream' });
        let a = document.createElement('a');

        a.href = window.URL.createObjectURL(file);
        a.download = file.name;
        document.body.appendChild(a);
        a.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        a.remove();
        window.URL.revokeObjectURL(a.href);
    }
</script>

<div class="file">
    <p>
        <span>{fileName}.yarn</span>
        <button class="download" on:click={downloadYarnFile}>Save Yarn File</button>
    </p>
    <pre class="hljs language-yarn code-block"><code>{@html codeHighlighted.value}</code></pre>
</div>

<style>
    .code-block {
        white-space: pre-wrap;
        overflow: auto;
        word-break: break-word;
        padding: 1rem;
        max-height: 25em;
        overflow-y: scroll;
    }

    .download {
        float: right;
    }
</style>