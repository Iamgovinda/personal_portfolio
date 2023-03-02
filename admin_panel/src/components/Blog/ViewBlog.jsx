import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Output from 'editorjs-react-renderer';
import styles from './ViewBlog.module.scss';


const ViewBlog = (props) => {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props?.setOpen(false);
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            <Dialog
                fullWidth={fullWidth}
                open={props?.open}
                onClose={handleClose}
            >
                <DialogTitle className={styles['blog-title']}>{props?.blog?.title}</DialogTitle>
                <DialogContent className={styles['blog-data']}>
                    <Output data={props?.data}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className={styles['btn-close']} variant='contained'>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default ViewBlog;