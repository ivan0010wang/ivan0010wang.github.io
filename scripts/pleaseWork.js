/*
 * Fetch information of restaurants
 */
async function getRestaurantsInfo() {
    const response = await fetch(
        "http://red-strapi-postgres-heroku.herokuapp.com/Restaurants"
    );
    var restaurantInfo = await response.json();
    return restaurantInfo;
}
var restaurantInfo = getRestaurantsInfo();
// End

/*
 * Fetch reviews of restaurants
 */
async function getRestaurantsReviews() {
    const response = await fetch(
        "http://red-strapi-postgres-heroku.herokuapp.com/Reviews"
    );
    var restaurantReviews = await response.json();
    return restaurantReviews;
}
var restaurantReviews = getRestaurantsReviews();
//End

/**
 * A function to avoid repeating code when creating new nodes
 * @param {*} newElement is the new HTML tag you want to create
 * @param {*} text1 is the first part of the text node
 * @param {*} text2 is the second part of the text node, if not needed, just say ''
 * @param {*} targetID is the id in html where the node will be placed
 * @param {*} where is where the node will be placed in the targetID
 */
function writeOnWebPage(newElement, text1, text2, targetID, where, attribute, value) {
    var newTag = document.createElement(newElement);
    var textNode = document.createTextNode(text1 + text2);
    newTag.appendChild(textNode);
    newTag.setAttribute(attribute, value)
    var list = document.getElementById(targetID);
    list.insertBefore(newTag, list.childNodes[where]);
}
//End

/*
 * Show the names of the restaurants as buttons with dynamic id
 */
restaurantInfo.then(info => {
    for (var i = 0; i < info.length; i++) {
        var newTag = document.createElement("button");
        var textnode = document.createTextNode(info[i].name);
        newTag.appendChild(textnode);
        newTag.setAttribute("id", "restaurantButton" + i);
        var list = document.getElementById("restaurant-list");
        list.insertBefore(newTag, list.childNodes[0]);
    }
});
// End

/**
 * Calculate the average score of a given restaurant
 */
async function calculateAverageScore(restaurantID) {
    var restaurantReview = await getRestaurantsReviews();
    var arrayOfScores = new Array;
    for (var i = 0; i < restaurantReview.length; i++){
        if (restaurantReview[i].idrestaurant == restaurantID){
            arrayOfScores.push(restaurantReview[i].rating);
        }
    }
    // after all scores are collected, calculate the average score
    var sum = new Number;
    for (var i = 0; i < arrayOfScores.length; i++){
        sum = sum + arrayOfScores[i];
    }
    var averageScore = sum / arrayOfScores.length;
    // return the score with 1 decimal
    return averageScore.toFixed(1);
}
//End

/**
 * When a restaurant name is clicked, the restaurant info
 * should show up in the restaurant detail section
 */
restaurantInfo.then(info => {
    for (let i = 0; i < info.length; i++) {
        const targetButton = document.getElementById("restaurantButton" + i);
        const name = info[i].name;
        const type = info[i].type;
        const dining = info[i].dining;
        const description = info[i].description;
        const website = info[i].url;
        const restaurantID = info[i].idnumber;
        calculateAverageScore(restaurantID).then(score => {
            targetButton.addEventListener("click", () => {
                document.getElementById('restaurant-details').innerHTML='';
                writeOnWebPage("h1", '' , name, "restaurant-details", 0);
                writeOnWebPage("span", "Cuisine: ", type, "restaurant-details", 1);
                writeOnWebPage("span", "Dining: ", dining, "restaurant-details", 2);
                writeOnWebPage("span", "Score: ", score, "restaurant-details", 3);
                writeOnWebPage("a", "Website: ", website, "restaurant-details", 4, 'href', website);
                writeOnWebPage("p", "Description: ", description, "restaurant-details", 5);
            })
        });
    }
});
// End


/**
 * Compare the average score of all restaurants and list the top 4
 */
restaurantInfo.then(info => {
    const allAverageScores = new Array;
    for (let i = 0; i < info.length; i++) {
        const restaurantID = info[i].idnumber;
        calculateAverageScore(restaurantID).then(score => {
            allAverageScores.push(score)
        })
    }
});


/**
 * A function to rank all objects in an array based on a particular key:value
 * in the objects
 * @param {*} myArray is the array need to be sorted
 */
// var sampleArrayOfObjects = [
//     {id: 1, averageScore: 5},
//     {id: 2, averageScore: 3},
//     {id: 3, averageScore: 2},
//     {id: 5, averageScore: 1},
//     {id: 4, averageScore: 4}
// ]

// function sortMyArray(myArray) {
//     myArray.forEach(function (currentObjectInArray, i) {
        
//         currentObjectInArray.rank = i;
//     });
//     _.sortBy(myArray, 'averageScore').forEach(function (currentObjectInArray, i) {
//         myArray[currentObjectInArray.rank].rank = i;
//     })
//     return myArray;
// }
// // End
// sortMyArray(sampleArrayOfObjects);

/**
 * Put the clicked img on top
 */
function changeImage1() {
    document.getElementById("id1").src ="/images/joseph-gonzalez-egg-unsplash-resized.jpg";
}
function changeImage2() {
    document.getElementById("id1").src ="/images/jay-wennington-N_Y88TWmGwA-unsplash-resized.jpg";
}
function changeImage3() {
    document.getElementById("id1").src ="/images/brooke-lark-oaz0raysASk-unsplash-resized.jpg";
}
//End