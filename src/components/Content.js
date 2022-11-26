import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button, Card, CardContent, Grid, ListItemText, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BlindsIcon from '@mui/icons-material/Blinds';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import tos_img from "../images/tos_img.png"
import google from "../images/google.png"
import facebook_img from "../images/facebook_img.png"
import Amazon_img from "../images/Amazon_logo.png"
import youtube_img from "../images/YouTube_Logo.png"
import Capgemini_img from "../images/Capgemini_Logo.png"
import cognizant_img from "../images/Cognizant.png"
import accenture_img from "../images/accenture.png"

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
const Content = () => {
  return (
    <>
        <Typography style={{ fontWeight: 'bold', fontSize:20, paddingTop:20 }}>Skilled.Relevant.
            <span 
            style={{color:
                 '#FB8C0A'}}
        >
            Trained
            </span>
        </Typography>
        <Box display="flex" 
            margin="2 auto"
            justifyContent="center"
            align="center"
            paddingTop={5}
            width="vw"
            marginTop={5}
            >
            <Box>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="The best Awaits you" />
                    </ListItem>

                    <ListItem>
                        <BlindsIcon />
                        <ListItemText primary="Your hiring requirements are met everytime   " />
                    </ListItem>
                    <ListItem button>
                        <SupportAgentIcon />    
                        <ListItemText primary="Hire Skilled Candidates" />
                    </ListItem>
                    <ListItem button>
                        <InterpreterModeIcon />
                        <h1><ListItemText primary="Get Ready for easy hiring" /></h1>
                    </ListItem>
                    <ListItem button>
                    <Diversity3Icon />
                        <ListItemText primary="Explore and recruit" />
                    </ListItem>
                </List>
            </Box>
            <Box sx={{paddingLeft:3}}>
                <Card>
                <Typography gutterBottom variant='h4'>Share your hiring requirements</Typography>
                <form>
                    <CardContent>
                        <Grid Container spacing={1}>
                            <Grid xs={6} sm={3} item>
                                <TextField label="First Name" placeholder='Enter First Name' variant="outlined" fullWidth required/>
                            </Grid >
                        </Grid>
                        <Grid Container spacing={1}>
                            <Grid xs={6} sm={3} marginTop={1} item>
                                <TextField label="last Name" placeholder='Enter Last Name' variant="outlined" fullWidth required/>
                            </Grid >
                        </Grid>
                        <Grid xs={6} marginTop={1} item>
                            <TextField label="Designation" placeholder='Eg HR Head' variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={6} marginTop={1} item>
                            <TextField label="Company" placeholder='Enter Company Name' variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid display='flex' justifyContent={"center"} marginTop={1} marginBottom={1} sm={6} >

                            <Grid xs={4} marginRight={2} item>
                                <TextField type="email" label="Work Email" placeholder='Enter email address' variant="outlined" fullWidth required/>
                            </Grid>
                            <Grid xs={4} marginLeft={2} item>
                                <TextField type="number" label="Work Phone Number" placeholder='Enter phone number' variant="outlined" fullWidth required/>
                            </Grid>
                        </Grid>
                        <Grid xs={6}>
                                <Button type="submit" sx={{backgroundColor:"#FB8C0A"}} paddingTop={2} fullWidth variant="contained">Next</Button>
                        </Grid>
                        
                    </CardContent>
                    </form>
                </Card>
            </Box>
        </Box>
        <Typography sx={{fontSize:20,fontWeight:"bold", paddingBottom:2}}>
                    <p>Our Hiring Partners</p>
        </Typography>
        <box sx={{display:"flex", paddingBottom:12, alignItems:"center"}}>
            <img src={tos_img} alt="img" />{' '}
            <img src={google} alt="img" /> {' '}
            <img paddingLeft={3} src={facebook_img} alt="img" />{' '}
            <img paddingLeft={3} src={Amazon_img} alt="img" />{' '}
            <img paddingLeft={3} src={youtube_img} alt="img" />{' '}
            <img paddingLeft={3} src={Capgemini_img} alt="img" />{' '}
            <img paddingLeft={3} src={cognizant_img} alt="img" />{' '}
            <img paddingLeft={3} src={accenture_img} alt="img" />
        </box>
    </>
  )
}

export default Content