//2) Kiçik L hərfi ilə başlayan elementləri silən funksiya yazın

// istenen baki masalli astara
// yenini yarat l olanlari sil !! yenini yarat l ile baslayanalr olmasin






// function astara(arr1) {
//     for (let i = 0; i < arr.length; i++) {
//         arr1[i]=arr1[i].toString()
//         if (i==="l") {
//             arr1[i]=arr1[i].replaceAll("l","")
//             console.log(arr1);
            
//         }
        
//         //  console.log(arr1);
//     }

//     return arr1
// }
// console.log(astara(arr));


let arr=["lankaran","baki","masalli","lerik","astara"]


function astara() {
    // let arr = ["lenkeran", "Lerik", "le", "La"];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0]==("l")) {
        arr.splice(i, 1); 
        i--
      }
    }
    // console.log(arr);
    return arr
    
}
console.log(astara(arr));
    
