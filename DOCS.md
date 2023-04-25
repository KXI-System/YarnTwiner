# YarnTwiner Documentation

- [Installing](#installing)
- [Writing](#writing)
  - [Node Titles](#node-titles)
  - [Links and Jumps](#links-and-jumps)
  - [Tags](#tags)
  - [Yarn Node Headers](#yarn-node-headers)
  - [Export Option Tags](#export-option-tags)
- [Exporting](#exporting)

## Installing

Navigate to the [Releases](https://github.com/KXI-System/YarnTwiner/releases) section and download the version of YarnTwiner you want, the latest web version is hosted at `https://kxi-system.github.io/YarnTwiner/release/yarntwiner_0.1.0.js`.

Alternatively you may also install the lastest and possibly unstable release of YarnTwiner at `https://kxi-system.github.io/YarnTwiner/release/yarntwiner_latest.js`, this version will be based on the latest commits to the main branch of the repo. 

More detailed information on how to install a custom story format can be found on the Twine docs on how to add a [New Story Format](https://twinery.org/cookbook/starting/twine2/storyformat.html#adding-new-story-formats).

## Writing

YarnTwiner main feature is that you can write with Yarn syntax in Twine, if you're unfamiliar with how to write yarn then [read the official YarnSpinner docs](https://docs.yarnspinner.dev/getting-started/writing-in-yarn/lines-nodes-and-options). You just need to know how to write the contents of the Yarn node in a Twine node, everything else you can create with the Twine UI.

### Node Titles

Unlike Twine, Yarn does not support spaces or `.` characters within the title of the node. YarnTwiner will automatically replace spaces and `.` with a `_` character, but it's recommended to name your Twine node's valid Yarn node names.

### Links and Jumps

The normal `<<jump>>` command in Yarn will work as expected, however Twine doesn't understand that syntax and no connection will be made in the graph. This can be useful if you're leveraging the more powerful aspects of `<<jump>>`, or to prevent a spaghetti mess.

If you would like to have a connecting line in Twine, then you can use Twine's `[[link]]` syntax and things will work as expected. YarnTwiner will convert the target node inside the `[[]]` brackets as the `<<jump>>` target, so for example;

This passage in Twine:
```
Would you like a cat?
-> Yes!
    [[Get_Cat]]
```

YarnTwiner will produce this in Yarn:
```
Would you like a cat?
-> Yes!
    <<jump Get_Cat>>
```

Twine links that contain `|` or `<-` or `->` are not supported, and they will not produced any desired results.

### Tags

Any tags that are attached to a Twine node will be transformed into Yarn node tags. The name of the nodes will be copied as-is and seperated by a single space. The only limitations are the special tags detailed below, which are reserved for YarnTwiner functions and will not be converted into Yarn node tags.

### Yarn Node Headers

Twine tags that start with a `&` character and are written in the format `&name:value` will be converted into custom node headers in Yarn. If multiple tags that contain the same name are tagged within the same node, then they will be combined under one header. Any `-` characters are replaced with a space.

The following tags on a Twine node named "Get_Cat":
`&tracking:true` `&cats:-tabby-calico` `&cats:black` `cats`

YarnTwiner will convert into:
```
title: Get_Cat
tags: cats
tracking: true
cats: tabby calico black
```

### Export Option Tags

Tags that begin with the `@` character are reserved for YarnTwiner and control how the tagged node gets exported, a node can have multiple export option tags along with other tags.

`@raw` - YarnTwiner will not produce a Yarn node and instead will insert the contents of the Twine node into the Yarn file where the Yarn node would normally be, it will not do any other processing on the node contents. 

`@comment` - YarnTwiner will add `//` characters at the beginning of every line in the Twine node, or otherwise comment out the Twine node contents in the Yarn file.

`@order:#` - Changes the order of the Yarn nodes as they appear in the exported file based on a number value, by default all nodes have an order value of `0` and exported lowest first (top of the file). `@order:-1` will place the node before all default ordered nodes, and `@order:1` will place the node below.

## Exporting

Play or test the story like a normal Twine story format and a Yarn export will appear. You may inspect and download the generated Yarn file. Just like a regular story format, you need to close and play/test the story again to see any new changes.
