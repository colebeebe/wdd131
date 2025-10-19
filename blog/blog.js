
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
	}
]

articles.forEach((article) => {
	// Get the specific element
	const infoString = "book-info-" + article.id.toString();
	const infoElement = document.getElementById(infoString);

	// Set the elements on the info panel
	const date = infoElement.querySelector(".date");
	date.textContent = article.date;
	const ages = infoElement.querySelector(".ages");
	ages.textContent = article.ages;
	const genre = infoElement.querySelector(".genre");
	genre.textContent = article.genre;
	const rating = infoElement.querySelector(".rating");
	rating.textContent = article.stars;

	// Set the elements on the book panel
	const bookTitle = infoElement.querySelector(".book-title");
	bookTitle.textContent = article.title;
	const image = infoElement.querySelector("img");
	image.src = article.imgSrc;
	image.alt = article.imgAlt;
	const description = infoElement.querySelector(".description");
	description.textContent = article.description;

	const link = document.createElement("a");
	link.href = "#";
	link.textContent = "Read more...";

	description.appendChild(link);
});