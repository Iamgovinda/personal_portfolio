import React, { useState } from "react";
import ReactDOM from "react-dom";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import Embed from "@editorjs/embed";
import CodeTool from "@editorjs/code";
import {post} from '../../API/axios';

function Editor() {
  const [editor, setEditor] = useState(null);

  function handleSave() {
    editor.save().then((outputData) => {
        console.log("Article data: ", JSON.stringify(outputData), outputData);
        post('/blog/', {
          "written_by":"Gobinda",
          "title":"This",
          "content": JSON.stringify(outputData)
        }).then((response)=>{
          if(response.status===201){
            console.log("OK saved");
          }else{
            window.alert("Something went wrong.");
          }
        })
        
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
  function handleImageUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        resolve({
          success: 1,
          file: {
            url: data.target.result,
          },
        });
      };
      reader.readAsDataURL(file);
    });
  }

  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      focus:true,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        image: {
          class: ImageTool,
          config: {
            uploader: {
              uploadByFile(file) {
                return handleImageUpload(file);
              },
              uploadByUrl(url) {
                return Promise.resolve({
                  success: 1,
                  file: {
                    url: url,
                  },
                });
              },
            },
          },
        },
    
        embed: {
          class: Embed,
          inlineToolbar: true,
          config: {
            services: {
              youtube: true,
              vimeo: true,
              codepen: {
                regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
                embedUrl: "https://codepen.io/$1/embed/$2/?theme-id=light&default-tab=result",
                html: '<iframe width="100%" height="300" frameborder="no" scrolling="no" allowtransparency="true" allowfullscreen="true" src="%embed_url%" class="codepen"></iframe>',
                height: 300,
              },
            },
          },
        },
        code: CodeTool,
      },
      // onReady: () => {
      //   setEditor(editor);
      // },
    });
  }, []);

  return (
    <div>
      <div id="editorjs"></div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

// ReactDOM.render(<Editor />, document.getElementById("root"));
export default Editor;
