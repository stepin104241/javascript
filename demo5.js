function Employee(name,id){
    this.name = name;
    this.id = id;
    this.getDetails = function(){
        console.log('welcome',this.name, this.id, 'to LTTS')
    }
}
var emp = new Employee('Raju',4);
console.log(emp);
emp.getDetails();
Employee.prototype.salary=10000;
Employee.prototype.bonus=(salary)=>{
    res=salary*(10/100);
    console.log()
}