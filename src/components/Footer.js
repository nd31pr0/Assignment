import { Box } from '@mui/material'
import React from 'react'
import footer from "../images/footer_img.png"

const Footer = () => {
  return (
    <>
        <Box style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '2.5rem'}}>
            <img src={footer} alt="" width="inherit" />
        </Box>
    </>
  )
}

export default Footer