import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const OAuthButton:React.FC = () => {

    return (
        <Flex direction="column" width="100%" mb={4}>
            <Button variant='oauth' mb={2}>
                <Image src="/images/googl.webp" height="38px" mr={1}/> Continue With Google
            </Button>
            <Button variant='oauth'>Others</Button>
        </Flex>
    )
}
export default OAuthButton;