import './main.css'
import * as convert from './convert.js'

window.addEventListener('load', async function() {
    const TWStoryData = document.querySelectorAll('tw-storydata')[0];
    const TWPassageData = Object.values(document.querySelectorAll('tw-storydata > tw-passagedata'));
    const NodeData = convert.TWPassagesToNodes(TWPassageData);
    const YarnData = convert.NodesToString(NodeData);
    
    const FileOutput = this.document.querySelector('.code');
    FileOutput.innerText = YarnData;

    this.document.querySelector('button.download').addEventListener('click', async => {
        downloadFile(FileOutput.innerText, TWStoryData.attributes.name.value + '.yarn');
    });
});

function downloadFile(data, fileName) {
    let file = new File([data], fileName, { type: 'application/octet-stream' });
    let a = document.createElement('a');

    a.href = window.URL.createObjectURL(file);
    a.download = file.name;
    document.body.appendChild(a);
    a.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    a.remove();
    window.URL.revokeObjectURL(a.href);
}
