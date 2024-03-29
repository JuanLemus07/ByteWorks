import { Box, Container, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer () {
  return(
    < >
    <Container class="bg-gray-800 text-white py-4">
    <Typography>Siguenos en nuestras redes:</Typography>
        <Box>
          variant={"contained"}
          color={"info"}
          <a>icon={<InstagramIcon/>}</a>
          <a>icon={<FacebookIcon />}</a>
          <a>icon={<XIcon/>}</a>
          
        </Box>
      <Typography>ByteWorks © 2024 . Todos los derechos reservados</Typography>
    </Container>
    </>
  )
}
export default Footer
