// const sound = new Sound();
// const options = new Options();
// const app = new App(sound, options);
// app.initializeApp();

function handleData(responseData){
  var names = [];
  for(var set in responseData) {
    for (var i = 0; i < responseData[set].length; i++){
      names.push(responseData[set][i]."name");
    }
  }
  console.log(names);
}

function getCardData(){
const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards";
fetch(url, {
  async: true,
  crossDomain: true,
  method: "GET",
  withCredentials: true,
  dataType: 'json',
  headers: {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "f38359af79mshb1d561b3ec9a230p1a4c57jsn64f7f72fef8b"
  }
})
  .then(resp => resp.json())
  .then(function (data) {
    console.log('Success');
    handleData(data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

$(document).ready(function() {
  getCardData()
})
