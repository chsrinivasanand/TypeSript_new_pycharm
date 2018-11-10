class Student {
    fullname : string;
    constructor(public firstName,public middleInitial,public lastName)
    {
        this.fullname = firstName + " " + middleInitial + " " + lastName;
    }
}


interface Person{
    firstName: string;
    lastName:String;
}


function greeter(person : Person) {
    return "hello " +person.firstName+person.lastName;
}
let user = new Student("Jane", "M.", "User");

document.body.innerHTML  =  greeter(user);