import { base_covert } from './index';
// console.log(base_covert(10, 16, 16))
// console.log(base_covert(16, 10, '10'))
for (let i = 1; i < 99999999; i++) {
    let o = base_covert(10, 16, i)
    if (base_covert(16, 10, o) == i) {

    } else {
        console.log('Error: ' + i + ' ' + o)
    }
}