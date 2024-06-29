import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import { Navbar, Title } from '../../components';
import { banner } from './imports';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > 0) {
              setShowNavbar(true);
          } else {
              setShowNavbar(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <Grid sx = {{backgroundImage: `url(${banner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '20px'}}>
        <Grid sx = {{position: 'sticky',
                top: 0,
                zIndex: 1010,
                transition: 'top 0.3s',
                ...(showNavbar ? { top: '0' } : { top: '-100px' }),}}>
              <Navbar/>
        </Grid>
        <Title/>
    </Grid>
  )
}

export default Header