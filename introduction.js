// //console.log('hello');

// const student={
//   name:"Ali",
//   age:42,
//   major:"Computer Science",
//   introduce: function(){
//     console.log(`I am ${this.name}, ${this.age} years old. I am a student of ${this.major}.`);

//   }
// }
// student.introduce(); 

// class Student{
//   constructor(name,age,major){
//     this.name=name;
//     this.age=age;
//     this.major=major
//   };

//   introduction(){
//     console.log(`I am ${this.name}, ${this.age} years old. I am a student of ${this.major}.`)
//   }
// }

// const student1=new Student('ali', 42,'computer science');
// student1.introduction();
// const student2=new Student('Yunus',39,'Automation Engineer');
// student2.introduction();

// class Student{
//   static schhoolName='abcd school of excellence';
//   static getSchool(){
//     return Student.schhoolName;
//   }
// }

// const s =new Student();
// console.log(Student.schhoolName);
// console.log(Student.getSchool());

// class Person{
//   constructor(name,age,sex){
//     this.name=name;
//     this.age=age;
//     this.sex=sex
//   }
//   introduction(){
//     return 'I am a human being'
//   }
// }

// class Student extends Person{
//   constructor(name,age,sex,roll){
//     super(name,age,sex);
//     this.roll=roll;
//     console.log(`I am a student and my roll number is ${this.roll}`);
//   }
// }

// const p1=new Person('Ali',42,'M');
// console.log(p1);
// const p2=new Student('Yunus',38,'M',101);
// console.log(p2);
// console.log(p1.introduction());
// console.log(p2.introduction());

// class Person{

// }
// console.log(typeof Person);


// fetch('https://reqres.in/api/users',{
//   method:'POST',
//   headers:{
//     'Content-type':'Application/json'
//   },
//   body:JSON.stringify({
//     'name':'Ali',
//     'job':'QA',
//     'empid':'241',
//     'city':'North palm beach'
//   })
  
// })
// .then(response=>response.json())
//   .then(data=>console.log(data))
//   .catch(error=>console.error('Error',error))

// fetch('https://reqres.in/api/users',{
//   method:'GET',
//   headers:{
//     'Content-type':'Application/json'
//   }
// }).then(response=>response.json())
//   .then(data=>{
//     data.data.forEach(element=>{
//       const idNumber=element.email;
//       console.log(idNumber)
//     })
//   })
//   .catch(error=>console.error('Error',error))

// fetch('https://reqres.in/api/users',{
//   method:'POST',
//   headers:{
//     'Content-type':'Application/json'
//   },
//   body:JSON.stringify({
//     name:'User 1'
//   })
// })
//   .then(res=>{
//      return res.json()
//   })
//   .then(data=>console.log(data))
//   .catch(error=>console.log('Error'))