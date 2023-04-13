const port = process.env.APP_PORT || 3000
const apiPort = process.env.APP_API_PORT || 3001
const apiBasePath = '/api/auth/'

/*
export const websiteDomain = process.env.VERCEL_URL !== undefined ? process.env.VERCEL_URL :
  process.env.APP_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  `http://localhost:${port}`

export const apiDomain = process.env.VERCEL_URL !== undefined ? process.env.VERCEL_URL :
  process.env.APP_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  `http://localhost:${apiPort}`
*/

export const websiteDomain = `https://patient-portal-tan.vercel.app/`;
export const apiDomain = `https://patient-portal-tan.vercel.app/`;

export const appInfo = {
  appName: 'Patient Portal',
  websiteDomain,
  apiDomain,
  apiBasePath,
}
