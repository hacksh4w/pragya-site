
import { useState, useEffect, useContext } from 'react';
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
}