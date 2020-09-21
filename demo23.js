function Vehicle(name,brand,price){
    this.name = name;
    this.brand = brand;
    this.price = price;

    this.getDiscountprice = function (per){
        var discount = this.price*per/100;
        this.price=this.price-discount;
    }
}
Vehicle.prototype.hasaccessories = true;
Vehicle.prototype.showaccessories = function(){
    console.log('AC','console','musicsystem');
}

