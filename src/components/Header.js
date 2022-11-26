import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from "../images/eduonixLogo.png"
import bg from "../images/bg.png"
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { Container } from '@mui/system';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 80,
    [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


const Header = () => {
    
  return (
    <>
        <AppBar position="static" sx={{backgroundColor:"white"}}>
            <Toolbar sx={{display:""}}>
                <Box>
                    <img src={logo} alt="eduonix logo" />
                </Box>
                <box>
                    <Typography sx={{color:"black", paddingLeft:5, fontWeight:'bold'}}>Explore <ExpandMoreSharpIcon /></Typography>
                </box>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon sx={{color:'black'}}/>
                    </SearchIconWrapper>
                    <StyledInputBase sx={{color:'grey'}}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
            
                <Box sx={{ display: {  md: 'flex',} }}>
                    <IconButton
                    size="large"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                    >
                    <AddShoppingCartIcon sx={{color:"black"}} />
                    </IconButton>
                </Box>
                <Box direction="row" spacing={2}>
                    <Button sx={{backgroundColor:"white", color:"black"}}>Login</Button>
                    <Button sx={{backgroundColor:"#FB8C0A", color:"white"}}>Free Signup</Button>
                </Box>
            </Toolbar>
        </AppBar>
        <Container sx={{marginTop:2}}>
                <img src={bg} alt="content background" sx={{paddingTop:50, maxWidth: "100%"}}/>
        </Container>

    </>
  )
}

export default Header