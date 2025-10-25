
const articles = [
    {
	id: 1,
	title: 'Septimus Heap Book One: Magyk',
	date: 'July 5, 2022',
	description:
	'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you. ',
	imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
	imgAlt: 'Book cover for Septimus Heap 1',
	ages: '10-14',
	genre: 'Fantasy',
	stars: '****'
    },
    {
	id: 2,
	title: 'Magnus Chase Book One: Sword of Summer',
	date: 'December 12, 2021',
	description:
	'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good. ',
	imgSrc:
	'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
	imgAlt: 'Book cover for Magnus Chase 1',
	ages: '12-16',
	genre: 'Fantasy',
	stars: '⭐⭐⭐⭐'
    },
    {
	id: 3,
	title: "Belgariad Book One: Pawn of Prophecy",
	date: "Feb 12, 2022",
	description:
	"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
	imgSrc:
	"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
	imgAlt: "Book cover for Pawn of Prophecy",
	ages: "12-16",
	genre: "Fantasy",
	stars: "⭐⭐⭐⭐⭐"
    }
]


/**
 * Build the info panel
 *
 * @param {HTMLElement[]} children - All elements to be added to the panel
 * @returns {HTMLDivElement} infoPanel - The built info panel
 */
function buildInfoPanel(...children) {
    const infoPanel = document.createElement("div");
    infoPanel.classList.add("info-panel");
    children.forEach(child => infoPanel.appendChild(child));
    return infoPanel;
}


/**
 * Build the book panel
 *
 * @param {HTMLElement[]} children - All elements to be added to the panel
 * @returns {HTMLDivElement} bookPanel - The build book panel
 */
function buildBookPanel(...children) {
    const bookPanel = document.createElement("div");
    bookPanel.classList.add("book-panel");
    children.forEach(child => bookPanel.appendChild(child));
    return bookPanel;
}


const reviews = document.querySelector("#reviews");

articles.forEach((article) => {
    // Create elements for the info panel
    const date = document.createElement("p");
    date.classList.add("date");
    date.innerText = article.date;

    const ages = document.createElement("p");
    ages.innerText = article.ages;

    const genre = document.createElement("p");
    genre.innerText = article.genre;

    const rating = document.createElement("p");
    rating.innerText = article.stars;

    // Create the info panel
    const infoPanel = buildInfoPanel(date, ages, genre, rating);

    // Create elements for the book panel
    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("book-title");
    bookTitle.innerText = article.title;

    const bookCover = document.createElement("img");
    bookCover.alt = article.imgAlt;
    bookCover.src = article.imgSrc;

    const desc = document.createElement("p");
    desc.classList.add("description");
    desc.innerHTML = article.description;
    desc.innerHTML += " <a href='#'>Read more...</a>";

    // Create the book panel
    const bookPanel = buildBookPanel(bookTitle, bookCover, desc);

    // Create the book info element
    const bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");
    bookInfo.appendChild(infoPanel);
    bookInfo.appendChild(bookPanel);

    // Add the entry to the DOM
    reviews.appendChild(bookInfo);
});

