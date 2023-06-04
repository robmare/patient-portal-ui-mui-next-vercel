import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function StickyFooter() {
  const [value, setValue] = React.useState(0);

  const style = {
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
  }

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      style={style}>
      <BottomNavigationAction label="Recents" icon={<RestoreIcon /> } style={style} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} style={style}/>
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} style={style} />
    </BottomNavigation>
  );
}