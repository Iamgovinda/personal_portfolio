import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './LogOutModal.module.scss';

export default function LogConfirmationModal(props) {

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
        <DialogTitle id="alert-dialog-title" className={styles['modal-title']}>
          {"Are you sure you want to logout?"}
        </DialogTitle>
        <DialogActions className={styles['modal-action']}>
          <Button onClick={handleClose} variant='contained' style={{backgroundColor:'red'}}>Close</Button>
          <Button onClick={props?.handleLogout} autoFocus variant='contained' style={{backgroundColor:'green'}}>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}