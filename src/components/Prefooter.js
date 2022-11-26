import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Prefooter = () => {
  return (
    <div>
        <Typography sx={{align:"center", fontWeight:"bold", fontSize:20, padding:3}}>
            Services Offered
        </Typography>
        <Container sx={{display:"flex", padding:2}} >
            
            <Box sx={{backgroundColor:"#F5F3D9", padding:2, margin:2}}>
                <Typography>
                    <h4>Fresh Freshers/Inter Hiring</h4>
                    <p>Hire young minds with relevant skills. Talent acquisition
                     has never been easier. You can hire trained professionals for the exact
                     skills that match your requirements.</p>
                </Typography>
            </Box>
            <Box sx={{backgroundColor:"#EDE6FF", padding:2, margin:2}}>
                <Typography>
                    <h4>DataBase Mailing</h4>
                    <p>Reach out to the right candidate at one go from our 
                    extensive talent pool of over a million Indian candidates. Your
                    set parameters are used to select the best suited candidate that fits 
                    into your organization.</p>
                </Typography>
            </Box>
            <Box sx={{backgroundColor:"#E1FAFF", padding:2, margin:2}}>
                <Typography>
                    <h4>Job Postings</h4>
                    <p>Post your requirements & it will be met. Your search for the best ends 
                    here with batches full of relevant and trained freshers/professionals.</p>
                </Typography>
            </Box>
            <Box sx={{backgroundColor:"#E9F5E7", padding:2, margin:2}}>
                <Typography>
                    <h4>Manage your listings</h4>
                    <p>Save everything recruitement related all in one place so you can pick up
                    where you left off. We cater for your recurring requirements.</p>
                </Typography>
            </Box>
        </Container>
    </div>
  )
}

export default Prefooter