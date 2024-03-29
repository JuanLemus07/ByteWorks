import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material"

function InfoCard () {

  return(
    <Card
      sx={{
        transition: "0.2s",
        "& hover":{
          transform: "scale(1.05s)",
        },
      }}  
    >
      <CardActionArea>
        <CardMedia
        component = "img"
        image="http://via.placeholder.com/1000x200"
        height="200"
        alt="foto de perfil"
        />
        <CardContent>
          <Typography variant="h5">Card titlte</Typography>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, voluptas. Nemo cum eos incidunt dignissimos ipsam, accusantium, rerum mollitia fuga velit totam, ducimus debitis iusto? Enim et itaque cumque corporis!</p>
        </CardContent>
        </CardActionArea>
      <CardActions>
        <Button variant="contained">Add</Button>
        <Button color="=error">Remove</Button>
      </CardActions>
    </Card>
  )
}
  
export default InfoCard
