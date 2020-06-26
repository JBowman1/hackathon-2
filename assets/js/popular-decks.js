class PopularDecks{
  constructor( builder){
    //this.sound;
    this.builder;

    this.optionScreen = document.getElementById('optionScreen');
    this.popularDeckScreen = document.getElementById('popularDeckScreen');
    this.backButton2 = document.getElementById('backButton3');
  }

  addEventListeners3(){
    this.backButton2.addEventListener('click', this.returnToMain3());
  }

  returnToMain3(){
    this.popularDeckScreen.classList.add('hidden');
    this.optionScreen.classList.remove('hidden');
  }
}
