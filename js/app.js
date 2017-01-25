//var today = new Date();
var today = new Date(2017, 03, 17);
var days = today.getDate();
var year = today.getFullYear()
var month = today.getMonth()
console.log(month)
var alldays = 0;

for(var i=month;i>=0;i--){
    switch (month){
        case 0:
            alldays=days;
            break;
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
    console.log(alldays);
}


