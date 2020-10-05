module.exports = function reverse (n) {
    var num = Math.abs(n);
    var arr = [];
    for(var temp = num;Math.round(temp)!=0;temp/=10,temp = Math.floor(temp)){
      arr.unshift(temp%10);
    };
    let arrNew = arr.reverse();
    if(arrNew[0] === 0){
      arrNew.splice(0, 1)
    } else {
      arrNew
    }
    let result = arrNew.join("");
    return Number(result);
}
