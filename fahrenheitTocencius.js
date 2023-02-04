
// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

// (32°F − 32) × 5/9

function fahrenheitToCelcius (fahrenheit) {

    let calculate = (fahrenheit - 32 ) * (5 / 9);
    let fahrenheits = calculate.toFixed(2);
    return parseInt(fahrenheits);

}

let fahrenheitTemp = fahrenheitToCelcius(50);
console.log(fahrenheitTemp);

