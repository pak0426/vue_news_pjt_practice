import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

async function fetchUserInfo(userName) {
    try {
        return await axios.get(`${config.baseUrl}user/${userName}.json`);
    }catch (error) {
        console.log('error', error);
    }
}

async function fetchItemInfo(itemId) {
    try {
        return await axios.get(`${config.baseUrl}item/${itemId}.json`)
    }catch (error) {
        console.log('error', error);
    }
}
async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`)
    }catch (error) {
        console.log('error', error);
    }
}

export {
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}