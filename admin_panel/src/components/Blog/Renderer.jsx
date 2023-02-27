import { CodeBoxOutput } from 'editorjs-react-renderer';

const data = {
  "type": "codeBox",
  "data": {
    "code": ".codeBoxTextArea{\n  width: 100%;\n  min-height: 30px;\n  padding: 10px;\n  border-radius: 2px 2px 2px 0;\n  border: none !important;\n  outline: none !important;\n  font: 14px monospace;\n}\n\n.codeBoxSelectDiv{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: relative;\n}",
    "language": "css",
    "theme": "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/atom-one-dark.min.css"
  }
};

const CodeBlock = (props) => CodeBoxOutput(data);

export default CodeBlock;