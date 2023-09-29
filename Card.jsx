import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonAppBar from './Navbar';
import {useNavigate} from 'react-router-dom'
const customColorPalette = {
  lightOrange: '#fcbf49', // Light Orange
  lightBlue: '#ADD8E6', // Light Blue
  darkBlue: '#000080', // Dark Blue
};


export default function ActionAreaCard() {

  const navigate = useNavigate()


  const handleLearnMore1 = () => {
    navigate('/item_detail', {
      state: { h5Content: 'AIGS Frontend Development Team ' }, // Pass h5 content
    });
  };


  const handleLearnMore2 = () => {
    navigate('/item_detail', {
      state: { h5Content: 'AIGS Backend Development Team' }, // Pass h5 content
    });
  };

  const handleLearnMore3 = () => {
    navigate('/item_detail', {
      state: { h5Content: 'AIGS Testing Development Team' }, // Pass h5 content
    });
  };

  const handleLearnMore4 = () => {
    navigate('/item_detail', {
      state: { h5Content: 'AIGS AI & ML Development Team' }, // Pass h5 content
    });
  };

  return (
    <>
      <ButtonAppBar />
      <div style={{ display: 'flex', flexDirection: 'row',  gap: '20px' }}>
     
        <Card sx={{ maxWidth: 450, padding: 0.5, boxShadow: 1, margin: 5,backgroundColor: customColorPalette.lightOrange,
            color: 'white',}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              width="300"
              image="https://tse3.mm.bing.net/th?id=OIP.qvz2odcugTRzrBaNXrMTcgHaE7&pid=Api&P=0&h=220"
              sx={{
                objectFit: 'cover',
                height: '100%'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <h5> AIGS Frontend Development Team  </h5>
              </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                backgroundColor: customColorPalette.darkBlue,
                color: 'white',
                border: '3px solid ' + customColorPalette.lightBlue,
                '&:hover': {
                  backgroundColor: 'black',
                },
              }}
              onClick={handleLearnMore1}
            >
              Learn More
              </Button>
            </div>
          </CardActionArea>
        </Card>

     
        <Card sx={{ maxWidth: 450, padding: 0.5, boxShadow: 1, margin: 5, backgroundColor: customColorPalette.lightOrange,
            color: 'white', }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="200"
              image="https://tse3.mm.bing.net/th?id=OIP.qvz2odcugTRzrBaNXrMTcgHaE7&pid=Api&P=0&h=220"
              sx={{
                objectFit: 'cover',
                height: '100%'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <h5>AIGS Backend Development Team  </h5>
              </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                backgroundColor: customColorPalette.darkBlue,
                color: 'white',
                border: '3px solid ' + customColorPalette.lightBlue,
                '&:hover': {
                  backgroundColor: 'black',
                },
              }}
              onClick={handleLearnMore2}
            >
              Learn More
              </Button>
            </div>
          </CardActionArea>
        </Card>


      
        <Card sx={{ maxWidth: 450, padding: 0.5, boxShadow: 1, margin: 5,backgroundColor: customColorPalette.lightOrange,
            color: 'white', }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="200"
              image="https://tse3.mm.bing.net/th?id=OIP.qvz2odcugTRzrBaNXrMTcgHaE7&pid=Api&P=0&h=220"
              sx={{
                objectFit: 'cover',
                height: '100%'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <h5> AIGS Testing Development Team  </h5>
              </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                backgroundColor: customColorPalette.darkBlue,
                color: 'white',
                border: '3px solid ' + customColorPalette.lightBlue,
                '&:hover': {
                  backgroundColor: 'black',
                },
              }}
              onClick={handleLearnMore3}
            >
              Learn More
              </Button>
            </div>
          </CardActionArea>
        </Card>
       
        <Card sx={{ maxWidth: 450, padding: 0.5, boxShadow: 1, margin: 5,backgroundColor: customColorPalette.lightOrange,
            color: 'white', }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="200"
              image="https://tse3.mm.bing.net/th?id=OIP.qvz2odcugTRzrBaNXrMTcgHaE7&pid=Api&P=0&h=220"
              sx={{
                objectFit: 'cover',
                height: '100%'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <h5> AIGS AI & ML Development Team  </h5>
              </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'center' ,}}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                backgroundColor: customColorPalette.darkBlue,
                color: 'white',
                border: '3px solid ' + customColorPalette.lightBlue,
                '&:hover': {
                  backgroundColor: 'black',
                },
              }}
              onClick={handleLearnMore4}
            >
              Learn More
              </Button>
            </div>
          </CardActionArea>
        </Card>
</div>
  
    </>
  );
}