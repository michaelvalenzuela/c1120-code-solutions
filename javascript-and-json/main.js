let books = [
  {
    isbn: "18234712",
    title: "I am book 1",
    author: "Michael Valenzuela"
  },
  {
    isbn:"1832894",
    title: "I am book 2",
    author: "Matt Valenz"
  },
  {
    isbn:"8471242",
    title: "I am book 3",
    author: "Lorem Ipsum"
  }
];

console.log("books array:", books);
console.log("books typeof:", typeof books)

console.log("JSON:",JSON.stringify(books));
console.log("typeof JSON:", typeof JSON.stringify(books));

console.log("JSON:", JSON.stringify(books));

let jsonString = '{"Number id":"25", "name":"Michael"}';
console.log("JSON student string:",jsonString);
console.log("JSON student string typeof:", typeof jsonString);

console.log("jsonParse:", JSON.parse(jsonString));
console.log("jsonParse typeof:", typeof JSON.parse(jsonString));
