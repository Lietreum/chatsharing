import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SearchInput from './SearchInput';
import RightContent from './rightcontent/RightContent';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import Directory from './directory/Directory';

const Navbar:React.FC = () => {
    const [user, loading, error] = useAuthState(auth);
    
    return (
        <Flex bg="white" height='44px' padding='6px 10px' justify={{md:"space-between"}}>
            <Flex align="center" width={{base:"40px", md:"auto"}} mr={{base: 0, md: 2}}>
                <Image src="/images/Reddit.svg" height="30px" /> 
                <Image src="/images/redtext.svg" height="17px" marginLeft="1.5px" display={{ base :'none', md: "unset"}}/>
            </Flex>
            {user && < Directory/>}
            <SearchInput user={user}/>
            <RightContent user={user} />
        </Flex>
    );
}
export default Navbar;