function orderWeight(str) {
    let strArr = str.trim().replace(/ +/g, " ").split(" ");

    strArr = strArr.sort(function(a,b){
      return (sums(a) - sums(b));
    });
    bubble(strArr);

    return strArr.join(" ");
}

function sums (num) {
  let sum = 0;
  num = num.split("");
  num.forEach(function(e){
    sum += parseInt(e);
  });
  return sum;
}

function bubble (n) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n.length - 1; i++){
      if ((sums(n[i]) == sums(n[i+1])) && n[i] > n[i+1]){
        [n[i], n[i+1]] = [n[i+1], n[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return n;
}
