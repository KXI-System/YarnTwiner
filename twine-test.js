const fs = require('fs');

const testStory = fs.readFileSync('twine/test-story.html', 'utf8');
const templateFile = fs.readFileSync('dist/index.html', 'utf8');
const testFile = templateFile.replace('{{STORY_DATA}}', `\n${testStory}\n`);

fs.writeFileSync('dist/index-test.html', testFile);
console.log('test build complete at dist/index-test.html');
