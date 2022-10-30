export enum EStoreKey {
    USER = 'user-store-key-data'
}

export const getFromStorage = <T>(key: EStoreKey): T | null => {
    try {
        const dataStr = localStorage.getItem(key);
        if (dataStr) {
            const result = JSON.parse(dataStr);
            return result;
        }
        return null
    } catch (error) {
        console.log(error);
        return null
    }
}

export const saveToStorage = (key: EStoreKey, data: any): boolean => {
    const oldData = getFromStorage<any>(key) ?? {};
    if (typeof oldData === "object") {
        try {
            const strData = JSON.stringify({ ...oldData, ...data })
            localStorage.setItem(key, strData);
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    } else return false
}