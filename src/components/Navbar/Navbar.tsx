import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Button,
  Image,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const navlinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Styles', link: '/styles' },
    { name: 'Stories', link: '/stories' },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const whatsappUrl = 'https://wa.me/918075258653?text=Hi';

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Box width="100vw">
      <Flex
        as="header"
        position="fixed"
        minHeight="5rem"
        align="center"
        justify="center"
        border="1.5px solid green.500"
        bg="#EBF6EA"
        padding="15px 0"
        width="100vw"
        transition="visibility 0.2s, opacity 0.2s linear"
        visibility="visible"
        opacity="1"
      >
        <Flex
          as="nav"
          minWidth={{ base: '95vw', md: '85vw', xl: '1400px' }}
          align="center"
          justify={{ base: 'center', md: 'space-between' }}
          padding="0 !important"
        >
          <IconButton
            size="lg"
            color="green.700"
            aria-label="menu"
            display={{ base: 'flex', md: 'none' }}
            position="absolute"
            top="20px"
            left="20px"
            onClick={() => setDrawerOpen(true)}
          >
            <HamburgerIcon />
          </IconButton>

          <Image
            src={logo}
            alt=""
            boxSize="3.5rem"
            cursor="pointer"
            onClick={scrollToTop}
          />

          <Flex
            display={{ base: 'none', md: 'flex' }}
            flexDirection="row"
            justifyContent="space-between"
            borderRadius="1.53125rem"
            border="1.5px solid green.500"
          >
            {navlinks.map((value, index) => (
              <ScrollLink
                key={index}
                to={value.link}
                style={{ textDecoration: 'none' }}
                onClick={scrollToTop}
              >
                <Text
                  color="green.500"
                  margin="10px 20px"
                  fontSize={{ md: '1rem', xl: '1.25rem' }}
                  cursor="pointer"
                  _hover={{
                    fontWeight: '500',
                    color: 'green.700',
                  }}
                >
                  {value.name}
                </Text>
              </ScrollLink>
            ))}
          </Flex>

          <Box>
            <Button
              onClick={() => {
                window.location.href = whatsappUrl;
              }}
              bg="green.500"
              width="7.375rem"
              display={{ base: 'none', md: 'flex' }}
              height="3.0625rem"
              flexShrink="0"
              color="green.700"
              _hover={{
                bg: 'orange.500',
                color: 'white',
              }}
            >
              <Text fontWeight="500" textTransform="none">
                Contact Us
              </Text>
            </Button>
          </Box>
        </Flex>
      </Flex>
      {/* Drawer */}
      <Drawer placement="left" onClose={closeDrawer} isOpen={drawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            {navlinks.map((value, index) => (
              <ChakraLink
                key={index}
                as={ScrollLink}
                to={value.link}
                textDecoration='none'

                onClick={() => {
                  closeDrawer();
                  scrollToTop();
                }}
              >
                <Text color="green.500" margin="20px 0" style={{ textDecoration: 'none' }} cursor="pointer">
                  {value.name}
                </Text>
              </ChakraLink>
           ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
