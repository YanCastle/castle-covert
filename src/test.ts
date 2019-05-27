import { base_covert, covert } from './index';
covert.length = 0;
covert.push(...('Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,N'.split(',')))
let e = base_covert(10, 20, 100)
console.log(e)
console.log(base_covert(20, 10, e))
// for (let i = 1; i < 99999999; i++) {
//     let o = base_covert(10, 62, i)
//     if (base_covert(62, 10, o) == i) {

//     } else {
//         console.log('Error: ' + i + ' ' + o)
//     }
// }