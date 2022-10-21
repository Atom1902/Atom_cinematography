import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import {GenresComponent} from "../../index";

import {ListItem} from "@mui/material";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'url("https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&w=1600") no-repeat center fixed',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}  sx={{
                color: 'black',
                fontFamily: 'success',
                letterSpacing: '6px',
                fontSize: 20,
                fontWeight: 'bold',
                '&:hover': {
                    background: "#949292",
                },
            }}>
                Movie Genres
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ListItem>
                        <GenresComponent/>
                        </ListItem>
                    <Button onClick={()=> setOpen(false)}
                            sx={{
                                position:'absolute',
                                top:10,
                                left:5,
                                    color: 'black',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        background: "#575a5b"}}}
                    >{<CancelPresentationIcon/>}</Button>
                </Box>

            </Modal>
        </div>
    );
}
