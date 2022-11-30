//Asia continents && region;

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    let data = request.response;
    let result = JSON.parse(data);
   let asiaCont = result.filter((ele)=>{return ele.continents === "Asia"})
   console.log(asiaCont)
   population;
let People = result.filter((ele)=>{return ele.population < 200000})
   console.log(People.map((ele)=> ele.name.common))  

// names, capital, flag using ForEach

let forE = result.forEach((ele)=>{console.log(`Name: ${ele.name.common} , capital: ${ele.capital}, flag: ${ele.flag}`)})

// total population using reduce:

let total = result.reduce((acc,cv)=>acc + cv.population,0)
console.log(total);

// country using US DOLLARS as currency;

let dollar= "US Dollar"
let money = result.filter((ele)=>ele.currencies === "USD")
console.log(money)
} 
