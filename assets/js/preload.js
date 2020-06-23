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
