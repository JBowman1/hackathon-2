class App {
  constructor(builder, allCards){
    this.builder = builder;
    //this.popularDecks = popularDecks;
    this.allCards = allCards;
    this.title = null;

    this.welcomeScreen = document.getElementById('welcomeScreen');
    this.optionScreen = document.getElementById('optionScreen');
    this.characterSelectScreen = document.getElementById('characterSelect');
    this.deckBuilderScreen = document.getElementById('deckBuilderScreen');
    this.popularDeckScreen = document.getElementById('popularDeckScreen');
    this.allCardsScreen = document.getElementById('allCardsScreen');

    this.enterButton = document.getElementById('enterButton');
    this.buildDeckButton = document.getElementById('buildDeckButton');
    this.popularDeckButton = document.getElementById('popularDeckButton');
    this.allCardsButton = document.getElementById('allCardsButton');
    this.creditsButton = document.getElementById('creditsButton');
    this.loadingSpinner = document.getElementById('loading');

    this.addEventListeners = this.addEventListeners.bind(this);
    this.switchView = this.switchView.bind(this);
  }

  initializeApp(){
    this.addEventListeners();
  }

  addEventListeners() {
    this.enterButton.addEventListener('click', this.switchView);
    this.characterSelectScreen.addEventListener('click', this.switchView);
    this.buildDeckButton.addEventListener('click', this.switchView);
    this.popularDeckButton.addEventListener('click', this.switchView);
    this.allCardsButton.addEventListener('click', this.switchView);
    this.creditsButton.addEventListener('click', this.switchView);
  }

  switchView(e){
    let element = e.target;
    this.title = element.getAttribute('data-title');
    switch(this.title){
      case "enter":
        this.welcomeScreen.classList.add('hidden');
        this.optionScreen.classList.remove('hidden');
        break;
      case "buildDeck":
        this.optionScreen.classList.add('hidden');
        this.characterSelectScreen.classList.remove('hidden');
        this.builder.chooseYourCharacter();
        break;
      case "popularDeck":
        this.optionScreen.classList.add('hidden');
        this.popularDeckScreen.classList.remove('hidden');
        break;
      case "allCards":
        this.optionScreen.classList.add('hidden');
        this.allCardsScreen.classList.remove('hidden');
        this.allCards.getCardData();
        this.allCards.initialize();
        this.allCards.addButtonFunction();
        break;
      case "credits":
        this.optionScreen.classList.add('hidden');
        this.creditsScreen.classList.add('hidden');
        break;
    }
  }
}
