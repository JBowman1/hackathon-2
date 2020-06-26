class Builder{
  constructor(){
    this.title = null;
    this.deck = [];

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
    this.backButton2 = document.getElementById('backButton2');
    this.loadingSpinner = document.getElementById('loading');

    this.getCardData =  this.getCardData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.displayCards = this.displayCards.bind(this);
    this.chooseYourCharacter = this.chooseYourCharacter.bind(this);
    this.switch = this.switch.bind(this);
    this.returnToMain = this.returnToMain.bind(this);
  }

  chooseYourCharacter() {
    this.warrior.addEventListener('click', this.switch);
    this.shaman.addEventListener('click', this.switch);
    this.rogue.addEventListener('click', this.switch);
    this.paladin.addEventListener('click', this.switch);
    this.hunter.addEventListener('click', this.switch);
    this.druid.addEventListener('click', this.switch);
    this.warlock.addEventListener('click', this.switch);
    this.mage.addEventListener('click', this.switch);
    this.priest.addEventListener('click', this.switch);
    this.demonHunter.addEventListener('click', this.switch);
    this.backButton2.addEventListener('click', this.returnToMain);
  }

  switch(e){
    var element = e.target;
    this.title = element.getAttribute('data-title');
    this.characterSelectScreen.classList.add('hidden');
    this.deckBuilderScreen.classList.remove('hidden');
    this.loadingSpinner.classList.remove('hidden');
    this.getCardData();
    console.log(this.title);
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
      .then (data => {
        this.handleData(data);
      })
      .then(()=>{
        this.loadingSpinner.classList.add('hidden');
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleData(responseData) {
    const names = [];
    for (const set in responseData) {
      if (set === "Basic" || set === "Classic") {
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
    const unique = [...new Set(names)];
    this.displayCards(unique);
  }

  displayCards(cardDeck) {
    for (let j = 0; j < cardDeck.length; j++) {
      if(cardDeck[j].playerClass === this.title || cardDeck[j].playerClass === "Neutral"){
      const div = document.createElement('div');
      const cardImage = document.createElement('img');
      cardImage.id = cardDeck[j].name;
      cardImage.setAttribute('src', cardDeck[j].img);
      cardImage.setAttribute('class', 'card');
      div.setAttribute('class', 'newCardContainer');
      div.append(cardImage);
      this.cardContainer.append(div);
      cardImage.addEventListener('click', ()=>{
        if (this.deck.length < 30) {
          this.deck.push(cardImage.id);
          const span = document.createElement('span');
          span.textContent = cardImage.id;
          this.deckContainer.append(span);
        }
      });
      $("img").on('error', function () {
        $(this).attr("class", "hidden");
      });
    }
  }
}

  returnToMain(){
    this.deck = [];
    this.title = null;
    this.cardContainer.innerHTML = "";
    this.deckContainer.innerHTML = "";
    this.loadingSpinner.classList.add('hidden');
    this.deckBuilderScreen.classList.add('hidden');
    this.optionScreen.classList.remove('hidden');
  }
}
