// fetch("http://red-strapi-postgres-heroku.herokuapp.com/Reviews", {
//     method: "POST",
//     headers: {
//         Accept: "application/json",
//         "content-type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "I",
//         rating: 5,
//         idrestaurant: "G0D0WN",
//         review: "Please Show Up!"
//     })
// })

fetch("http://red-strapi-postgres-heroku.herokuapp.com/reviews", {
    "method": "POST",
    "headers": {
        "Accept": "application/json",
        "content-type": "application/json"
    },
    "body": {
        "name": "ABC",
        "review": "Hello",
        "rating": 5,
        "idrestaurant": "4Q8M6R",
        "created_at": "2020-02-25T19:03:34.402Z",
        "updated_at": "2020-02-25T19:03:34.402Z"
    }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.log(err);
});