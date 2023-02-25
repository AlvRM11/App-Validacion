
/*
const endpoints = {
    userProfile: `https://api.spacetraders.io/my/account?token=a7c67995-2754-4785-bf9c-29321191512b`,
    newUser: `https://api.spacetraders.io/users/:username/claim`
};
*/

const getUserProfile = async (token) => {
    try {
        const userProfile = `https://api.spacetraders.io/my/account?token=${token}`;

        const response = await fetch(userProfile);
        const data = await response.json();
        
        return data;

    } catch (err) {
        console.error(err);
        return {};
    }
};

const setNewUser = async (username) => {
    try {
        const settings = {
            method: 'POST'
        };

        const newUser = `https://api.spacetraders.io/users/${username}/claim`;

        const response = await fetch(newUser, settings);
        const data = await response.json();
        
        return data;

    } catch (err) {
        console.log(err);
        return {};
    }
};

const getAvailableShips = async (token) => {
    try {
        const shipsInfo = `https://api.spacetraders.io/systems/OE/ship-listings?token=${token}`;

        const response = await fetch(shipsInfo);
        const data = await response.json();
        
        return data;

    } catch (err) {
        console.log(err);
        return {};
    }
};

const getAvailableLoans = async (token) => {
    try {
        const loansInfo = `https://api.spacetraders.io/types/loans?token=${token}`;

        const response = await fetch(loansInfo);
        const data = await response.json();
        
        return data;

    } catch (err) {
        console.log(err);
        return {};
    }
};

export default {
    getUserProfile,
    setNewUser,
    getAvailableShips,
    getAvailableLoans
}