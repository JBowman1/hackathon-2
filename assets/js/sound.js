class Sound {
  constructor() {
    this.welcomeScreen = document.getElementById('welcomeScreen');
    this.enterButton = document.getElementById('enterButton');
    this.toggleMusic = document.getElementById('toggleMusic');

    this.appMusic = document.getElementById('appMusic');
    this.selectSound = document.getElementById('selectSound')
    this.deckCompleteSound = document.getElementById('deckCompleteSound');
    this.backSound = document.getElementById('backSound');

    this.music = {
      name: 'Music',
      button: this.toggleMusic,
      toggle: null,
      itemList: [...document.getElementById('music').children]
    };
  }

  addEventListeners(){
    this.music.forEach(sound => {
      sound.toggle = this.toggleSound(sound);
      sound.button.addEventListener('click', sound.toggle);
      sound.button.addEventListener('click', change => {
        if (this.toggleMusic.style.backgroundImage('url(../images/volON.png)') === true){
          this.toggleMusic.style.backgroundImage('url(../images/volOFF.png');
        }
        else if (this.toggleMusic.style.backgroundImage('url(../images/volON.png)') === false) {
          this.toggleMusic.style.backgroundImage('url(../images/volON.png');
        }
      })
    });
  }

  toggleSound(sound){
    let toggle = true;
    return () => {
      toggle ? this.playSound(this.onSound): this.playSound(this.offSound);
      if (sound.name === 'Music') toggle ? this.appMusic.play() : this.appMusic.pause();
      toggle = !toggle;
      sound.itemList.forEach(sound => sound.muted = toggle);
    }
  }

  playSound(sounds) {
    const args = [...arguments];
    args.forEach(sound => {
      sound.currentTime = 0;
      sound.play();
    });
  }
}
