var enteredZip = document.querySelector('#zipCode');  //zip is the value from the zip input field in form
var zip;
var submit = document.querySelector('.submitZip')


submit.addEventListener('click', function(){
    zip = enteredZip.value;
    console.log(zip);
    debugger;
});


/* 
var url = 'https://api.wunderground.com/api/e948aefbd9d71dd2/forecast/q/' + zip + '.json'

function getJSON(url, cb) {
  var xhr = new XMLHttpRequest();
  request.open('GET', url);

  xhr.onload = function (){
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.data));
    }
  }

  xhr.send();
}

getJSON(url, function(data) {

});
*/
