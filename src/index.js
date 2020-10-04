module.exports = function reverse (n) {
    var arr = [];
    for(var temp = n;Math.round(temp)!=0;temp/=10,temp = Math.floor(temp)){
  arr.unshift(temp%10);
  };
    let arrNew = arr.reverse();
    let result = arrNew.join("");
    return Number(result);
}
