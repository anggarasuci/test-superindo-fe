import * as React from 'react';
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function ModalComponent(props) {
    const router = useRouter()
    const styleModal = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 800,
      height: 600,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      overflow: 'scroll'
    };

    return (<Modal
        open={props.openModal}
        onClose={props.handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={styleModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <List>
                    {props.data.map(item => {
                        return (
                            <ListItem key={item.id} onClick={() => router.push('/' + props.linkTo + '/' + item.id)}>
                                <ListItemButton>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Typography>
        </Box>
    </Modal>)
}