import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Illu(){
    return(
<div className='chartsheading' style={{width:"400px" ,height:"400px", marginTop:"50px" }}>
        <span className='line'  style={{width:"400px"}}>Illustrations<MoreVertIcon color='action' /></span>
        <span ><img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="Girl in a jacket" width="400" height="250" /></span> <br/>
        <span className='fun'>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution! </span>
      </div>

      
    )
}
export default Illu;