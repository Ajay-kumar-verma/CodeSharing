import { Box,Button,ButtonGroup, Input,Spacer,Center,HStack,VStack} from '@chakra-ui/react';
import {useState} from 'react';

function App() {
  const [Share,updateShare]=useState(true);
  {
    (async () => {
      await navigator.clipboard.writeText("Ajay\n" +
     " kumar \n " 
           +"verma");
    })()}

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
  <ButtonGroup variant='outline' spacing='60'>
   {Share?(<Button onClick={()=>{updateShare(false)}}> Stop  sharing </Button>):
     (<Button onClick={()=>{updateShare(true)}}> Start sharing </Button>)
   }
</ButtonGroup>
 </Box>
  </HStack>
    <Box   bg="white" w="99.5%" h="70vh" p={2} contentEditable={Share} textDecoration="none" ></Box>
  
    <HStack> 

    <Input fontSize="30"  placeholder=' Enter code id ' size='xlg' />
     <Button  fontSize="30"  > Connect  </Button>

     </HStack>
   </VStack> 

</VStack>
 
  </>

    );
}

export default App;
