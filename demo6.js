var stud = {
    name: 'Ram',
    empId: 34,
    hobbies :['music'],
    address:{
        city:'ban','state':'KAR'
    }
}
var jsonstring = JSON.stringify(stud);
console.log(jsonstring);
var jsobj = JSON.parse(jsonstring);
console.log(jsobj);