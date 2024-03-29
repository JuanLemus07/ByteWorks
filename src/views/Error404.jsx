import { Box, CardMedia, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"
function Error404 () {

  return(
    <>
      <Container>
        <Box>
        <CardMedia
        component = "img"
        image="../assets/img/404-pnf.jpg"
        alt="Page no Found"
        />
        </Box>
        <Typography variant="body2" > 
        ¿Perdido? <Link to="/home">Go to Home</Link>
        </Typography>
      </Container>
    </>
  )
}
  
export default Error404