value = [1, 4, 16, 2];

value.forEach(function(val, index, arr) {
    if (val === 1) {
        console.log("sepeda");
    } else if (val == 2) {
        console.log("motor");
    } else if (val <= 3) {
        console.log("mobil");
    } else if (val >= 4 && val < 5) {
        console.log("lambo");
    } else if (val != 5) {
        console.log("becak");
    } else {
        console.log("krukut");
    }
})