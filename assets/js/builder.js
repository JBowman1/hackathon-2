class Builder{
  constructor(sound){
    this.sound = sound;
    this.title = null;

    this.optionScreen = document.getElementById('optionScreen');
    this.characterSelectScreen = document.getElementById('characterSelect');
    this.deckBuilderScreen = document.getElementById('deckBuilderScreen');
    this.deckBuilderMain = document.getElementById('deckBuilderMain');
    this.cardContainer = document.getElementById('cardContainer');
    this.deckContainer = document.getElementById('deckContainer');

    this.warrior = document.getElementById('warriorButton');
    this.shaman = document.getElementById('shamanButton');
    this.rogue = document.getElementById('rogueButton');
    this.paladin = document.getElementById('paladinButton');
    this.hunter = document.getElementById('hunterButton');
    this.druid = document.getElementById('druidButton');
    this.warlock = document.getElementById('warlockButton');
    this.mage = document.getElementById('mageButton');
    this.priest = document.getElementById('priestButton');
    this.demonHunter = document.getElementById('demonHunterButton');
    this.backButton1 = document.getElementById('backButton1');

    this.getCardData =  this.getCardData.bind(this);
    this.handleData = this.getCardData.bind(this);
    this.displayCards = this.displayCards.bind(this);
    this.addToDeck = this.addToDeck.bind(this);
  }

  addEventListeners() {
    this.warrior.addEventListener('click', this.switchView);
    this.shaman.addEventListener('click', this.switchView);
    this.rogue.addEventListener('click', this.switchView);
    this.paladin.addEventListener('click', this.switchView);
    this.hunter.addEventListener('click', this.switchView);
    this.druid.addEventListener('click', this.switchView);
    this.warlock.addEventListener('click', this.switchView);
    this.mage.addEventListener('click', this.switchView);
    this.priest.addEventListener('click', this.switchView);
    this.demonHunter.addEventListener('click', this.switchView);
    this.backButton1.addEventListener('click', this.returnToMain2);
  }

  switchView(e){
    var element = e.target;
    this.title = element.getAttribute('data-title');
    this.characterSelectScreen.classList.add('hidden');
    this.deckBuilderScreen.classList.remove('hidden');
    this.getCardData();
    return this.title;
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
      .then(function () {
        var loadingSpinner = document.getElementById('loading');
        loadingSpinner.setAttribute('class', 'hidden');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleData(responseData) {
    const names = [];
    for (const set in responseData) {
      if (set == "Basic" || set == "Classic") {
        for (let i = 0; i < responseData[set].length; i++) {
          if (responseData[set][i]['img'] !== undefined && responseData[set][i]['type'] !== "Hero Power" && responseData[set][i]['type'] !== "Hero" && responseData[set][i]['name'] !== "Skeleton") {
            names.push({
              name: responseData[set][i]['name'],
              img: responseData[set][i]['img'],
              playerClass: responseData[set][i]['playerClass']
            });
          }
        }
      }
    }
    let unique = [...new Set(names)];
    this.displayCards(unique);
  }

  displayCards(cardDeck) {
    for (let j = 0; j < cardDeck.length; j++) {
      if(cardDeck[j].playerClass === this.title || cardDeck[j].playerClass === "Neutral"){
      let div = document.createElement('div');
      let cardImage = document.createElement('img');
      cardImage.id = cardDeck[j].name;
      cardImage.setAttribute('src', cardDeck[j].img);
      cardImage.setAttribute('class', 'card');
      div.setAttribute('class', 'newCardContainer');
      div.append(cardImage);
      this.cardContainer.append(div);
      cardImage.addEventListener('click', this.addToDeck);
      $("img").on('error', function () {
        $(this).attr("class", "hidden");
      });
    }
  }
}

  addToDeck(){
    const deck = [];
    if (deck.length < 30){
    deck.push(this.cardImage.id);
    let span = document.createElement('span');
    span.textContent = this.cardImage.id;
    this.deckContainer.append(span);
    }
  }

  returnToMain(){
    this.deckBuilderScreen.classList.add('hidden');
    this.optionScreen.classList.remove('hidden');
  }
}
