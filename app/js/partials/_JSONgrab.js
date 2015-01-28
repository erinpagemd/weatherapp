var zip = 35801; //zip is the value from the zip input field in form
var url = 'https://api.wunderground.com/api/e948aefbd9d71dd2/forecast/q/' + zip + '.json'

function getJSON(url, cb) {
  var xhr = new XMLHttpRequest();
  request.open('GET', url);

  xhr.onload = function (){
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.xhr));
    }
  }

  xhr.send();
}

getJSON(url, function(data) {
  
})
