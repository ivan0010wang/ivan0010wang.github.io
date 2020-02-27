/** 
 * When one of the images on the bottom is clicked, the top
 * picture should switch position with the clicked image. 
 */



/** 
 * Fetch the info of the restaurants from the CMS
 */
async function getRestaurantsInfo(){
  const response = await fetch("http://red-strapi-postgres-heroku.herokuapp.com/Restaurants");
  var restaurantInfo = await response.json();
  return restaurantInfo;
}
var restaurantInfo = getRestaurantsInfo();
// End



/**
 * The names of the restaurants should be buttons with dynamic id
 */
restaurantInfo.then(
  info => {
    for (var i = 0; i < info.length; i++){
      var newTag = document.createElement("button");
      var textnode = document.createTextNode(info[i].name);
      newTag.appendChild(textnode);
      newTag.setAttribute('id','restaurantButton'+i)
      var list = document.getElementById("restaurantNames");
      list.insertBefore(newTag, list.childNodes[0]);
    }
  }
)
// End



/**
 * A function to avoid repeating code when creating new nodes
 * @param {*} newElement is the new HTML tag you want to create
 * @param {*} text1 is the first part of the text node
 * @param {*} text2 is the second part of the text node, if not needed, just say 'null'
 * @param {*} targetID is the id in html where the node will be placed
 * @param {*} where is where the node will be placed in the targetID
 */
function writeOnWebPage(newElement,text1,text2,targetID,where){
  var newTag = document.createElement(newElement);
  var textNode = document.createTextNode(text1+text2);
  newTag.appendChild(textNode);
  var list = document.getElementById(targetID);
  // Here we need to somehow delete whatever is already there in the div
  list.insertBefore(newTag, list.childNodes[where]);
}
// End



/**
 * Give specific onclick functions to each created button
 */
restaurantInfo.then(
  info => {
    for (var i = 0; i < info.length; i++){
      var targetButton = document.getElementById('restaurantButton'+i);
      const name = info[i].name;
      const type = info[i].type;
      const dining = info[i].dining;
      const description = info[i].description;
      targetButton.addEventListener("click", () => {
        writeOnWebPage('h1', 'Name: ', name, 'details', 0);
        writeOnWebPage('span', 'Cuisine ', type, 'details', 1);
        writeOnWebPage('span', 'Dining ', dining, 'details', 2);
        writeOnWebPage('p', 'Description ', description, 'details', 3);
      });
    }
  }
)
// End



/** 
 * Display restaurants with patio.
 */
restaurantInfo.then(
  info => {
    for (var i = 0; i < info.length; i++){
      if (info[i].patio === true){
        var newTag = document.createElement("button");
        var textnode = document.createTextNode(info[i].name + ' ')
        newTag.appendChild(textnode);
        newTag.setAttribute('id','restaurantButton'+i)
        var list = document.getElementById("patio");
        list.insertBefore(newTag, list.childNodes[0]);
      }
    }
  }
)
// End



/** 
 * When a restaurant is clicked, the restaurant info
 * should show in the restaurant detail section.
 */




/** 
 * The user review should be added to the cms.
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