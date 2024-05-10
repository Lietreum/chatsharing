import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SearchInput from './SearchInput';
import RightContent from './rightcontent/RightContent';

const Navbar:React.FC = () => {
    
    return (
        <Flex bg="white" height='44px' padding='6px 10px'>
            <Flex align="center">
                <Image src="/images/Reddit.svg" height="30px" /> 
                <Image src="/images/redtext.svg" height="17px" marginLeft="1.5px" display={{ base :'none', md: "unset"}}/>
            </Flex>
            {/* <Directory/> */}
            <SearchInput/>
            <RightContent />
        </Flex>
    );
}
export default Navbar;