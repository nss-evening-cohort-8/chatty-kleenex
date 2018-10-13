const rightNow = () => {
    return moment().format('YYYY-MM-DD h:mm:ss a');
};

const setTimestamp = rightNow();

export {setTimestamp};