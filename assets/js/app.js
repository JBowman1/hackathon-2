class App {
  constructor(sound, options){
    this.sound = sound;
    this.options = options;

    this.welcomeScreen = document.getElementById('welcomeScreen');
    this.enterButton = document.getElementById('enterButton');
    this.optionScreen = document.getElementById('optionScreen');
    this.optionButton = document.getElementById('optionButton');
    this.characterSelect = document.getElementById('characterSelect');
    this.characterButton = document.getElementById('characterButton');
    this.deckBuilderScreen = document.getElementById('deckBuilderScreen');
    this.popularDeckScreen = document.getElementById('popularDeckScreen');
    this.allCardsScreen = document.getElementById('allCardsScreen');

    this.welcomeView = {
      view: this.welcomeScreen,
      button: null,
      sound: () => sound.playSound(sound.select)
    };

    this.optionView = {
      view: this.optionScreen,
      button: this.optionButton,
      sound: () => sound.playSound(sound.select)
    };

    this.characterView = {
      view: this.characterSelect,
      button: this.characterButton,
      sound: () => sound.playSound(sound.select, sound.name)
    };

    this.deckBuilderView = {
      view: this.deckBuilderScreen,
      button: this.cardButton,
      sound: () => sound.playSound(sound.cardSelect)
    };

    this.popularDeckView = {
      view: this.popularDeckScreen,
      button: this.deckButton,
      sound: () => sound.playSound(sound.select)
    };

    this.allCardsView = {
      view: this.allCardsScreen,
      button: null,
      sound: null
    };

    this.views = [this.welcomeView, this.optionView, this.characterView, this.deckBuilderView, this.popularDeckView, this.allCardsView];
    this.index = 0;
  }

  initializeApp() {
    this.sound.addEventListeners();
    this.options.initializeOptions();
    this.addEventListeners();
  }

  addEventListeners() {
    this.enterButton.addEventListener('click', this.switchView);
    this.optionButton.addEventListener('click', this.switchView);
    this.characterButton.addEventListener('click', this.switchView);
  }

  switchView(){

  }

  
}
