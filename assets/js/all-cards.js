class AllCards {
  constructor(){
  this.loadingSpinner = document.getElementById('loading');
  this.optionScreen = document.getElementById('optionScreen');
  this.allCardsScreen = document.getElementById('allCardsScreen');
  this.allCardsContainer = document.getElementById('allCardsContainer');
  this.backButton4 = document.getElementById('backButton4');

  this.addButtonFunction = this.addButtonFunction.bind(this);
  this.returnToMain2 = this.returnToMain2.bind(this);
  }

  initialize(){
    this.loadingSpinner.classList.remove('hidden');
  }

  addButtonFunction(){
    this.backButton4.addEventListener('click', this.returnToMain2);
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
      .then(data => {
        this.handleData(data);
      })
      .then(() => {
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
        const div = document.createElement('div');
        const cardImage = document.createElement('img');
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

  returnToMain2(){
    this.allCardsContainer.innerHTML = "";
    this.loadingSpinner.classList.add('hidden');
    this.allCardsScreen.classList.add('hidden');
    this.optionScreen.classList.remove('hidden');
  }
}
