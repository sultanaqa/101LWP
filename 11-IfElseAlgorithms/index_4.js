// 4. Proqrama daxil edilən məlumatın ədəd və ya  hərf, simvol olduğunu təyin edən proqram tərtib edin. Daxil edilən məlumat yalnız 1 rəqəm, hərf və ya simvol ola bilər. 
// Məsələn: info=6 yazdıqda cavab bu şəkildə olmalıdır:
// Daxil edilən məlumat rəqəmdir.
// Məsələn: info="a" yazdıqda cavab bu şəkildə olmalıdır:

// Daxil edilən məlumat hərf və ya simvoldur.

// Məsələn: info="\" yazdıqda cavab bu şəkildə olmalıdır:

// Daxil edilən məlumat hərf və ya simvoldur.


const d = prompt('reqem ve ya simvol ve yaxud da herf  daxil edin', '');
if (d.length>1){
    alert(false)
    

}
else if (Number(d)) {
    alert(`Daxil edilen melumat reqemdir.`)
}
else if (toString(d)){
    alert(`Daxil edilən məlumat hərf və ya simvoldur.`)
}
