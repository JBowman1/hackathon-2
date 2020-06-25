var allCardsContainer = document.getElementById('allCardsContainer');

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
  "images/Background1.png",
  "images/Background2.png",
  "images/Background3.png",
  "images/Background4.png",
  "images/Background5.png",
  "images/Background6.png",
  "images/enterButton.png",
  "images/volON.png",
  "images/volOFF.png",
  "images/Welcome.png",
  "images/Demon Hunter.png",
  "images/Druid.png",
  "images/Hunter.png",
  "images/Mage.png",
  "images/Paladin.png",
  "images/Priest.png",
  "images/Rogue.png",
  "images/Shaman.png",
  "images/Warlock.png",
  "images/Warrior.png",
  "images/loading.png",
  "images/spinner.gif"
]);

function handleData(responseData) {
  var names = [];
  for (var set in responseData) {
    if (set == "Basic" || set == "Classic") {
      for (let i = 0; i < responseData[set].length; i++) {
        if (responseData[set][i]['img'] !== undefined && responseData[set][i]['type'] !== "Hero Power" && responseData[set][i]['type'] !== "Hero" && responseData[set][i]['name'] !== "Skeleton"){
          names.push({
            name: responseData[set][i]['name'],
            img: responseData[set][i]['img']
          });
        }
      }
    }
  }
  let unique = [...new Set(names)];
  displayCards(unique);
}

function displayCards(cardDeck){
  for(let j = 0; j < cardDeck.length; j++){
    let div = document.createElement('div');
    let cardImage = document.createElement('img');
    cardImage.id = cardDeck[j].name;
    cardImage.setAttribute('src', cardDeck[j].img);
    cardImage.setAttribute('class', 'card');
    div.setAttribute('class', 'newCardContainer');
    div.append(cardImage);
    allCardsContainer.append(div);
    $("img").on('error', function () {
      $(this).attr("class", "hidden");
    });
  }
}

function getCardData() {
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
      handleData(data);
    })
    .then(function(){
      var loadingSpinner = document.getElementById('loading');
      loadingSpinner.setAttribute('class','hidden');
    })
    .catch(function (error) {
      console.log(error);
    });
}

$(document).ready(function () {
  getCardData()
});
