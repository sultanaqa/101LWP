//Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin.



// let eded = 0;
//  arr=[23,1,5,3,12,4,9,81,7,11,22,31,6];
// for (let i = 0; i < arr.length; i++  && arr[i]%2==0) {
//         if (eded<arr[i]) {
//             eded=arr[i]
//         }
        
//     }
    

// console.log(arr[i]);
// console.log(eded);

     









let cutmax = 0;
let tekmmin=81;
let maxindex;
let minindex;
const arr=[23,1,5,3,12,4,9,81,7,11,22,31,6];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ===0 ) {
        if (cutmax < arr[i]) {
            cutmax = arr[i];
            maxindex = i; 
        }
         
        
    }
    if (arr[i] %2 !==0) {
        if (tekmmin > arr[i] ) {
            tekmmin = arr[i];
         minindex = i;
        }
         
       
    }

}
if (maxindex !== undefined && minindex !== undefined) {
    [arr[maxindex]], [arr[minindex]] = [arr[minindex]],[arr[maxindex]];
    
}
tekmmin=a
console.log(arr);