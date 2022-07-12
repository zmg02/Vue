export const setToken = (token) => {
    sessionStorage.setItem('SHOPTOKEN', token);
}

export const getToken = () => {
    return sessionStorage.getItem('SHOPTOKEN');
}

export const removeToken = () => {
    sessionStorage.removeItem('SHOPTOKEN');
}