const getLastDay =(month)=> {
    const date = new Date(new Date().getFullYear(), month + 1, 1);
    date.setDate(date.getDate() - 1);

    return date.getDate();
}


const lastDayOfJanuary = getLastDay(0);
console.log(lastDayOfJanuary);

const lastDayOfFebruary = getLastDay(1);
console.log(lastDayOfFebruary);
