// const sound = new Sound();
// const options = new Options();
// const app = new App(sound, options);
// app.initializeApp();

$.ajax({
  async: true,
  crossDomain: true,
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
  type: 'GET',
  dataType: 'json',
  headers: {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "f38359af79mshb1d561b3ec9a230p1a4c57jsn64f7f72fef8b"
  },
  success: function(){
    console.log('success');
  },
  error: function () {
    console.log("error");
  }
});

