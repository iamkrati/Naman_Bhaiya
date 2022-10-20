// let obj={
//     name:'Krati',
//     "hello1":1,
//     'hello2':2,
//     welcome:function(){
//         console.log('welcome')
//        }
// };

// console.log(obj.welcome());

// let str="aabc bbca caab ddac"
// let obj=
// {
// }
// for(var i=0;i<str.length;i++)
// {
//     if(obj[str[i]]==undefined)
//       obj[str[i]]=1;
//     else
//       obj[str[i]]+=1  ;
// }
// console.log(obj);
// delete obj[" "]
// console.log(obj);

// Automatic garbage collector

// 1.Global variable
// 2.function still to execute
// 


let person={
    firstname:'john',
    age:24
}
let p1={
    lastname:'doe',
    __proto__:person  // two times underscore
}
console.log(p1.age);

let p2=
 {
    isAdult:true,
    __proto__:p1
}


let ob={
    "firstname":'krati',
    age:24
}
console.log(ob);
ob['lastname']='goyal'
console.log(ob["lastname"]);
