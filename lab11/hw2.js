//     function isPrime(n) {
//         let isTrue = true;

//         if (n < 2) {
//         console.log("khong phai so nguyen to")
//         } else {
//             for (let i = 2; i <= n / 2; i++)
//                 if (n % i == 0) {
//                     isTrue = false;

//                 }

//         }
//         if (isTrue) {
//             console.log(n + " so nguyen to")
//         } else {
//             console.log(n + " khong phai")
//         }
// }

// Ex1:printPrime(n)


// function printPrime(n) {

//     for (i = 0; i <= n; i++){
//          let isTrue = true;
//          if (i < 2) {
//            continue;
//          }
//         for (j = 2; j <= i / 2; j++){
//             if (i % j == 0) {
                
//                 isTrue = false;
//                 break;
//             }
           
//         }
//         if (isTrue) {
//             console.log(i)
//         }
//     }
// }

// Ex: cube(n)
function cube(n) {
    let m = n * n * n;
    return m;
}

// sumFibo(n)

