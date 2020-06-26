class AllCards {
  constructor(builder, popularDecks){
  //this.sound = sound;
  this.builder = builder;
  this.popularDecks = popularDecks;

  this.optionScreen = document.getElementById('optionScreen');
  this.allCardsScreen = document.getElementById('allCardsScreen');
  this.allCardsContainer = document.getElementById('allCardsContainer');
  this.backButton4 = document.getElementById('backButton4');
  }

  addEventListeners(){
    this.backButton4.addEventListener('click', this.returnToMain);
  }

  handleData(responseData) {
    var names = [];
    for (var set in responseData) {
      if (set === "Basic" || set === "Classic") {
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
    this.displayCards(unique);
  }

  displayCards(cardDeck){
    for(let j = 0; j < cardDeck.length; j++){
      let div = document.createElement('div');
      let cardImage = document.createElement('img');
      cardImage.id = cardDeck[j].name;
      cardImage.setAttribute('src', cardDeck[j].img);
      cardImage.setAttribute('class', 'card');
      div.setAttribute('class', 'newCardContainer');
      div.append(cardImage);
      this.allCardsContainer.append(div);
      $("img").on('error', function () {
        $(this).attr("class", "hidden");
      });
    }
  }

  getCardData() {
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
        this.handleData(data);
      })
      .then(function(){
        var loadingSpinner = document.getElementById('loading');
        loadingSpinner.setAttribute('class','hidden');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  returnToMain(){
    this.allCardsScreen.classList.add('hidden');
    this.optionScreen.classList.remove('hidden');
  }
}
