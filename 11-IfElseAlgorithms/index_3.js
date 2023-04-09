// 3. 3 rəqəmli hər hansı bir ədəd verilib. Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin. Məsələn: number=652 daxil etdikdə  cavab bu şəkildə olmalıdır:
// Result: 6, 5, 2
// const a = +prompt('3 reqemli eded daxil edin', '');
// alert(`Result:  ${toString((a,b,c))}`)


 const d = prompt('3 reqemli eded daxil edin', '');

// const d =345
console.log(d%10);
console.log(((d%100)-(d%10))/10);
console.log((d-(d%100))/100);
// alert(`Result: ${((d-(d%100))/100)}, ${(((d%100)-(d%10))/10)}, ${(d%10)} `)


if (d.length>3) {
    alert(false)
    
}
else {
    +alert(`Result: ${((d-(d%100))/100)}, ${(((d%100)-(d%10))/10)}, ${(d%10)} `)
}







