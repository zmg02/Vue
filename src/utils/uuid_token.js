import { v4 as uuid } from 'uuid';
export const getToken = () => {
    let token = localStorage.getItem('VUESHOPTOKEN');
    if (!token) {
        token = uuid();
        localStorage.setItem('VUESHOPTOKEN',token);
    }
    return token;
}