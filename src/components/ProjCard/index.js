import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const ProjCard = (props) => {
    return (
        <Card sx={{ maxWidth: 265 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="125"
                image={props.img}
                alt={props.alt}
            />
            <CardContent style={{backgroundColor: "#202020"}} sx={{ maxHeight: 60 }}>
                <Typography variant="h5" component="div" color="#EEEEEE">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="#BBBBBB">
                    {props.desc}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions style={{backgroundColor: "#151515"}} sx={{ maxHeight: 20 }}>
            <Stack direction="row" spacing={1}>
                <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href={props.gitlink} target="_blank">
                    <GitHubIcon fontSize="small" />
                </IconButton>
                <IconButton style={{color: "#FEFEFE"}} aria-label="try project" href={props.runlink}>
                    <PlayArrowIcon />
                </IconButton>
            </Stack>
        </CardActions>
        </Card>
    );
}

export default ProjCard
