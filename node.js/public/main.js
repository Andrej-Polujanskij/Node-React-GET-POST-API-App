const getDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    if(dd<10){dd=`0`+dd} if(mm<10){mm=`0`+mm}
    today = yyyy+`.`+mm+`.`+dd;

    document.querySelector("#todayDate").value = today;
}
getDate();

let comentCol 
const random = Math.floor(Math.random() * (7 - 1)) + 1;

switch (random) {
    case 1:
        comentCol = 'color-1';
        break;
    case 2:
        comentCol = 'color-2';
        break;
    case 3:
        comentCol = 'color-3';
        break;
    case 4:
        comentCol = 'color-4';
        break;
    case 5:
        comentCol = 'color-5';
        break;
    case 6:
        comentCol = 'color-6';
        break;
    case 7:
        comentCol = 'color-7';
        break;
}

document.querySelector("#comentColor").value = comentCol;
