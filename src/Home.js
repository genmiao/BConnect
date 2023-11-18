import './home.css';
import { Button, Grid} from '@mui/material';
import { ThemeProvider } from '@mui/system';


function Home() {
  return (
    
<div>
    <div className='gridItem'>
        <div> <img src={"logo.png"} className="imageStyle"/> </div>
         <div><img src={"logo.png"} className="imageStyle2"/></div>
         <div><img src = {"BC.png"} className="imageStyle3"/></div>
         <div className='contbn'>
         <Button variant='contained' className='btn1' style={{backgroundColor: '#3E5F1B',color:'#F7F6BB',fontWeight:'bolder'}}>Home</Button>
         <Button variant='contained' className='btn2' style={{backgroundColor: '#3E5F1B',color:'#F7F6BB',fontWeight:'bolder'}}>Profile</Button>
         <Button variant='contained' className='btn3' style={{backgroundColor: '#3E5F1B',color:'#F7F6BB',fontWeight:'bolder'}}>Announcements</Button>
         <Button variant='contained' className='btn4' style={{backgroundColor: '#3E5F1B',color:'#F7F6BB',fontWeight:'bolder'}}>Information</Button>
         <Button variant='contained' className='btn5' style={{backgroundColor: '#3E5F1B',color:'#F7F6BB',fontWeight:'bolder'}}>Directory</Button>
         <Button variant='contained' className='btn6' style={{backgroundColor: '#3E5F1B',color:'#F7F6BB',fontWeight:'bolder'}}>Calendar</Button>
         <Button variant='contained' className='btn7' style={{backgroundColor: '#3E5F1B',color:'#F7F6BB',fontWeight:'bolder'}}>Requests</Button>
         <Button variant='contained' className='btn8' style={{backgroundColor: '#3E5F1B',color:'#F7F6BB',fontWeight:'bolder'}}>Emergency</Button>
         <Button variant='contained' className='btn9' style={{backgroundColor: '#3E5F1B',color:'#F7F6BB',fontWeight:'bolder'}}>Forum</Button>
         <Button variant='contained' className='btn10'style={{backgroundColor: '#3E5F1B',color:'#F7F6BB',fontWeight:'bolder'}}>Businesses</Button>
         </div>
    </div>
    <Grid container className='gridItem2'>
    <Grid className='container'>
       <Grid item>
       <h1 className='stmt1'>WELCOME TO BARANGAY CONNECT</h1>
       <h2 className='stmt2'>Your Community at Your Fingertips!</h2>
       <p className='stmt3'>We are absolutely delighted to introduce you to a revolutionary way of
                             connecting, engaging, and simplifying life in our cherished community. At 
                             BarangayConnect, we are committed to empowering you, our esteemed 
                             residents, and enhancing the quality of your daily life in ways you've never 
                             experienced before. With our innovative platform, you can:<br></br><br></br>
                             STAY INFORMED: Access real-time updates in your neighborhood, so you're always in the know about what's happening in your community.<br></br><br></br>
                             CONNECT WITH YOUR NEIGHBORS: Forge meaningful connections with your neighbors, fostering a strong sense of camaraderie and support within the community.<br></br><br></br>
                             VOICE YOUR IDEAS: Share your suggestions and ideas for community improvement, and be an active participant in shaping the future of our Barangay.<br></br><br></br>
                             DISCOVER OPPORTUNITIES: Uncover exciting opportunities for local involvement.<br></br><br></br>
                             Your community, your app – BarangayConnect.
       </p>
       <div></div>

       </Grid>
    </Grid>
   
     </Grid>
    
</div>


  );
}

export default Home;