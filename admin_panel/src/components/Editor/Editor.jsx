import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import CodeTool from "@editorjs/code";
import { patch, post } from '../../API/axios';
import { useNavigate } from "react-router-dom";
import ImageTool from '@editorjs/image';
import Table from '@editorjs/table';
// import AttachesTool from '@editorjs/attaches';
import styles from './Editor.module.scss';
import CodeBox from '@bomdi/codebox';
import exampleData from "./myEditor/exampledata";
import {get} from '../../API/axios';




function Editor(props) {
  const [editor, setEditor] = useState(null);
  // const [data, setData] = useState();
  const navigate = useNavigate();
  // console.log(JSON.parse(props?.content));
  // const edjsParser = require("editorjs-parser");
  const Marker = require('@editorjs/marker');
  const LinkTool = require('@editorjs/link');
  const ImageGallery = require('@rodrigoodhin/editorjs-image-gallery');
  // console.log("Inside Editor: ", props?.data);
  console.log("Inside Editor example data: ", exampleData);
  const [data, setData] = useState();
  const [blogData, setBlogData] = useState();

  // console.log("Blog Data: ", JSON.stringify(exampleData));
  useEffect(() => {
    get(`/blog/${props?.uuid}`).then((response) => {
      console.log(response);

      if (response.status === 200) {
        setBlogData(JSON.parse(response.data?.content));
      }
    })
  }, [])


  function handleSave() {
    // console.log("Article data: ", JSON.stringify(outputData), outputData);
    patch('/blog/'+props?.uuid + '/', {
      "content": data
    }).then((response) => {
      if (response.status === 200) {
        window.alert("OK saved");
        navigate('/');

      } else {
        window.alert("Somethfing sdawsnsfdt wdrong.");
      }
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
    const config = {
      holder: "editorjs",
      focus: true,
      data: blogData,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        imageGallery: ImageGallery,
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
        codeBox: {
          class: CodeBox,
          config: {
            themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css', // Optional
            themeName: 'atom-one-dark', // Optional
            useDefaultTheme: 'light' // Optional. This also determines the background color of the language select drop-down
          }
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        // image: {
        //   class: ImageTool,
        //   config: {
        //     endpoints: {
        //       byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
        //       byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        //     }
        //   }
        // },
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: 'http://localhost:8008/fetchUrl'
          },
        },
        // video: {
        //   class: VideoTool,
        //   config: {
        //     endpoints: {
        //       byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
        //       byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        //     }
        //   }
        // },
        

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
      placeholder: "Let`s write an awesome bloog",
      logLevel: "ERROR",
      onChange: (api, event) => {
        editor.save().then((outputData) => {
          setData(JSON.stringify(outputData));

        })
      }
    }
    // const parser = new edjsParser(config);
    // if (props?.content != null || props?.content != undefined) {
    //   console.log("This is content: ", props?.content);
    //   config.data = JSON.parse(props?.content);
    // }
    const editor = new EditorJS(config);
  }, [blogData]);

  return (<>
    <h1>Entedr the content</h1>
    <br /><br />
    <div id="editorjs" className={styles['editorjs']}>
    </div>
    <pre id="output"></pre>
    <button onClick={handleSave}>Save</button>
  </>
  );
}

// ReactDOM.render(<Editor />, document.getElementById("root"));
export default Editor;
