import './compA.css';
import Card from '@mui/material/Card';

import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PercentIcon from '@mui/icons-material/Percent';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function Man(){
    return(
       
        <div className='box'>
            <Card  sx={{ minWidth: 200 }}>
            <div className="firstbox"><h5 style={{ color:"blue"}}>Earnings (Monthly) </h5><h4><AttachMoneyIcon/>40,000 <AssignmentIcon /></h4> </div>
            </Card>
      


<Card  sx={{ minWidth: 200 }}>
<div className="secondbox"><h5  style={{ color:"green"}}>Earnings (Annualy)  </h5><h4><AttachMoneyIcon/>215,000  <AttachMoneyIcon /></h4>
</div>
</Card>

<Card  sx={{ minWidth: 200 }}>
    <div className="thirdbox"><h5 style={{ color:"violet"}}>TASK</h5><h4>50<PercentIcon/>  <AssignmentIcon/></h4>
</div>
</Card>
 
<Card sx={{ minWidth: 200 }}>
<div className="fourthbox"><h5 style={{ color:"grey"}}>PENDING REQUEST</h5><h4>18  <ChatBubbleOutlineIcon/></h4>
</div>

</Card>

        </div>
);
}


export default Man;