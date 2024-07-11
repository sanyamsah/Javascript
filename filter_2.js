const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((book) => book.genre == 'Fiction');
console.log("Fiction books: ", userBooks);

const latestEditions = books.filter((book) => book.edition >= 2000);
console.log("Latest Edition Books: ", latestEditions);

let myBooks = books.filter((book) => book.genre === 'Science' && book.publish >= 2000);
console.log("Science books published after 2000: ", myBooks);

// alternately,
myBooks = books.filter((book) => {
    return book.genre === 'Non-Fiction' && book.publish >= 1970
});
console.log("Non-Fiction books published after 1970: ", myBooks);