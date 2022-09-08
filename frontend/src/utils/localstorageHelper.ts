
export const saveLocalstorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getLocalstorage = <T>(key: string): T | null => {
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data) as T | null;
}
