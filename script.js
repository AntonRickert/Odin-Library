const BookArr = [];

let SubmitBtn = document.getElementById('SubmitBtn');
let bookInput;
let BookContainer = document.getElementById('Book-Container');


SubmitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (document.getElementById('title').value === "") {
        popup();
        return
    };
    if (document.getElementById('author').value === "") {
        popup();
        return
    };
    if (document.getElementById('pageNum').value === "") {
        popup();
        return
    };
    bookInput = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pageNum').value,
        read: document.querySelector('input[name="read"]:checked').value,
    };

    BookMaker();
});


function BookMaker() {
    let BookProto = bookInput.title;
    BookProto = new NewBook(bookInput.title, bookInput.author, bookInput.pages, bookInput.read);
    BookArr.push(BookProto);
    console.log(BookArr);

    // BookToDisplay();
}

// function BookToDisplay() {
//     const card = document.createElement('div');
//     card.className = 'Book-Card'
//     card.innerHTML = BookArr[BookArr.length -1].name;
//     BookContainer.appendChild(card);
// }


function popup() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
 } 



function NewBook(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.LogInfo = function () {
        console.log(name);
    }
}



