import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ADD(){
    return(

<div className='chartsrow'>
      <div className='chartsheading'>
        <span className='line'>PROJECT<MoreVertIcon color='action' /></span>
        <div className='firstproject'>
        <span>Server Migration</span>
        <span>20%</span>
      </div>

      <progress className='progress' id="file" value="20" max="100"></progress>

      <div className='firstproject'>
        <span>Sales Tracking</span>
        <span>40%</span>
      </div>
      
      <progress className='secondprogress' id="file" value="40" max="100"></progress>

      <div className='firstproject'>
        <span>Customer Database</span>
        <span>60%</span>
      </div>
      
      <progress className='thirdprogress' id="file" value="60" max="100"></progress>

      
      <div className='firstproject'>
        <span>Payout Details</span>
        <span>80%</span>
      </div>
      
      <progress className='fourthprogress' id="file" value="80" max="100"></progress>

      <div className='firstproject'>
        <span>Account Setup</span>
        <span>completed</span>
      </div>
      
      <progress className='fifthprogress' id="file" value="100" max="100"></progress>




      </div>

     

      </div>

    )
}
export default ADD