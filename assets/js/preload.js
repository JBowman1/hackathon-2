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
  "../images/enterButton.png",
  "../images/Welcome.png"
]);
