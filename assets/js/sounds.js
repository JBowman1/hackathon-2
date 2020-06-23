class Sound {
  constructor() {
    this.welcomeScreen = document.getElementById('welcomeScreen');
    this.enterButton = document.getElementById('enterButton');

    this.select = document.getElementById('selectSound');
    this.appMusic = document.getElementById('appMusic');
    this.characterVoice = document.getElementById('characterVoice');
    this.deckComplete = document.getElementById('deckComplete');

    this.toggleMusic = document.getElementById('toggleMusic');
    this.toggleSFX = document.getElementById('toggleSFX');

    this.music = {
      name: 'Music',
      button: this.toggleMusic,
      toggle: null,
      itemList: [...document.getElementById('music').children]
    };

    this.soundEffects = {
      name: 'SFX',
      button: this.toggleSFX,
      toggle: null,
      itemList: [...document.getElementById('soundEffects').children]
    };

    this.soundList = [this.music, this.soundEffects];
  }

  addEventListeners(){
    this.soundList.forEach(sound => {
      sound.toggle = this.toggleSound(sound);
      sound.button.addEventListener('click', sound.toggle);
    });
  }

  // configureApp(event){
  //   if(event.target.id === 'enterButton') {
  //     sound.soundList.forEach(sound => sound.toggle());
  //   }
  //   this.welcomeScreen.classList.add('hidden')
  // }

  toggleSound(sound){
    let toggle = true;
    return () => {
      toggle ? this.playSound(this.onSound): this.playSound(this.offSound);
      toggle ? sound.button.textContent = `${sound.name} | ON` : sound.button.textContent = `${sound.name} | OFF`;
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
