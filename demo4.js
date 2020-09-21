function Student(name,city){
    this.name = name;
    this.city = city;
    this.getDetails = function(){
        console.log('welcome',this.name, 'from' , this.city)
    }
}
var stud = new Student('Raju','ban');
console.log(stud);
var stud1 = new Student('Rohan','Mysore');
console.log(stud1);


Student.prototype.studid=90;
Student.prototype.greetMessage=(username)=>{
    console.log('Great day',username);
}
stud.getDetails();
stud.greetMessage('Raju');
stud1.getDetails();
stud1.greetMessage('Rohan');