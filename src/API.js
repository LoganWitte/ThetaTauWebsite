import axios from "axios";
const url = "https://ucfthetatau.com/api"

// Utility function for handling errors
const handleError = (error) => {
    if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
    } else if (error.request) {
        console.error('No response received:', error.request);
    } else {
        console.error('Error message:', error.message);
    }
}

//
export const login = async (username, password) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    try {
        const response = await axios.post(`${url}/login`, formData);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
}
export const logout = async () => {
    try {
        const response = await axios.get(`${url}/logout`);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
}


export const getShopItems = async () => {
    try {
        const response = await axios.get(`${url}/shop`);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
}

export const getBrothers = async () => {
    try {
        const response = await axios.get(`${url}/brothers`);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
}

export const getRushText = async () => {
    try {
        const response = await axios.get(`${url}/rush`);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
}

export const getDailyInfo = async () => {
    try {
        const response = await axios.get(`${url}/dailyInfo`);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
}

export const addBrother = async (name, pledge_class, image) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('pledge_class', pledge_class);
    formData.append('image', image);
    try {
        const response = await axios.post(`${url}/add_brother`, formData);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
}
export const removeBrother = async (brotherID) => {

}
export const updateRushText = async (newText) => {

}
export const updateDailyInfo = async (newDailyInfo) => {

}