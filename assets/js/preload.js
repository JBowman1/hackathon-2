function preloadImages(arr) {
  if (!preloadImages.list) preloadImages.list = [];
  const list = preloadImages.list;
  for (let i = 0; i < arr.length; i++) {
    const img = new Image();
    img.onload = () => {
      const index = list.indexOf(this);
      if (index !== -1) list.splice(index, 1);
    }
    list.push(img);
    img.src = arr[i];
  }
}

preloadImages([
  "../images/Background1.png",
  "../images/Background2.png",
  "../images/Background3.png",
  "../images/Background4.png",
  "../images/Background5.png",
  "../images/Background6.png",
  "../images/enterButton.png",
  "../images/volON.png",
  "../images/volOFF.png",
  "../images/Welcome.png",
  "../images/Demon Hunter.png",
  "../images/Druid.png",
  "../images/Hunter.png",
  "../images/Mage.png",
  "../images/Paladin.png",
  "../images/Priest.png",
  "../images/Rogue.png",
  "../images/Shaman.png",
  "../images/Warlock.png",
  "../images/Warrior.png"
]);

const hearthstone = {
  "async": true,
  "crossDomain": true,
  "url": "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/%7Bname%7D",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "f38359af79mshb1d561b3ec9a230p1a4c57jsn64f7f72fef8b"
  }
}

$.ajax(hearthstone).done(function (response) {
  console.log(response);
});

// const freeSound = {
//   "url": "https://freesound...",
//   "method": "GET",
//   "headers": {
//     "access_token": "nKsvvepujcVmKQMILlGrkQHirvmTFcP6rrzs11ew"
//   }
// }
