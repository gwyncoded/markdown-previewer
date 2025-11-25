marked.setOptions({ breaks: true });
//this is just setting an option in marked.js

const editorInput = document.getElementById("editor");
const previewOutput = document.getElementById("preview");

editorInput.value = `# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and

- of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.svg)
`;
//this initializes the editor with some sample markdown.

previewOutput.innerHTML = marked.parse(editorInput.value);
//this initializes the preview to contain the content of the editor on page load.

editorInput.addEventListener("input", () => {
  previewOutput.innerHTML = marked.parse(editorInput.value);
});
//this updates the preview with what the user inputs into the editor as they input it.