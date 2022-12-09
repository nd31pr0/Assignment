import { CardContent, Grid, TextField, Typography } from "@mui/material"

import React from 'react'

const Step3 = () => {
  return (
    <>
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
    </>
  )
}

export default Step3

