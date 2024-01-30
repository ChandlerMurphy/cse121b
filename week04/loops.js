myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

// -----------------------------------------

// // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// const foodsElement = document.querySelector("#favorite-foods");
// function appendFoodItem(food) {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
// }

// // or

// // const foodElement = document.querySelector("#favorite-foods");
// // function mapFoodItem(food) {
// //     let favoriteFood = document.createElement("li");
// //     favoriteFood.textContent = food;
// //     return favoriteFood;
// // }



// // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// myInfo.favoriteFoods.forEach(appendFoodItem);

// // or

// // const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// // foodsElement.innerHTML = foodListElements.join("");

//  -------------------------------------------- Other part of activity below

const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

function foodsString(food) {
    return `<li>${food}</li>`;
}

function placesString(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

function createHTMLTemplate (list, callbackFunction) {
    const htmlList = list.map(callbackFunction);
    return htmlList.join("");
}

foodsElement.innerHTML = createHTMLTemplate(
    myInfo.favoriteFoods,
    foodsString
);

placesElement.innerHTML = createHTMLTemplate(
    myInfo.placesLived,
    placesString
)

// Check your understanding activity
// ----------------------------------------------------

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// for loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// while loop 
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// forEach loop
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

// for in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// Using loops to produce days of the week
const ulListElement = document.querySelector("#days-of-week");
const today = new Date();
let todaystring = weekday[today.getDay()];
document.getElementById("today").innerHTML = `Today is ${todaystring}.`;

for (let i = 1; i <= DAYS; i++) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = weekday[nextday.getDay()];
    let item = document.createElement("li");
    item.textContent = nextdaystring;
    ulListElement.appendChild(item);
}
