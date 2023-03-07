const uri = "https://www.anapioficeandfire.com/api/books";
const bookscontainer = document.getElementById("Books-container");
const searchInput = document.getElementById("search");
let book = [];

function handleSearch(target) {
  const search = target.value.toLowerCase();
  const searchMatch = book.filter((element) => {
    const name = element.name.toLowerCase();
    return name.includes(search);
  });
  renderCards(searchMatch);
}

async function fetchData() {
  const response = await fetch(uri);
  const data = await response.json();
  if (data.length > 0) {
    book = [...data];
    renderCards(book);
  }
}
fetchData();
function renderCards(data = []) {
  let cards = [];
  for (let i = 0; i < data.length; i++) {
    cards.push(createCard(data[i]));
  }
  bookscontainer.innerHTML = "";
  bookscontainer.append(...cards);
}

function createCard(data = {}) {
  let card = document.createElement("div");
  let title = document.createElement("h3");
  let subHeading1 = document.createElement("p");
  let subHeading2 = document.createElement("p");
  let subHeading3 = document.createElement("p");
  let subHeading4 = document.createElement("p");
  let subHeading5 = document.createElement("p");

  card.setAttribute("class", "card");
 
  const { name = "", isbn = "", authors = "", publisher = "", released = "", numberOfPages = "" } = data;
  
  title.innerText = name;
  const a = document.createElement("h3");
  const b = document.createTextNode("Title :")
            const c = document.createTextNode(" ")
            a.append(b,c,title.innerText);
            card.append(a);

  subHeading1.innerText = isbn;
  const a1 = document.createElement("p");
  const b1 = document.createTextNode("ISBN :")
            const c1 = document.createTextNode(" ")
            a1.append(b1,c1,subHeading1.innerText);
            card.append(a1);
  
  subHeading2.innerText = authors;
  const a2 = document.createElement("p");
  const b2 = document.createTextNode("Author :")
            const c2 = document.createTextNode(" ")
            a2.append(b2,c2,subHeading2.innerText);
            card.append(a2);
  
  subHeading3.innerText = publisher;
  const a3 = document.createElement("p");
  const b3 = document.createTextNode("Publisher :")
            const c3 = document.createTextNode(" ")
            a3.append(b3,c3,subHeading3.innerText);
            card.append(a3);
  
  subHeading4.innerText = released;
  const a4 = document.createElement("p");
  const b4 = document.createTextNode("Released Date :")
            const c4 = document.createTextNode(" ")
            a4.append(b4,c4,subHeading4.innerText);
            card.append(a4);

  subHeading5.innerText = numberOfPages;
  const a5 = document.createElement("p");
  const b5 = document.createTextNode("Number Of Pages :")
            const c5 = document.createTextNode(" ")
            a5.append(b5,c5,subHeading5.innerText);
            card.append(a5);

  return card;
}
