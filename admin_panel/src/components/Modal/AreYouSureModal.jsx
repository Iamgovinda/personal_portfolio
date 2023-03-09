import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './AYSM.module.scss';

export default function AreYouSure(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    props?.setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props?.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={styles['alert-title']}>
          {"Are you sure you want to delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={styles['alert-desc']}>
            You wont be able to retrieve the blog again, after deleting.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' style={{backgroundColor:'green'}}>Cancel</Button>
          <Button onClick={()=>props?.handleDelete(props?.blog)} autoFocus style={{backgroundColor:'red', color:'white'}}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}