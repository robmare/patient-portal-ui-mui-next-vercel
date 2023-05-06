import { useState } from 'react';

import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Code as PasswordlessIcon, Lock as PasswordIcon } from '@mui/icons-material';
import { } from '@mui/icons-material';
import { redirectToAuth } from 'supertokens-auth-react';

export default function Login() {
    const [rid, setRid] = useState('passwordless');
    const [selectedMethod, setMethod] = useState(0);

    async function login() {
        redirectToAuth({ show: "signin", redirectBack: false, queryParams: { rid: rid } });
    }

    function changeMethod (rid: string, index: number) {
        setRid(rid);
        setMethod(index);
    }

    return (
        <Box sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <Typography
                variant='h4'
                noWrap
                style={{
                    marginBottom: "40px",
                }}>
                Select a Sign In Method
            </Typography>

            <List>
                <ListItem disablePadding 
                    style={{
                        backgroundColor: (selectedMethod === 0) ? "#555" : "inherit",
                    }}>
                    <ListItemButton onClick={() => changeMethod('passwordless', 0)}>
                        <ListItemIcon>
                            <PasswordlessIcon />
                        </ListItemIcon>
                        <ListItemText primary="Email or Phone Number + OTP Code" secondary="Sign In with your Email Address or Phone Number and OTP Code sent via SMS/Email" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding
                    style={{
                        backgroundColor: (selectedMethod === 1) ? "#555" : "inherit",
                    }}>
                    <ListItemButton onClick={() => changeMethod('emailpassword', 1)}>
                        <ListItemIcon>
                            <PasswordIcon />
                        </ListItemIcon>
                        <ListItemText primary="Email or Phone Number + Password"  secondary="Sign In with your Email Address or Phone Number and your Password" />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </List>

            <div
                onClick={login}
                style={{
                    marginTop: "40px",
                    display: 'flex',
                    width: '116px',
                    height: '42px',
                    backgroundColor: '#555',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                }}>
                SIGN IN
            </div>
        </Box>
    );
}
  