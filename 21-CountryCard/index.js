// async function renderUsers() {
//     let users = await getUsers();
//     let html = '';
//     users.forEach(user => {
//         let htmlSegment = `<div class="user">
//                             <img src="${user.profileURL}" >
//                             <h2>${user.firstName} ${user.lastName}</h2>
//                             <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                         </div>`;

//         html += htmlSegment;
//     });

//     let container = document.querySelector('.container');
//     container.innerHTML = html;
// }

// renderUsers();

// fetch("https://restcountries.com/v3.1/name/aze")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("olkenin adi", data[0].name.common);
//     console.log("olkenin paytaxt", data[0].capital[0]);
//     console.log("olkenin qonsu", data[0].borders);
//     data[0].borders.forEach((element) => {
//       console.log(element);
//     });
    

//     const card = document.querySelector(".cardI");
//     // const flagBox = document.querySelector(".flagBox img");

//     // const olkeninPaytaxt = document.querySelector(".olkeninPaytaxt");
//     // const olkeniEhali = document.querySelector(".olkeniEhali");

//     // olkeninAdi.innerText = data[0].name.common;
//     // olkeninPaytaxt.innerText = data[0].capital[0];
//     // olkeniEhali.innerText = data[0].population;
//     // flagBox.src = data[0].flags.svg;
//     card.innerHTML = `
//   <div class="card" style="width: 18rem;">
//   <img src=${data[0].flags.svg} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${data[0].name.common}</h5>
//     <p class="card-text">${data[0].name.nativeName.aze.official}</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">${data[0].name.common}</li>
//     <li class="list-group-item">A third item</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>

//   `;
//   });
fetch("https://restcountries.com/v3.1/name/turkey")
  .then((response) => response.json())
  .then((data) => {
    console.log("olkenin adi", data[0].name.common);
    console.log("olkenin paytaxt", data[0].capital[0]);
    console.log("olkenin qonsu", data[0].borders);
    data[0].borders.forEach((element) => {
      console.log(element);
    });
    

    const kart = document.getElementById("info");
    kart.innerHTML = `
    <div style="display:flex; justify-content:space-between" >
                <div>Continent</div>
                <div class="info_1">${data[0].region}</div>
            </div>
            <div style="display:flex; justify-content:space-between" >
                <div>Name</div>
                <div class="info_1">${data[0].name.common}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
            <div>Currencies</div>
            <div class="info_1">${data[0].currencies.TRY.name}</div>
        </div>

            <div style="display:flex; justify-content:space-between" >
                <div>Car series</div>
                <div class="info_1">${data[0].car.signs}</div>
            </div>
            <div style="display:flex; justify-content:space-between" >
                <div>Population</div>
                <div class="info_1">${data[0].population}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Capital</div>
                <div class="info_1">${data[0].capital}</div>
            </div>
            <div style="display:flex; justify-content:space-between" >
                <div>Phone number header</div>
                <div class="info_1">${data[0].idd.root}${data[0].idd.suffixes}</div>
            </div>
          
   

    

  `;
  });

  fetch("https://restcountries.com/v3.1/name/uk")
  .then((response) => response.json())
  .then((data) => {
    console.log("olkenin adi", data[0].name.common);
    console.log("olkenin paytaxt", data[0].capital[0]);
    console.log("olkenin qonsu", data[0].borders);
    data[0].borders.forEach((element) => {
      console.log(element);
    });
    

    const kart1 = document.getElementById("info1");
    kart1.innerHTML = `
    <div style="display:flex; justify-content:space-between" >
                <div>Continent</div>
                <div class="info_1">${data[0].region}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Name</div>
                <div class="info_1">${data[0].name.common}</div>
            </div>
            <div style="display:flex; justify-content:space-between" >
            <div>Currencies</div>
            <div class="info_1">${data[0].currencies.GBP.name}</div>
        </div>

            <div style="display:flex; justify-content:space-between">
                <div>Car series</div>
                <div class="info_1">${data[0].car.signs}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Population</div>
                <div class="info_1">${data[0].population}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Capital</div>
                <div class="info_1">${data[0].capital}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Phone number header</div>
                <div class="info_1">${data[0].idd.root}${data[0].idd.suffixes}</div>
            </div>
          
   

    

  `;
  });

  fetch("https://restcountries.com/v3.1/name/us")
  .then((response) => response.json())
  .then((data) => {
    console.log("olkenin adi", data[0].name.common);
    console.log("olkenin paytaxt", data[0].capital[0]);
    console.log("olkenin qonsu", data[0].borders);
    data[0].borders.forEach((element) => {
      console.log(element);
    });
    

    const kart2 = document.getElementById("info2");
    kart2.innerHTML = `
    <div style="display:flex; justify-content:space-between" >
                <div>Continent</div>
                <div class="info_1">${data[0].region}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Name</div>
                <div class="info_1">${data[0].name.common}</div>
            </div>
            <div style="display:flex; justify-content:space-between" >
            <div>Currencies</div>
            <div class="info_1">${data[0].currencies.SZL.name}</div>
        </div>

            <div style="display:flex; justify-content:space-between">
                <div>Car series</div>
                <div class="info_1">${data[0].car.signs}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Population</div>
                <div class="info_1">${data[0].population}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Capital</div>
                <div class="info_1">${data[0].capital}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Phone number header</div>
                <div class="info_1">${data[0].idd.root}${data[0].idd.suffixes}</div>
            </div>
          
   

    

  `;
  });

  fetch("https://restcountries.com/v3.1/name/uganda")
  .then((response) => response.json())
  .then((data) => {
    console.log("olkenin adi", data[0].name.common);
    console.log("olkenin paytaxt", data[0].capital[0]);
    console.log("olkenin qonsu", data[0].borders);
    data[0].borders.forEach((element) => {
      console.log(element);
    });
    

    const kart3 = document.getElementById("info3");
    kart3.innerHTML = `
    <div style="display:flex; justify-content:space-between" >
                <div>Continent</div>
                <div class="info_1">${data[0].region}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Name</div>
                <div class="info_1">${data[0].name.common}</div>
            </div>
            <div style="display:flex; justify-content:space-between" >
            <div>Currencies</div>
            <div class="info_1">${data[0].currencies.UGX.name}</div>
        </div>

            <div style="display:flex; justify-content:space-between">
                <div>Car series</div>
                <div class="info_1">${data[0].car.signs}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Population</div>
                <div class="info_1">${data[0].population}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Capital</div>
                <div class="info_1">${data[0].capital}</div>
            </div>
            <div style="display:flex; justify-content:space-between">
                <div>Phone number header</div>
                <div class="info_1">${data[0].idd.root}${data[0].idd.suffixes}</div>
            </div>
          
   

    

  `;
  });



  