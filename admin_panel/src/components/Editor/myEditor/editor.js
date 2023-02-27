import React, { useRef, useCallback } from "react";
import { patch } from "../../../API/axios";
// import tools for editor config
import { EDITOR_JS_TOOLS } from "./tools";

// create editor instance
import { createReactEditorJS } from "react-editor-js";
import exampleData from "./exampledata";
import { useNavigate } from "react-router-dom";

export default function Editor(props) {
    // console.log("My Editor Js data1: ", data);
    // console.log("My Editor Js data2: ", data2);
	const navigate = useNavigate();

    // delete data.version;
	const editorCore = useRef(null);
	const ReactEditorJS = createReactEditorJS();

	const handleInitialize = useCallback((instance) => {
		// await instance._editorJS.isReady;
		instance._editorJS.isReady
			.then(() => {
				// set reference to editor
				editorCore.current = instance;
			})
			.catch((err) => console.log("An error occured", err));
	}, []);

  const  handleSave = ()=> {
    // console.log("Article data: ", JSON.stringify(outputData), outputData);
    patch('/blog/'+props?.uuid + '/', {
      "content": props?.data
    }).then((response) => {
      if (response.status === 200) {
        window.alert("OK saved");
        navigate('/');

      } else {
        window.alert("Somethinsg went wrong.");
      }
    })
}

	return (
		<div className="editor-container">
			<h4 className="edit-mode-alert">!Edit Mode Enabled</h4>
			<ReactEditorJS
				onInitialize={handleInitialize}
				tools={EDITOR_JS_TOOLS}
				onChange={handleSave}
				defaultValue={props.data}
			/>
		</div>
	);
}
