var enteredZip = document.querySelector('#zipCode');  //zip is the value from the zip input field in form
var zip;
var submit = document.querySelector('.submitZip');
var url;
var forecastday;



submit.addEventListener('click', function(){
    zip = enteredZip.value;
    var url = 'https://api.wunderground.com/api/e948aefbd9d71dd2/forecast10day/q/' + zip + '.json'

    function getJSON(url, cb) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);

      xhr.onload = function (data){
        if (this.status >= 200 && this.status < 400) {
          cb(JSON.parse(this.response));
        }
      }
      xhr.send();
    }

    getJSON(url, function(data) {

      forecastday = data.forecast.simpleforecast.forecastday;
      
      debugger;
    });
});
