var enteredZip = document.querySelector('#zipCode');  //zip is the value from the zip input field in form
var zip;
var submit = document.querySelector('.submitZip');

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

submit.addEventListener('click', function(){
  zip = enteredZip.value;
  var url = 'https://api.wunderground.com/api/e948aefbd9d71dd2/forecast10day/q/' + zip + '.json'

  getJSON(url, function(data) {
    var forecastdays = data.forecast.simpleforecast.forecastday;
    var weather = document.querySelector("#weather");

    forecastdays.forEach(function(day){
      var frag = document.createDocumentFragment();
      var container = document.createElement('div')
      container.className = 'weather';
      frag.appendChild(container);

      weather.appendChild(frag);
      debugger;
    });
  });
});


// .small-12.large-2.large-offset-1.columns.panel
//   ul.dayInfo
//     li.dayName.
//       Day of Week
//     li.dayImg.
//       Image image
//     li.dayHi.
//       Hi
//     li.dayLo.
//       Low
