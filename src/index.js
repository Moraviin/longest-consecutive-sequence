module.exports = function longestConsecutiveLength(array) {
  const comparator = (a,b)=>a-b;
  let maxLen=0;
  let len=1;
  array.sort(comparator);
  array.forEach(function(val, i, arr){
    if(val==(arr[i-1]+1)){
      len++;
    }
    else{
      if(maxLen<len){
      maxLen=len;}
      len=1;
    }
  });
  return maxLen;// your solution here
}
