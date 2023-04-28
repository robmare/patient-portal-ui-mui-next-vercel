import { Box } from "@mui/material";
import { redirectToAuth } from 'supertokens-auth-react';

export default function Login() {
    async function login() {
        redirectToAuth({ redirectBack: false });
    }

    return (
        <Box sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <div
                onClick={login}
                style={{
                    display: 'flex',
                    width: '116px',
                    height: '42px',
                    backgroundColor: '#000000',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 'bold',
                }}>
                SIGN IN
            </div>
        </Box>
    );
}
  