# YarnTwiner - The Twine format for Yarn

YarnTwiner is a Twine story format that exports your Twine story into a Yarn file, meaning that you can write yarn syntax in Twine and export out a yarn file for use in your YarnSpinner or other Yarn powered projects!

YarnTwiner is **not** not a converter to transform other Twine story formats like Harlowe or Sugarcube into Yarn files, it is a standalone story format with its own syntax and should be treated as such.

YarnTwiner cannot compile or run Yarn files (yet), if you're looking for something to run your yarn files in HTML/JS check out [YarnBound](https://github.com/mnbroatch/yarn-bound). This also means YarnTwiner cannot check if your Yarn file has no errors (yet) so use extra caution.

## Installing

1. Open up a new or existing Twine story and navigate to the "Twine" tab.
2. Click on `Story Formats > Add` then import the following URL: `https://kxi-system.github.io/YarnTwiner/release/yarntwiner_latest.js`. You can also import a specific release from the [Releases](https://github.com/KXI-System/YarnTwiner/releases) section.
4. Select Harlow and then the "Disable Editor Extensions" button on the toolbar at the top.
5. Go back to your Twine Project, then select the "Twine" tab then `Details` to select YarnTwiner
6. Write your story then when you're ready to convert into yarn, go to the "Build" tab and hit `Play`!

For more information on how to add a story format, follow the official Twine docs on [adding New Story Formats](https://twinery.org/cookbook/starting/twine2/storyformat.html#adding-new-story-formats).

## Features

### Yarn Syntax

Write your story in Yarn syntax in the Twine editor, add tags, change the node name and layout, write commands like `<<if>>` or `<<jump>>`. It will automagically get converted over into a Yarn File, no fuss needed.

### Use Twine Links

Twine `[[links]]` will get converted into Yarn `<<jump>>` commands, so you can still have node arrows that show your story flow and automatic new nodes when typing Twine links without giving up Yarn support. **Note:** links with `|` or `<-` `->` are not supported.

### Add in Custom Node Headers

Start a Twine tag with a `&` character and you can add in a Yarn node header easily! So a tag of `&tracking:true` will give you a `tracking: true` header in your Yarn node, no need to edit your files afterwards.

### Make Yarn Files!

The output is real genuine Yarn files, that means anything that can open or run them can use them! YarnTwiner even preserves the positions of your nodes in Twine so that tools like the VSCode extension graph preview can use them ase well, its all in the Yarn ecosystem.

Check out the [Docs](DOCS.md) for more details on everything YarnTwiner has to offer.

## Building

Assuming a Node.js installation, run `npm install` to install the prerequisites then `npm run build` to create a `yarntwiner_latest.js` file.

## Special Thanks

The Secret Lab team for being awesome folks, and the Yarn Spinner community in making this happen.

[Dan Cox](https://videlais.com/) for their Twine story format tutorials to help get this project off the ground.

YarnTwiner is licenced under the [MIT License](LICENSE.md).
