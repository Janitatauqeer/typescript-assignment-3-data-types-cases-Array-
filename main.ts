//Example-One (String);
// let Author:string = "Allama Iqbal";
// let Qoute:string = "The ultimate aim of the ego is not to see something,but to be something"
// console.log(`Author: ${Author}\nQoutes: ${Qoute}`);

// //Example-Two (Number);
// let x:number = 25;
// let y:number = 17;
// console.log("x = 25 and y = 17");
// console.log(`x + y: ${x + y}`);
// console.log(`x - y: ${x - y}`);
// console.log(`x / y: ${x / y}`);
// console.log(`x * y: ${x * y}`);

// //Example-Three (Boolean);
// let todayiswindy:boolean = true;
// let todayisrainy:boolean = false;
// console.log(`todayiswindy: ${todayiswindy}\ntodayisrainy: ${todayisrainy}`);

// //Example-Four (Null);
// let nullnumber:null=null;
// console.log(nullnumber);

// //Example-Five (Unidentified);
// let a;
// console.log(a);

// //Example-Six (Symbol);
// let mysymbol=("Janita Tauqeer!");
// console.log(mysymbol);

// //Example-Seven (BigInt);
// let bigIntvalue=(1111111117777777777222222225555555555);
// console.log(bigIntvalue);

//Case Sensitives;
//Example of upper case (Pascal Case);
// let myName ='Tauqeer Iqbal';
// console.log(myName.toUpperCase());

// //Example of lowercase (snake_case);
// let country_name ='PAKISTAN';
// console.log(country_name.toLowerCase());

// //Example of titlecase (camel case);
// let personName :string='Hello Thomas'
// console.log(personName.replace(/\b\w/g,(char)=>char.toUpperCase()));

//Array;
//Example-One (string-Array);
let membersnames:string[] = ["Janita","Malaika","Aiman","Madiha","Abrish"];
console.log(membersnames);
console.log(membersnames[0] , membersnames[1] );

//Examle-Two (Number-Array);
let membernumbers:number[] = [1,7,2,5,0.1];
console.log(membernumbers);

//Example-Three (Boolean-Array);
let ismembers: boolean[] = [true];
console.log(ismembers);

//Example-Four (Any-Array);
let members: any[] =["Janita",17,"Malaika",1,true];
console.log(members);

//Example-Five (Symbol-Array);
let mysymbol = ["Ariba Naz!"];
console.log(mysymbol);