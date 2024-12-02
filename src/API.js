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

export const getDayInfo = async () => {
    try {
        const response = await axios.get(`${url}/get_day_info`);
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

export const addShopItem = async (name, description, sizes, image, price) => {
    const formData = new FormData();
    formData.append("product_name", name);
    formData.append("description", description);
    formData.append("size", sizes);
    formData.append("image", image);
    formData.append("price", price);
    try {
        const response = await axios.post(`${url}/add_shop_item`, formData);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
}

export const updateRushText = async (newRushText) => {
    const formData = new FormData();
    formData.append("text", newRushText);
    try {
        const response = await axios.post(`${url}/update_rush_text`, formData);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
}

export const updateDayInfo = async (day, newDate, newText) => {
    const formData = new FormData();
    formData.append("day", day);
    formData.append("date", newDate);
    formData.append("text", newText);
    try {
        const response = await axios.post(`${url}/update_day_info`, formData);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
}