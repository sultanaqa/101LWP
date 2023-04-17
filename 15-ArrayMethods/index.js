//1) Arrayin bütün elementlərini 3 xarakterə endirən funksiya yazın
//istenen lan,bak,mas,ler,ast
//yenini yarat ve sadece 3 elementi ile



// let arr=["lankaran","baki","masalli","lerik","astara"]

function astara(arr1) {
    
    for (let i = 0; i < arr.length; i++) {
        arr1[i]=arr1[i].toString()
        arr1[i]=arr1[i].substring(0, 3)
        
        //  console.log(arr1);
    }

    return arr1
}
console.log(astara(arr));