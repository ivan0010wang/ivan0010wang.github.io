/** When one of the images on the bottom is clicked, the top
 * picture should switch position with the clicked image. 
 * 
 * NEED: a. onclick event
 *       b. The image on top has class="restaurant-image-top",
 *          the rest of the images has a class="restaurant-image-bottom"
 *       c. change className of the images.

 */

function changeImage1() {

    document.getElementById("id1").src = "./images/a.jpg"
}

function changeImage2() {
    document.getElementById("id1").src = "./images/b.jpg"
}

function changeImage3() {
    document.getElementById("id1").src = "./images/c.jpg"
}










/** The name of the restaurants should come from the CMS
 * 
 * NEED: a. fetch request
 *       b. display the names in the list
 */

async function makeAListOfRestaurants() {
    const response = await fetch("http://red-strapi-postgres-heroku.herokuapp.com/Restaurants");
    const restaurantInfo = await response.json();
    for (var i = 0; i < restaurantInfo.length; i++) {
        var newTag = document.createElement("button");
        var textnode = document.createTextNode(restaurantInfo[i].name + ' ');
        newTag.setAttribute('onclick', 'showRestaurantDetails(i)');
        // The line above need to be tested.
        // If not working, try researching .setAttribute.onclick = function...
        newTag.appendChild(textnode);
        var list = document.getElementById("restaurant");
        list.insertBefore(newTag, list.childNodes[0]);
    }
}
makeAListOfRestaurants();

function giveMeFive() {
    console.log("FIVE!");
}

function showRestaurantDetails(i) {
    showRestaurantName(i);
    showRestaurantType(i);
    showRestaurantDining(i);
    showRestaurantDescription(i);
}

function showRestaurantName(i) {
    var newTag = document.createElement("h1");
    var textnode = document.createTextNode("Name: " + restaurantInfo[i].name);
    newTag.appendChild(textnode);
    var list = document.getElementById("info");
    list.insertAfter(newTag, list.childNodes[0]);
}

function showRestaurantType(i) {
    var newTag = document.createElement("span");
    var textnode = document.createTextNode("Cuisine " + restaurantInfo[i].type);
    newTag.appendChild(textnode);
    var list = document.getElementById("info");
    list.insertAfter(newTag, list.childNodes[1]);
}

function showRestaurantDining(i) {
    var newTag = document.createElement("span");
    var textnode = document.createTextNode("Dining " + restaurantInfo[i].dining);
    newTag.appendChild(textnode);
    var list = document.getElementById("info");
    list.insertAfter(newTag, list.childNodes[2]);
}

function showRestaurantDescription(i) {
    var newTag = document.createElement("p");
    var textnode = document.createTextNode("Description" + restaurantInfo[i].description);
    newTag.appendChild(textnode);
    var list = document.getElementById("info");
    list.insertBefore(newTag, list.childNodes[3]);
}

async function makeAListOfRestaurants() {
    const response = await fetch("http://red-strapi-postgres-heroku.herokuapp.com/Restaurants");
    const restaurantInfo = await response.json();
    for (var i = 0; i < restaurantInfo.length; i++) {
        var newTag = document.createElement("span");
        var textnode = document.createTextNode(restaurantInfo[i].name + ' ')
        newTag.appendChild(textnode);
        var list = document.getElementById("restaurant");
        list.insertBefore(newTag, list.childNodes[0]);
    }
}
makeAListOfRestaurants();

// End


/** A function to display restaurants
 * with indoor/patio seatings based on the weather.
 * 
 * NEED: a. find the restaurants with patio/indoor==true
 *       b. innerHTML these restaurants
 */

async function showRestaurantsWithPatio() {
    const response = await fetch("http://red-strapi-postgres-heroku.herokuapp.com/Restaurants");
    const restaurantInfo = await response.json();
    for (var i = 0; i < restaurantInfo.length; i++) {
        if (restaurantInfo[i].patio === true) {
            var newTag = document.createElement("span");
            var textnode = document.createTextNode(restaurantInfo[i].name + ' ')
            newTag.appendChild(textnode);
            var list = document.getElementById("patio");
            list.insertBefore(newTag, list.childNodes[0]);
        }
    }
}
showRestaurantsWithPatio();
// End


/** When a restaurant is clicked, the restaurant info
 * should be updated.
 * 
 * NEED: a. onclick event
 *       b. display the perticular element
 */



/** The user review should be added to the cms.
 * NEED: a. assign user input to a object variable
 *       b. patch request
 */


/** A function to rank all restaurants based on average score.
 * 
 * Need: a. array.sort()
 *       b. display the sorted version of the array
 *       c. example
 *          var employees=[]
            employees[0]={name:"George", age:32, retiredate:"March 12, 2014"}
            employees[1]={name:"Edward", age:17, retiredate:"June 2, 2023"}
            employees[2]={name:"Christine", age:58, retiredate:"December 20, 2036"}
            employees[3]={name:"Sarah", age:62, retiredate:"April 30, 2020"}

            employees.sort(function(a, b){
                return a.age-b.age
            })
 */

/////////////////
// JordanH Code //
/////////////////

//Total Restaurants
getTotalRestaurants = async() => {
    const response = await fetch("http://red-strapi-postgres-heroku.herokuapp.com/Restaurants");
    const restaurants = await response.json();
    return restaurants.length
}
getTotalRestaurants()

const totalRestaurants = getTotalRestaurants()
totalRestaurants.then(a => {
    var newTag = document.createElement("span");
    var textnode = document.createTextNode(a)
    newTag.appendChild(textnode);
    let target = document.getElementById('totalRestaurants')
    target.insertBefore(newTag, target.childNodes[0])
})

//Total Reviews
getTotalReviews = async() => {
    const response = await fetch("http://red-strapi-postgres-heroku.herokuapp.com/Reviews");
    const reviews = await response.json();
    return reviews.length;
}
getTotalReviews()

const totalReviews = getTotalReviews()
totalReviews.then(a => {
    var newTag = document.createElement("span");
    var textnode = document.createTextNode(a)
    newTag.appendChild(textnode);
    let target = document.getElementById('totalReviews')
    target.insertBefore(newTag, target.childNodes[0])
})

//Array of Id's
restaurantIds = async() => {
    const response = await fetch("http://red-strapi-postgres-heroku.herokuapp.com/Reviews");
    const restaurants = await response.json();
    for (let i = 0; i < restaurants.length; i++) {
        let idArray = restaurants[i].idrestaurant;
        return idArray
    }
}
restaurantIds()

//Array of Ratings
restaurantRatings = async() => {
    const response = await fetch("http://red-strapi-postgres-heroku.herokuapp.com/Reviews");
    const restaurants = await response.json();
    for (let i = 0; i < restaurants.length; i++) {
        let ratingArray = restaurants[i].rating;
        return ratingArray
    }
}
restaurantRatings()

//Associate Ratings to Id's
// rankRestaurants = async () => {
//   const response = await fetch("http://red-strapi-postgres-heroku.herokuapp.com/Reviews");
//   const rankingInfo = await response.json();
//   for (var i = 0; i < rankingInfo.length; i++){
//     const ratingArray = rankingInfo[i].rating 
//     // rankingInfo.filter(x => x.rating === '5').map(x => x.idrestaurant);
//   }
// }
// console.log(rankRestaurants());