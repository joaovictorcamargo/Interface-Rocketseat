// import Head from 'next/head'

import { Heading, Grid, Flex, Link, Button, Text, Icon, InputGroup, InputRightAddon, Input } from '@chakra-ui/core';
import Divider from '../components/Divider';
import {HiOutlineMail} from 'react-icons/hi';

export default function Home() {
  return (
    <Flex
    h="182px"
    backgroundColor="gray.300"
    pt="21px"
    pb="27"
    alignItems="center"
    direction="column"
  >
     <Icon as={HiOutlineMail} size="23px" />

     <Text
     fontSize='16px'
      textAlign="center"
      my="23px"
      
     >
       Cadastre-se e receba as melhores<br/>
       ofertas no seu email
     </Text>
     

     <InputGroup
     w="306px"
 
     >

       <Input
       
       type="text"
       placeholder="E-mail"
       _placeholder={{color: 'gray.100'}}
       borderRadius="21px"
       backgroundColor="gray.800"
       />

         <InputRightAddon
         color="gray.300"
         fontWeight="bold"
         children='Enviar'
         borderRadius="21px"
         backgroundColor="gray.600"
         />

     </InputGroup>
   
    </Flex>

    
  )
}