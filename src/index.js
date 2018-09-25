module.exports = function longestConsecutiveLength(array) {
  const comparator = (a,b)=>a-b;
  let maxLen=0;
  let len=1;
  array.sort(comparator);
  for(let i=0, leng=array.length; i<leng; i++){
    if(array[i]==array[i-1])continue;
    if(array[i]==(array[i-1]+1)){
      len++;
    }
    else{
      if(maxLen<len){
      maxLen=len;}
      len=1;
    }
  }
  return maxLen;
}
