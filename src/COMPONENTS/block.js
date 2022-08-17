import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

function Block(){
    return(
        <div>
<div className='cards'>
<Card sx={{ minWidth: 250 ,backgroundColor:"#4e73df",height:"100px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,color:"white" }} color="text.secondary" gutterBottom>
          Primary

        </Typography>
        <Typography variant="h6" component="div"  sx={{ color:"white" }}>
          #4e73df
        </Typography>
        
      </CardContent>
   
    </Card>


    
<Card sx={{ minWidth: 250 ,backgroundColor:"#1cc88a", height:"100px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,color:"white" }} color="text.secondary" gutterBottom>
        Success

        </Typography>
        <Typography variant="h6" component="div"  sx={{ color:"white" }}>
        #1cc88a
        </Typography>
        
      </CardContent>
   
    </Card>
</div>

<div className='cards'>
<Card sx={{ minWidth: 250 ,backgroundColor:"#36b9cc", height:"100px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,color:"white" }} color="text.secondary" gutterBottom>
        Info

        </Typography>
        <Typography variant="h6" component="div"  sx={{ color:"white" }}>
        #36b9cc
        </Typography>
        
      </CardContent>
   
    </Card> 

    <Card sx={{ minWidth: 250 ,backgroundColor:"#f6c23e", height:"100px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,color:"white" }} color="text.secondary" gutterBottom>
        Warning

        </Typography>
        <Typography variant="h6" component="div"  sx={{ color:"white" }}>
        #f6c23e
        </Typography>
        
      </CardContent>
   
    </Card>
</div>

<div className='cards'>
<Card sx={{ minWidth: 250 ,backgroundColor:"#e74a3b", height:"100px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,color:"white" }} color="text.secondary" gutterBottom>
        Danger

        </Typography>
        <Typography variant="h6" component="div"  sx={{ color:"white" }}>
        #e74a3b
        </Typography>
        
      </CardContent>
   
    </Card> 

    <Card sx={{ minWidth: 250 ,backgroundColor:"#858796", height:"100px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,color:"white" }} color="text.secondary" gutterBottom>
        Secondary

        </Typography>
        <Typography variant="h6" component="div"  sx={{ color:"white" }}>
        #858796
        </Typography>
        
      </CardContent>
   
    </Card>
</div>

<div className='cards'>
<Card sx={{ minWidth: 250 ,backgroundColor:"#f8f9fc", height:"100px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,color:"Grey" }} color="text.secondary" gutterBottom>
        Light

        </Typography>
        <Typography variant="h6" component="div"  sx={{ color:"Grey" }}>
        #f8f9fc
        </Typography>
        
      </CardContent>
   
    </Card> 

    <Card sx={{ minWidth: 250 ,backgroundColor:"#5a5c69", height:"100px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,color:"white" }} color="text.secondary" gutterBottom>
        Dark

        </Typography>
        <Typography variant="h6" component="div"  sx={{ color:"white" }}>
        #5a5c69
        </Typography>
        
      </CardContent>
   
    </Card>
</div>

</div>


    )
}
export default Block;