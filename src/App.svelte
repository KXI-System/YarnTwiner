<script lang="ts">
    import CodeBlock from './lib/components/CodeBlock.svelte';
    import { twinePassagesToNodes, nodesToString, type YTNode } from './lib/functions/converter';

    const twineStoryData = document.querySelectorAll('tw-storydata')[0];
    const twinePassageData = Object.values(document.querySelectorAll('tw-storydata > tw-passagedata'));

    const storyName = twineStoryData.getAttribute('name');
    const yarnDataToFiles = twinePassagesToNodes(twinePassageData)
        // sort nodes to files
        .reduce((acc, node) => {
            const index = acc.findIndex((el) => el.fileName === node.file);

            if (index === -1) {
                acc.push({ fileName: node.file, nodes: [node] });
            }
            else {
                acc[index].nodes.push(node);
            }

            return acc;
        }, [{ fileName: 'main', nodes: [] as Array<YTNode> }])
        // export each file into text
        .reduce((acc, file) => {
            acc.push({
                fileName: file.fileName === 'main' ? storyName : file.fileName,
                fileData: nodesToString(file.nodes)
            });
            
            return acc;
        }, [] as Array<any>)
    ;
</script>

<main>
    <div class="content">
        <h1>{storyName} - YarnTwiner</h1>
        <p>Thanks for using YarnTwiner, below is your story converted into a yarn script. Remember, YarnTwiner can't check if the yarn script is valid or not!</p>
        <hr>
    </div>

    {#each yarnDataToFiles as yarnFile }
        <CodeBlock fileName={yarnFile.fileName} codeData={yarnFile.fileData} />
        <hr>
    {/each}
</main>

<style>
</style>
