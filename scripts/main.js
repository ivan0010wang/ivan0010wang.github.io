/** When one of the images on the bottom is clicked, the top
 * picture should switch position with the clicked image. 
 * 
 * NEED: a. onclick event
 *       b. The image on top has class="restaurant-image-top",
 *          the rest of the images has a class="restaurant-image-bottom"
 *       c. change className of the images.
 */ 
function replaceImageOnTop(){
  let topImage = document.getElementsByClassName("review-images-top");
  
}


/** All the information of the restaurants should come from the CMS
 * 
 * NEED: a. fetch request
 *       b. display the names in the list
 */
function makeAListofRestaurants() {
  return fetch("http://red-strapi-postgres-heroku.herokuapp.com/Restaurants", {
    "method": "GET",
    "headers": {}
  })
  .then(response => {
    return response.json();
  })
}
var a = makeAListofRestaurants();
console.log(a.json());





// function makeAListofRestaurants() {
//   fetch("http://red-strapi-postgres-heroku.herokuapp.com/Restaurants", {
//     "method": "GET",
//     "headers": {}
//   })
//   .then(response => {
//     return response.json();
//   })
//   .then(myJson => {
//     for (var i = 0; i < myJson.length; i++){
//       var newTag = document.createElement("span");
//       var textnode = document.createTextNode(myJson[i].name + ' ')
//       newTag.appendChild(textnode);
//       var list = document.getElementById("info");
//       list.insertBefore(newTag, list.childNodes[0]);
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });
// }


/** A function to display restaurants
 * with indoor/patio seatings based on the weather.
 * 
 * NEED: a. find the restaurants with patio/indoor==true
 *       b. innerHTML these restaurants
 */
// for (let i = 0; i < restaurant.length; i++){
//   if (restaurant[i].hasPatio === true){
//     console.log(restaurant[i])
//   }
// }


/** When a restaurant is clicked, the restaurant info
 * should be updated.
 * 
 * NEED: a. onclick event
 *       b. display the perticular element in the JSON
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