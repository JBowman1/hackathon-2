const hearthstone = {
  "async": true,
  "crossDomain": true,
  "url": "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "f38359af79mshb1d561b3ec9a230p1a4c57jsn64f7f72fef8b"
  }
}

$.ajax(hearthstone).done(function(response) {
  console.log(response);
});

// const freeSound = {
//   "url": "https://freesound...",
//   "method": "GET",
//   "headers": {
//     "access_token": "nKsvvepujcVmKQMILlGrkQHirvmTFcP6rrzs11ew"
//   }
// }
