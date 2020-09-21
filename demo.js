var student={
    name: 'Raju' ,
    age: 20,
    hobbies:['sports','dance'],
    address:{ 
        city: 'mysore',
        state: 'karnataka',
    }
};

console.log(student.name);
console.log(student.address.city);
student.studid=20;
student.hasMobile = true
for (const key in student) {
        const element = student[key];
       console.log(key+" "+element);
        
    }

var student1 = {
    name: 'raju',studid:20
};
console.log(student1.name);