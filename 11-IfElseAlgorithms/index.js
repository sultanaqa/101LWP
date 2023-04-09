// // let order1 = parseInt('100.2');
// // let order2 = parseInt('100.5');
// // let totalOrder = order1 + order2
// // console.log(totalOrder);
// // let my_Birthday = 2003;
// // console.log(new Date().getFullYear()-my_Birthday);
// let num = 15.123456789;
// // console.log(Math.round(num));
// //console.log(Math.floor(num));
// //console.log(Math.ceil(num));
// //console.log(Math.min(1,102,33,45,734,4));
// console.log(Math.max(1,102,33,45,734,4));
// const a = +prompt('a-ni daxil edin', '');
// const b = +prompt('b-ni daxil edin', '');
// const c = +prompt('c-ni daxil edin', '');
// console.log(a);
// console.log(typeof(a));
// console.log(b);
// console.log(typeof(b));
// console.log(c);
// console.log(typeof(c));
// if (a>b>c) {
//     alert(`Big sum result:  ${a} and ${b}`)
    
// }
// else {
//     alert(`Big sum result:  ${c} and ${b}`)

// }

//   if(b>a>c) {
//     alert(`Big sum result:  ${b} and ${a}`)
    
// }
// else {
//     alert(`Big sum result:  ${c} and ${a}`)

// }
// if(c>a>b) {
//     alert(`Big sum result:  ${c} and ${a}`)
// }
// else {
//     alert(`Big sum result:  ${b} and ${a}`)

// }










// if (yil == 2015) alert( 'Evet doğru!' );
// {
//     alert( 'dogru deyil' )
    
// }


// 1. 3 ədəd verilib. Bu 3 ədəd içindən cəmləri ən böyük olan 2 ədədi qaytaran proqram tərtib edin. Məsələn: a=1, b=2, c=3 daxil etdikdə cavab bu şəkildə olmalıdır: Big sum result 2 and 3


const a = +prompt('a-ni daxil edin', '');
const b = +prompt('b-ni daxil edin', '');
const c = +prompt('c-ni daxil edin', '');

console.log(a);
console.log(b);
console.log(c);
if (a>b && b>c) {
    alert(`Big sum result:  ${a} and ${b}`)
} 
 else if(b>a && a>c) {
    alert(`Big sum result:  ${b} and ${a}`)
 }
else if(c>a && a>b) {
    alert(`Big sum result:  ${c} and ${a}`)
}
else if(a>c && c>b) {
    alert(`Big sum result:  ${a} and ${c}`)
}
else if(c>b && b>a) {
    alert(`Big sum result:  ${c} and ${b}`)
}
else if(b>c && c>a) {
    alert(`Big sum result:  ${b} and ${c}`)
}


