const covert = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'
    , 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z']
/**
 * 进制转换
 * @param from 来源进制 
 * @param to 目标进制
 * @param data 转化数据
 */
export function base_covert(from: number, to: number, data: string | number): string | number {
    if (from > 62 || to > 62) {
        throw 'ToLarge'
    }
    let ten = 0;
    if (from <= 36) { data = data.toString().toUpperCase() }
    //转10进制
    if (from != 10) {
        data = data.toString()
        for (let i = data.length - 1; i >= 0; i--) {
            ten += ((covert.indexOf(data.substr(i, 1))) * (Math.pow(from, data.length - 1 - i)))
        }
    } else {
        ten = Number(data)
    }
    if (to == 10) {
        return ten;
    } else {
        let s = []
        while (true) {
            s.push(covert[ten % to]);
            if (ten >= to) {
                ten = Math.floor(ten / to)
            } else {
                return s.reverse().join('')
            }
        }
    }
}