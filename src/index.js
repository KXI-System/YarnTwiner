import './main.css'
import * as convert from './convert.js'

window.addEventListener('load', async function() {
    const TWPassageData = document.querySelectorAll('tw-storydata > tw-passagedata');
    const NodeData = convert.TWPassagesToNodes(Object.values(TWPassageData));
    const YarnData = convert.NodesToString(NodeData);
    
    const FileOutput = this.document.querySelector('.code');
    FileOutput.innerHTML = YarnData;

    this.document.querySelector('.download > button').addEventListener('click', async => {
        downloadFile(FileOutput.innerText, 'output.yarn');
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
