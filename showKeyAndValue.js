
// একটু কোড লিখে অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও। 

let person = {
    Name: "joy Sutradhor",
    Age : 25 ,
    Color : "black" ,
    Favourite : "Coding"
}

let showKeys = Object.keys(person);
console.log(showKeys);
let showValues = Object.values(person);
console.log(showValues);