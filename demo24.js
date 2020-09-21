var mobile = {
    name: '',
    brand:'' ,
    price:''
}
var mobile = {
    name: '',
    brand:'' ,
    price:''
}
var print = function(){
    console.log('Name '+this.name);
    console.log('Brand '+this.brand );
}
var discountprice = function(per)
{
    console.log('discounted Price is '+this.price*per);

}
var ansAccess = function(acc1, acc2){
    console.log('Acc '+acc1+ ","+acc2);
}
print.call(mobile)
discountprice.call(mobile1,10);
ansAccess.call(mobile,'earphone','')


