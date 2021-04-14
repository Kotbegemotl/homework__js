// for (let i = 0; i <= 9; i++){
//     console.log(i);
// }

// let arr = [];
// for (let i = 0; i < 10; i++){
//         arr = i;
//     console.log(arr);
// }

// let arr = [];
// for (let i = 0; i < 10; i++){
//     arr.push(i);
// }
// console.log(arr);

// for(let i = 0; i < 3; i++){
//     let a = 0;
//     if(i == 2){
//         i = 0;
//     }
//     console.log(a,i);
// }

// let arr = [];

for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 4; j++) {
        if (j == 0) {
            arr[j] = i;
        } else {
            arr[j] = i + j;
        }
    }
    console.log(arr);
}