import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function getCookie(key: string): string {
    return cookies.get(key);    
}

export function setCookie(key: string, value: string) {
    return cookies.set(key, value, { path: '/' });    
}

export function getLng() {
    return (getCookie('sCurrLanguage')) ? getCookie('sCurrLanguage') : 'en';
}