import React, { useState } from "react";
import { AppBar, Toolbar, Box, Tabs, Tab, Button, useMediaQuery, createTheme } from "@mui/material";
import NavDrawer from "./NavDrawer";


function NavBarSection(){
  const navItems = ["About Us", "Pricing", "Customers", "Solutions"]

  const Theme = createTheme({
    breakpoints: {
      values: {
        md: 768
      }
    }
  })

  const isMatch = useMediaQuery(Theme.breakpoints.down("md"))

  const [newValue, setNewValue] = useState(false);

  return(
    <div className="mb-12 md:mb-22 className='container-fluid mx-auto">
      <Box>
        <AppBar elevation={0} className="bg-primary border-b border-b-gray-700">
          <Toolbar className="flex justify-between">
            <img src="logo.svg" alt="logo" />

            {
              isMatch ? (<>
                <NavDrawer/>
              </>
              ):(
                <>
                  <Tabs onChange={(e, nValue)=>(setNewValue(nValue))} value={newValue} 
                    sx={{'& .MuiTabs-indicator': {backgroundColor: '#0FF1F6'},}}>
                      {
                        navItems.map((items, index) => (
                          <Tab key={index} className="text-white" label={items}/>
                        ))
                      }
                  </Tabs>
                    
                  <div className="flex justify-center gap-3 items-center">
                    <Button variant="contained" className="text-nowrap rounded-full"
                      sx={{
                        backgroundColor: '#0FF1F6',
                        textTransform: 'none',
                        color: 'black',
                        border: '1px solid transparent',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          borderColor: '#0FF1F6',
                          color: 'white',
                          transform: 'scale(1.05)',
                        },
                      }}>
                      Book a Demo
                    </Button>
                    
                    <Button className="border-white text-white hover:bg-white hover:text-black hover:border-0 hover:scale-105 text-nowrap capitalize rounded-full" variant="outlined">
                      Contact Us
                    </Button>
                  </div>
                </>
              )
            }
              
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default NavBarSection;