let time = new Date;

let days = ('minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu')
let allDay = time.days;
if (allDay === 0) {
    day = ('minggu')
} else if (allDay === 1) {
    day = ('senin')
} else if (allDay === 2) {
    day = ('selasa')
} else if (allDay === 3) {
    day = ('rabu')
} else if (allDay === 4) {
    day = ('kamis')
} else if (allDay === 5) {
    day = ('jumat')
} else {
    day = ('sabtu')
}


let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

let getAll = `now time is : ${day}:${hours}:${minutes}:${seconds}`;

console.log(getAll);