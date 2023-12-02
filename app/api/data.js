var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://fuel-api.inrix.com/v1/fuelstations/?point=47.61121|-122.32538&radius=2&accesstoken=YXphbGUycnV4aHxvTFBmamVLVUl2OG5DbHIzVEJuWjBhNlV4eksyWmpZQjZ6RTB6a3pF", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

