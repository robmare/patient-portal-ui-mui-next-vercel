const apiBasePath = '/api/auth/'
const port = ":3000";
const host = "http://192.168.1.66";
//const port = "";
//const host = "https://patient-portal-tan.vercel.app";

export const websiteDomain = `${host}${port}/`;
export const apiDomain = `${host}${port}/`;

export const appInfo = {
  appName: 'Patient Portal',
  websiteDomain,
  apiDomain,
  apiBasePath,
}
