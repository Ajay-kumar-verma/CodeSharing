import { Box,Button,ButtonGroup, Input,Textarea,Center,HStack,VStack, Spacer} from '@chakra-ui/react';
import {useState,useEffect} from 'react';

import io from 'socket.io-client'
const ENDPOINT='localhost:2000';
const socket=io(ENDPOINT);

function App() {
  const [Share,updateShare]=useState(true);
  const [code,setCode]=useState(""); 
  const [allow,setAllow]=useState(false); 
 

useEffect(()=>{
 socket.on('code',val=>{
  console.log("code recieved ..!")
  setCode(JSON.parse(val));


 })
},[])

  return (
  <>

   <VStack bg='#D3D3D3'  h="100vh"  >
   <VStack w='80%' bg='black'>
  <Center bg="white" w="99.5%"  fontFamily={"Times New Roman"} 
  fontSize={50} color="green" > CodeSharing Website </Center>
 
  <HStack bg='white' w="99.5%"  p={1}>

   <Box bg="white" w="99.5%"  p={4} color='red'>
  
   {Share?("Your code is sharing to all ."):
     ("Stopped  sharing .")
   }

    </Box>
  

    <Box p={4} color='white'>
  <ButtonGroup variant='outline' spacing='6'>
   {Share?(<Button onClick={()=>{updateShare(false)}}> Stop  sharing </Button>):
     (<Button onClick={()=>{updateShare(true)}}> Start sharing </Button>)
   }
</ButtonGroup>
 </Box>
  </HStack>


    <Box   bg="white" w="99.5%" h="70vh"    textDecoration="none" >

  <Textarea  
  border={allow?"3px solid red":"3px solid green"}
 

   w="99%" h="69vh"
   p={2}
    value={code}
    onChange={e=>{setCode(e.target.value);

      let data=JSON.stringify(e.target.value);
      console.log("code Updated ..!",data)
     if(Share)(socket.emit('updateCode',data))
}   
    }

  />

    </Box>
    <Spacer/>

    {/* <HStack> 
     <Box w="90%">  
    <Input fontSize="30"  placeholder=' Enter name ' size='xlg' />
    </Box>

  <Spacer/>    
      <Box>
     <Button  fontSize="30"  > Connect  </Button>
         </Box>
     </HStack> */}



   </VStack> 
</VStack>
 
  </>

    );
}

export default App;


// (async () => {
//   await navigator.clipboard.writeText("Ajay\n" +
//  " kumar \n " 
//        +"verma");
// })()}
