// Core
import React, { FC, useState } from 'react';

// Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// Styles
const style = {
    position:  'absolute' as 'absolute',
    top:       '50%',
    left:      '50%',
    transform: 'translate(-50%, -50%)',
    width:     400,
    bgcolor:   'background.paper',
    border:    '2px solid #000',
    boxShadow: 24,
    p:         4,
};

export const ModalButton: FC = () => {
    const [ open, setOpen ] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                variant = 'contained'
                onClick = { handleOpen }>Show modal
            </Button>
            <Modal
                aria-describedby = 'modal-modal-description'
                aria-labelledby = 'modal-modal-title'
                open = { open }
                onClose = { handleClose }>
                <Box sx = { style }>
                    <Typography
                        component = 'h2'
                        id = 'modal-modal-title'
                        variant = 'h6'>
                        Great
                    </Typography>
                    <Typography
                        id = 'modal-modal-description'
                        sx = {{ mt: 2 }}>
                        You opened modal window!
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};
