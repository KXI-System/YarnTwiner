import { Plugin, defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteSingleFile } from 'vite-plugin-singlefile'
import fs from 'fs'

const version = '0.3.0'

export default defineConfig({
    plugins: [
        svelte(),
        viteSingleFile(),
        buildTWFormat(),
        replaceTwinePlaceholders(),
    ],
});

function buildTWFormat(): Plugin {
    return {
        name: 'build-tw-format',
        enforce: 'post',
        closeBundle() {
            const jsonTemplate = fs.readFileSync('./twine/template.json', 'utf-8');
            const htmlSource = fs.readFileSync('./dist/index.html', 'utf-8');
            let twFormat = JSON.parse(jsonTemplate);

            twFormat.source = htmlSource;
            twFormat.version = version;

            const fileContent = `window.storyFormat(${JSON.stringify(twFormat)});`;
            const fileDir = `./docs/release/yarntwiner_${twFormat.version}.js`;
            fs.writeFileSync(fileDir, fileContent);
            console.log('twine story format build complete at ' + fileDir);
        }
    };
}

function replaceTwinePlaceholders(): Plugin {
    return {
        name: 'replace-twine-placeholders',
        apply: 'serve',
        transformIndexHtml(html) {
            const storyData = fs.readFileSync('./twine/test-story.html', 'utf-8');

            return html
                .replace('{{STORY_NAME}}', 'Test Story')
                .replace('{{STORY_DATA}}', `\n${storyData}\n`);
        }
    };
}
