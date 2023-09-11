const showChangeList = document.getElementById("js-change-class");
const changeList = document.getElementById("js-changeList");


showChangeList.addEventListener("change", function() {
    if (showChangeList.checked) {
        changeList.style.display = "flex";
        changeList.style.alignItems = "center";
        
    } else {
        changeList.style.display = "none";
    }
});


const showRevisionList = document.getElementById("js-revision");
const revisionList = document.getElementById("js-revisionList");


showRevisionList.addEventListener("change", function() {
    if (showRevisionList.checked) {
        revisionList.style.display = "block";
    } else {
        revisionList.style.display = "none";
    }
});

const civilDropdown = document.getElementById("js-civil");
const spouseInfo = document.getElementById("js-spouse");

civilDropdown.addEventListener("change", function() {
    if(civilDropdown.value === "married" || civilDropdown.value=="widow"){
        spouseInfo.style.display = "flex";
        spouseInfo.style.flexDirection = "column";
        spouseInfo.style.alignItems = "center";
    }else{
        spouseInfo.style.display="none" ;
    }
})


const cityData = {
    "metro_manila": ["Caloocan", "Las Pinas", "Makati", "Malabon", "Mandaluyong", "Manila", "Marikina", "Muntinlupa", "Navotas", "Parañaque", "Pasay", "Pasig", "Pateros", "Quezon City", "San Juan", "Taguig", "Valenzuela"],

    "quezon": ["Agdangan", "Alabat", "Atimonan", "Buenavista", "Burdeos", "Calauag", "Candelaria", "Catanauan", "Dolores", 
      "General Luna", "General Nakar", "Guinayangan", "Gumaca", "Infanta", "Jomalig", "Lopez", "Lucban", "Lucena", "Macalelon",
      "Mauban", "Mulanay", "Padre Burgos", "Pagbilao", "Panukulan", "Patnanungan", "Perez", "Pitogo", "Plaridel", "Polillo", "Quezon",
      "Real", "Sampaloc", "San Andres", "San Antonio", "San Francisco", "San Narciso", "Sariaya", "Tagkawayan", "Tayabas", "Tiaong", "Unisan"],

    "batangas": ["Agoncillo", "Alitagtag", "Balayan", "Balete", "Batangas City", "Bauan", "Calaca", "Calatagan", "Cuenca", "Ibaan", "Laurel", 
    "Lemery", "Lipa", "Lobo", "Mabini", "Malvar", "Mataasnakahoy", "Nasugbu", "Padre Garcia", "Rosorio", "San Jose", "San Juan", "San Luis", 
    "San Nicolas", "San Pascual", "San Teresita", "Santo Tomas", "Taal", "Talisay", "Tanauan", "Taysan", "Tingloy", "Tuy"],

    "cavite": ["Amadeo", "Alfonso", "Bacoor", "Carmona", "Cavite City", "Dasmariñas City", "General Trias", "General Emilio Aguinaldo", "General Mariano Alvares", "Imus", "Indang",   "Kawit",  "Magallanes", "Maragondon", "Mendez", "Naic", "Novelete", "Rosario","Tagaytay", "Tanza", "Ternate", "Trece Martires", "San Pedro", "Silang"],

    "laguna": ["Alaminos", "Bay", "Biñan", "Cabuyao", "Calamba", "Calauan", "Cavinti", "Famy", "Kalayaan", "Liliw", "Los Baños", "Luisiana", "Lumban", "Mabitac", "Magdalena", "Majayjay", "Nagcarlan", "Paete", "Pagsanjan", "Pakil", "Pangil", "Pila", "Rizal", "San Pablo", "San Pedro", "Santa Cruz", "Santa Maria", "Santa Rosa", "Siniloan",  "Victoria"], 

    "rizal": ["Angono", "Antipolo", "Baras", "Binangonan", "Cainta", "Cardona", "Jalajala", "Morong", "Pililla", "Rodriguez", "San Mateo", "Tanay", "Taytay",  "Teresa"]
};

    const provinceDropdown = document.getElementById("js-province");
    const cityDropdown = document.getElementById("js-city");

    function populateCities() {
        const selectedProvince = provinceDropdown.value;
        cityDropdown.innerHTML = '';

        if (selectedProvince) {
        const cities = cityData[selectedProvince];
        cities.forEach(city => {
            const option = new Option(city, city);
            cityDropdown.add(option);
        });

        cityDropdown.disabled = false;
        } else {
        cityDropdown.disabled = true; 
        }
    }


    provinceDropdown.addEventListener("change", populateCities);

    const birthProvinceDropdown = document.getElementById("js-birthProvince");
    const birthCityDropdown = document.getElementById("js-birthCity");

    function populateBirthCities() {
        const selectedBirthProvince = birthProvinceDropdown.value;
        birthCityDropdown.innerHTML = '';

        if (selectedBirthProvince) {
        const birthCity = cityData[selectedBirthProvince];
        birthCity.forEach(city => {
            const option = new Option(city, city);
            birthCityDropdown.add(option);
        });

        birthCityDropdown.disabled = false;
        } else {
        birthCityDropdown.disabled = true; 
        }
    }

    birthProvinceDropdown.addEventListener("change", populateBirthCities);

    provinceDropdown.addEventListener("change", populateCities);



    const employerProvinceDropdown = document.getElementById("js-employerProvince");
    const employerCityDropdown = document.getElementById("js-employerCity");

    function populateEmployerCities() {
        const selectedEmployerProvince = employerProvinceDropdown.value;
        employerCityDropdown.innerHTML = '';

        if (selectedEmployerProvince) {
        const employerCity = cityData[selectedEmployerProvince];
        employerCity.forEach(city => {
            const option = new Option(city, city);
            employerCityDropdown.add(option);
        });

        employerCityDropdown.disabled = false;
        } else {
        employerCityDropdown.disabled = true; 
        }
    }

    employerProvinceDropdown.addEventListener("change", populateEmployerCities);


    