var today = new Date();
var days = today.getDate();
var year = today.getFullYear()
var month = today.getMonth()
var alldays = 0;

for(var i=month-1;i>=0;i--){
    month--;
    switch (month){
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            alldays += 31;
            break;
        case 1:
            alldays += 28;
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            alldays += 30;
            break;
    }
}
alldays += days;
document.querySelector("#todayDay").innerHTML = alldays;
document.querySelector("#thisYear").innerHTML = year;
document.querySelector("#leftDays").innerHTML = 365 - alldays;