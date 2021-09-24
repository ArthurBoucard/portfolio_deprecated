import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjCard = (props) => {
    return (
        <Card sx={{ maxWidth: 265, minWidth: 265}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="125"
                    image={props.img}
                    alt={props.alt}
                />
                <CardContent style={{backgroundColor: "#202020"}}>
                    <Typography variant="h5" component="div" color="#EEEEEE">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="#CCCCCC">
                        {props.desc}<br></br>
                        ---------------------------------------------------------
                    </Typography>
                    <Typography variant="body3" color="#AAAAAA">
                        {props.lang}<br></br>
                    </Typography>
                    <Typography variant="body3" color="#AAAAAA">
                        {props.team}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{backgroundColor: "#151515"}} sx={{ maxHeight: 20 }}>
                <Stack direction="row" spacing={1}>
                    <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href={props.gitlink} target="_blank">
                        <GitHubIcon fontSize="small" />
                    </IconButton>
                </Stack>
            </CardActions>
        </Card>
    );
}

export default ProjCard
