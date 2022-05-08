/**
 * switch adalah metode yang sangat mirip dengan if else
 * kamu bisa melihat ke link berikut https://www.w3schools.com/js/js_switch.asp
 * perbedaan dengan if else hanya ada pada performance
 */

val = 1;

function switchFunction() {
    switch(val) {
        case 1:
            return "mobil"
        case 2:
            return "becak"
        case 3:
            return "sepeda"
        default:
            return "motor"
    };
}

console.log(switchFunction());