export const SESSION_NAME = {
    'token': 'token',
    'USER': 'USER',
};

export const setSESSION = (session_name, data) => {
    return localStorage.setItem(SESSION_NAME[session_name], data);
};

export const getSESSION = (session_name) => {
    let value = localStorage.getItem(SESSION_NAME[session_name]);
    try {
        return JSON.parse(localStorage.getItem(SESSION_NAME[session_name]));
    } catch (error) {
        return value;
    }
};


export const removeSESSION = (session_name, remove_all = false) => {
    let removeAll = () => {
        for (let k in SESSION_NAME) {
            localStorage.removeItem(SESSION_NAME[k]);
        }
    };
    let removeItems = () => {
        for (let i = 0; i < session_name.length; i++) {
            localStorage.removeItem(session_name[i]);
        }
    };
    if (remove_all) return removeAll();
    if (Array.isArray(session_name)) return removeItems();
    return localStorage.removeItem(session_name);
};