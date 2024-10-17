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

// if(password.length >= 12 && password.includes('@')){
//      console.log('that password is mighty strong');
// } else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//      console.log('that password is long enough!')
//  } else {
//      console.log('password is not long enough')
//  }

// const d = new Date();
// let hour = d.getHours();

// console.log(hour);

// if (hour <12) {
//     console.log('It is morning.')
// } else if  (hour < 17) {
//     console.log('It is afternoon.')
// } else {
//     console.log('it is night time.')
// }

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; I < scores.length; i++) {

    if(scores[i] === 0) {
        console.log('your score: ', scores[i]);
        continue;
    }

    if(scores[i] === 100) {
        console.log('congrats, you got the top score');
        break;
    }
}