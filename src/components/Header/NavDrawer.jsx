
import React, {useState} from 'react'
import { Drawer, Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';
import BuildIcon from '@mui/icons-material/Build';
import BookIcon from '@mui/icons-material/Book';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function NavDrawer() {
  const DrawerList = [
    {
      id: 1,
      icon: InfoIcon,
      text: "About Us"
    },
    {
      id: 2,
      icon: AttachMoneyIcon,
      text: "Pricing"
    },
    {
      id: 3,
      icon: GroupIcon,
      text: "Customers"
    },
    {
      id: 4,
      icon: BuildIcon,
      text: "Solutions"
    },
    {
      id: 5,
      icon: BookIcon,
      text: "Book a Demo"
    },
    {
      id: 6,
      icon: ContactMailIcon,
      text: "Contact Us"
    },
  ]
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <Box sx={{display: "flex", }}>
      <Drawer anchor='left' open={openDrawer} onClose={()=>(setOpenDrawer(false))} 
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#002228", 
            color: "white",
          },
        }}
        >
        <List>
          {
            DrawerList.map((item) => (
              <React.Fragment key={item.id}>
                <ListItemButton sx={{
                  '&:hover .MuiListItemIcon-root': {
                    color: '#0FF1F6',
                    transform: 'scale(1.3)',
                    transition: 'transform 0.3s ease, color 0.3s ease'
                   },
                   }} 
                   onClick={()=>(setOpenDrawer(false))}>
                  <ListItemIcon sx={{color: 'white'}}><item.icon /></ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItemButton>
                {item.text === "Solutions" && <Divider sx={{backgroundColor: "#045a5c"}}/>}
              </React.Fragment>
            ))
          }
        </List>
      </Drawer>
      <IconButton className='text-neutral shadow-md hover:shadow-neutral focus:scale-90' onClick={()=>setOpenDrawer(prevState => !prevState)}><MenuIcon/></IconButton>
    </Box>
  )
}

export default NavDrawer;
