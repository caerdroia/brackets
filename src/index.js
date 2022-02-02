module.exports = function check(str, bracketsConfig) {

    bracketsConfig = bracketsConfig
        .join()
        .split('')
        .filter((element) => element === ',' ? '' : 'element');

    console.log(typeof bracketsConfig);

    bracketsConfig = ((bracketsConfig.length % 2) ? false : true);

    str = str.split('');

    console.log(typeof str)

    str = ((str.length % 2) ? false : true);

    isTrue = ((str === true) && (bracketsConfig === true)) ? true : false;

    return isTrue;
}