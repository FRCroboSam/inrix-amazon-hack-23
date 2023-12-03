var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw?fields=id,displayName&key=AIzaSyC5yg2CgvpTYkNjntXXpwMNSTLkUkvkKSc", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));