module.exports = function check(str, bracketsConfig) {

    bracketsConfig = bracketsConfig
        .join()
        .split('')
        .filter((element) => element === ',' ? '' : 'element');

    console.log(typeof bracketsConfig);

    bracketsConfig = ((bracketsConfig.length % 2) ? false : true);


    str = str.split('');

    const str2 = ((str.length % 2) ? false : true);

    let sum1 = 0;
    let sum2 = 0;
    for (i = 0; j = str.length, i < j; i++) {

        // добавляем в каждой цифре '1', 
        // чтобы при делении одной суммы на другую не делить на ноль

        if (str[i] === '(') {
            sum1 += i + 1;

        } else if (str[i] === ')') {
            sum2 += i + 1;
        }
    }
    str3 = ((sum2 % sum1) ? true : false);


    isTrue = ((str2 === true) && (str3 === true) && (bracketsConfig === true)) ? true : false;

    return isTrue;
}