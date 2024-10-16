// if statements

// const age = 25

// if(age > 20){
//     console.log('you are over 20 years old')
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 4) {
//     console.log("that's a lot of ninjas");
// }

// const password = 'p@ssword';

// if(password.length >= 12){
//     console.log('that password is mighty strong');
// } else if(password.length >= 8){
//     console.log('that password is long enough!')
// } else {
//     console.log('password is not long enough')
// }

const d = new Date();
let hour = d.getHours();

console.log(hour);

if (hour >= 12 && hour < 18) {
    console.log('It is afternoon.')
} else if  (hour >= 19 && hour < 23 ) {
    console.log('It is night time.')
} else {
    console.log('it is the morning.')
}