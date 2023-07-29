const netConnectionCheck = () => {
    if (navigator.onLine) {
        return true;
    } else {
        return false;
    }
};

const isConnectedToInternet = async () => {
    const response = netConnectionCheck();
    return response;
};

export const AppUtils = {
    isConnectedToInternet
};