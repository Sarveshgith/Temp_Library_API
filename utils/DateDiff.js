function DateDifference(date1, date2){

    const dateM1 = new Date(date1).getTime();
    const dateM2 = new Date(date2).getTime();

    const diffM = Math.abs(dateM2 - dateM1);

    const diffday = Math.ceil(diffM / (1000 * 60 * 60 * 24));

    return diffday;
};
module.exports = {DateDifference};

