import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


interface ContentProps  {
  id: number;
  name: string,
  date: string;
  nowBitcoin: number;
  percentBitcoin: number;
}

const AlertDialog: React.FC<ContentProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  

  const [list, setList] = useState(0)

  useEffect(() => {
    function handleDelete (){
      // const list = props.list
      // const newList = list.filter((item) => item.id !== id)
      // setList(newList)
      setOpen(false);
    };

  }, [handleDelete])

  function handleDelete (){
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        { props.name }
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Você realmente quer verder seu Bitcoin?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            data aquisição: <strong>{ props.date  }</strong><br />

            ${ props.nowBitcoin } |  { props.percentBitcoin}% | R${ props.nowBitcoin * (props.nowBitcoin/100) }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            cancelar
          </Button>
          <Button onClick={() => {handleDelete()}} color="primary" autoFocus>
            confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog
