import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import Embed from "@editorjs/embed";
import CodeTool from "@editorjs/code";
import Output from 'editorjs-react-renderer';
import styles from './ViewBlog.module.scss';
// import { CodeBoxOutput } from 'editorjs-react-renderer';

// import Blocks from 'editorjs-blocks-react-renderer';
import CodeBlock from './Renderer';

const ViewBlog = (props) => {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    console.log("Title: ", props?.blog[0]?.title);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props?.setOpen(false);
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };
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

    const config = {
        holder: "editorjs",
        focus: true,
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

    }
    // const parser = new edjsParser(config);

    const JSONstring = '{"name":"John", "age":30, "city":"New York"}';

    return (
        <React.Fragment>
            <Dialog
                fullWidth={fullWidth}
                open={props?.open}
                onClose={handleClose}
            >
                <DialogTitle className={styles['blog-title']}>{props?.blog?.title}</DialogTitle>
                <DialogContent>
                    {
                        // (JSON.parse(props.data))
                        <Output data={props?.data}
                        />
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default ViewBlog;