export const getTodayDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1);
    const day = String(today.getDate());
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
};