import styled from "@emotion/styled";
import { Box, Container, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";
import HelpDevLogin from "../components/modals/HelpDevLogin";
import { langConfig } from '../translations/config';

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Login = () => {
  const tConfig = langConfig;
  const { t } = useTranslation();

  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              {t('PP_SIGN_IN_DESC')}
            </Typography>
          </HeadingStyle>

          <Box component={motion.div} {...fadeInUp}>
            Qui vanno le icone per selezionare il metodo di login
          </Box>

          <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider>

          <LoginForm />

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
          >
          </Typography>
          <HelpDevLogin />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
