// 5. Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib. Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını yoxlayan proqram tərtib edin.
// Məsələn: katet1=3, katet2=4, hipotenuz=5 yazdıqda cavab bu şəkildə olmalıdır:

// Result: düzbucaqlı üçbucaqdır

// Məsələn: katet1=3, katet2=3, hipotenuz=8 yazdıqda cavab bu şəkildə olmalıdır:

// Result: düzbucaqlı üçbucaq deyil.

const katet1 = +prompt('katet1-i daxil edin', '');
const katet2 = +prompt('katet2-ni daxil edin', '');
const hipotenuz = +prompt('hipotenuzu-ni daxil edin', '');

// 3k,4k,5k
console.log(katet1%3);
console.log(katet2%4);
console.log(hipotenuz%5);
if ((katet1%3===0 , katet2%4===0) && hipotenuz%5===0 ) {
    alert(`duzbucaqli ucbucaqdir`)
    
} else {
    alert(`duzbucaqli ucbucaq deyil`)
}
