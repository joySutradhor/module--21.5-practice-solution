

// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
// (0°C × 9/5) + 32 

function celtoFahrenheit (celcius){
    let calculate = (celcius * 9/5) +32 ;
    return calculate;
} 

let celciusTemp = celtoFahrenheit (50) ;
console.log(celciusTemp);
