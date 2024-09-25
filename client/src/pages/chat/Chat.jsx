import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'; // Import the ChatBubble icon

import {Modal,styled }from '@mui/material';
import Box from '@mui/material/Box'; 
import {useState} from "react"

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})


export default function Chat() {
    const [open,setOpen]=useState(false)
  return (
    <>
    <Tooltip
      onClick={e=>setOpen(true)}
     title="Chat"
      sx={{position:"fixed", bottom:20}}>
  <IconButton>
  <ChatBubbleIcon style={{ fontSize: 40, color: 'blue' }} />
  </IconButton>
</Tooltip>

<StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  width={400} height={280} bgcolor={'white'} p={3} borderRadius={5}>
   hello
  </Box>
</StyledModal>
</>
  )
}
