import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import * as React from 'react';
const label = { inputProps: { 'aria-label': 'Change Color' } };

function ChangePalette() {
  const buttons = [
    <Button key="y">y</Button>,
    <Button key="r">r</Button>,
    <Button key="b">b</Button>,
  ];
  const [themeUser, setThemeUser] = React.useState(true);

  const handleChange = (event) => {
    if (event.target.checked == true) {
      setThemeUser("theme_1");
    } else {
      setThemeUser("theme_2");
    }
  };

  return (
    <div>
      <Switch onChange={handleChange} {...label} defaultChecked label="Theme" />
    </div>
  );
};

export default ChangePalette;