let arr = [10,20,30];
for ( let i in arr){
    console.log(arr[i]);
}
arr[6]=90;
for ( const val of arr) {
    console.log(val);
}
for(const val of "javascript"){
    console.log(val);
}
