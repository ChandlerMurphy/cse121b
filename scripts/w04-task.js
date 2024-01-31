/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Chandler Murphy",
    photo: "images/me_img_1422.jpg",
    favoriteFoods: [
        "Pizza",
        "Chicken and Rice",
        "Pasta",
        "Chocolate Chip Cookies"
    ],
    hobbies: [
        "Coding",
        "Movies",
        "Family Time",
    ],
    placesLived : [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Mt. Pleasant, UT",
        length: "18 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Oklahoma City, OK",
        length: "2 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Ephraim, UT",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    let dt = document.createElement("dt");
    dt.textContent = places.place;
    let dd = document.createElement("dd");
    dd.textContent = places.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

