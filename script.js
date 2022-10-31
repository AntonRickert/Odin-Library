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

    BookToDisplay();
}

function BookToDisplay() {
    const card = document.createElement('div');
    card.className = 'Book-Card' + ' ' + 'num' + BookArr.length;
    BookContainer.appendChild(card);

    const title = document.createElement('div');
    title.innerHTML = 'Book Title: ' + BookArr[BookArr.length - 1].name;
    card.appendChild(title);

    const author = document.createElement('div');
    author.innerHTML = 'Book Author: ' + BookArr[BookArr.length - 1].author;
    card.appendChild(author);

    const length = document.createElement('div');
    length.innerHTML = 'Book Length: ' + BookArr[BookArr.length - 1].pages;
    card.appendChild(length);

    const read = document.createElement('div');
    read.innerHTML = 'Read: ' + BookArr[BookArr.length - 1].read;
    card.appendChild(read);

    const btnContainer = document.createElement('div')
    btnContainer.className = 'btnContainer'
    card.appendChild(btnContainer)

    const readToggle = document.createElement('div');
    readToggle.className = 'material-symbols-sharp';
    if (BookArr[BookArr.length - 1].read === 'Yes') {
        readToggle.className += ' selected'
    }
    readToggle.innerHTML = 'bookmark';
    btnContainer.appendChild(readToggle);

    const deleteCard = document.createElement('div');
    deleteCard.className = 'material-symbols-sharp';
    deleteCard.innerHTML = 'delete';
    btnContainer.appendChild(deleteCard);

    deleteCard.addEventListener('click', function() {
        BookContainer.removeChild(card);
    });

    checkForReadChange(readToggle, read);
    
}


function checkForReadChange(readToggle, read) {
    readToggle.addEventListener('click', function() {
        readToggle.classList.toggle('selected')
        if (read.innerHTML === 'Read: Yes') {
            read.innerHTML = 'Read: ' + 'No'
        }
        else if (read.innerHTML === 'Read: No'){
            read.innerHTML = 'Read: ' + 'Yes'
        } 
    })
    
}

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



