// 2. 3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram tərtib edin. Proqramın qaytardığı cavab number tipində olmalıdır. Yəni ki, aldığımız cavabı başqa bir ədədlə toplaya, çıxa və s. edə bilərik. Məsələn: a=4, b=5, c=6 daxil etdikdə cavab bu şəkildə olmalıdır:
// Big number: 654 
// Little number: 456 

const a = prompt('a-ni daxil edin', '');
const b = prompt('b-ni daxil edin', '');
const c = prompt('c-ni daxil edin', '');
console.log(typeof Number(a+b+c));
// alert( Number(a+b+c))
if (a>b && b>c) {
    alert(`Big number:  ${Number((a+b+c))} , Little number:  ${Number((c+b+a))}`)
}
else if (a===b && b>c) {
    alert(`Big number:  ${Number((a+b+c))} , Little number:  ${Number((c+b+a))}`)
}
else if (a>b && b===c) {
    alert(`Big number:  ${Number((a+b+c))} , Little number:  ${Number((c+b+a))}`)
}


else if(b>a && a>c) {
    alert(`Big number:  ${Number((b+a+c))} , Little number:  ${Number((c+a+b))}`)
 }
 else if(b===a && a>c) {
    alert(`Big number:  ${Number((b+a+c))} , Little number:  ${Number((c+a+b))}`)
 }
 else if(b>a && a===c) {
    alert(`Big number:  ${Number((b+a+c))} , Little number:  ${Number((c+a+b))}`)
 }


else if(c>a && a>b) {
    alert(`Big number:  ${Number((c+a+b))} , Little number:  ${Number((b+a+c))}`)
}
else if(c===a && a>b) {
    alert(`Big number:  ${Number((c+a+b))} , Little number:  ${Number((b+a+c))}`)
}
else if(c>a && a===b) {
    alert(`Big number:  ${Number((c+a+b))} , Little number:  ${Number((b+a+c))}`)
}



else if(a>c && c>b) {
    alert(`Big number:  ${Number((a+c+b))} , Little number:  ${Number((b+c+a))}`)
}
else if(a===c && c>b) {
    alert(`Big number:  ${Number((a+c+b))} , Little number:  ${Number((b+c+a))}`)
}
else if(a>c && c===b) {
    alert(`Big number:  ${Number((a+c+b))} , Little number:  ${Number((b+c+a))}`)
}



else if(c>b && b>a) {
    alert(`Big number:  ${Number((c+b+a))} , Little number:  ${Number((a+b+c))}`)
}
else if(c===b && b>a) {
    alert(`Big number:  ${Number((c+b+a))} , Little number:  ${Number((a+b+c))}`)
}
else if(c>b && b===a) {
    alert(`Big number:  ${Number((c+b+a))} , Little number:  ${Number((a+b+c))}`)
}



else if(b>c && c>a) {
    alert(`Big number:  ${Number((b+c+a))} , Little number:  ${Number((a+c+b))}`)
}
else if(b===c && c>a) {
    alert(`Big number:  ${Number((b+c+a))} , Little number:  ${Number((a+c+b))}`)
}
else if(b>c && c===a) {
    alert(`Big number:  ${Number((b+c+a))} , Little number:  ${Number((a+c+b))}`)
}



else if(a===b && b===c) {
     alert(`Big number:  ${Number((a+b+c))} , Little number:  ${Number((a+b+c))}`)
 } 












//  else if(b>a && a>c) {
//     alert(`Big sum result:  ${b} and ${a}`)
//  }
// else if(c>a && a>b) {
//     alert(`Big sum result:  ${c} and ${a}`)
// }
// else if(a>c && c>b) {
//     alert(`Big sum result:  ${a} and ${c}`)
// }
// else if(c>b && b>a) {
//     alert(`Big sum result:  ${c} and ${b}`)
// }
// else if(b>c && c>a) {
//     alert(`Big sum result:  ${b} and ${c}`)
// }