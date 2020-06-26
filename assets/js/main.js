const builder = new Builder();
const popularDecks = new PopularDecks();
const allCards = new AllCards();
const app = new App(builder, popularDecks, allCards);
app.initializeApp();
