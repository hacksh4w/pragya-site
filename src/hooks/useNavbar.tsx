import { useState, useEffect } from 'react';

export default function useNavbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [width900, setWidth900] = useState(window.innerWidth <= 900);

  function toggleDrawer(isOpen: boolean) {
    setOpen(isOpen);
    console.log(isOpen);
  }

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      if (currentPosition > scrollPosition) {
        setScroll(true);
      } else if (currentPosition <= scrollPosition) {
        setScroll(false);
      }
    }

    function handleResize() {
      setWidth900(window.innerWidth <= 900);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollPosition]);

  return [scroll, open, toggleDrawer, width900] as const;
}



{/*import { useState, useEffect, useContext } from 'react';
import { themeContext } from '../Contexts/MediaQueries/MediaQuery';

export default function useNavbar() {
  const { width900, setOpen, open } = useContext(themeContext);
  const [scrollp, setScrollP] = useState<number>(window.scrollY);
  const [scroll, setScroll] = useState<boolean>(false);


  function toggleDrawer(open: boolean) {
    setOpen(open);
    console.log(open);
  }
  useEffect(() => {
    window.addEventListener('scroll', navScrolled);
    function navScrolled() {
      setScrollP(window.scrollY);
      if (window.scrollY > scrollp) {
        setScroll(true);
        // console.log(scrollp,scroll)
      } else if (window.scrollY <= scrollp) {
        setScroll(false);
      }
      //   console.log(scrollp, scroll)
    }
    return () => {
      window.removeEventListener('scroll', navScrolled);
    };
  }, [scrollp]);
  return [scroll, open, toggleDrawer, width900] as const;
} */}