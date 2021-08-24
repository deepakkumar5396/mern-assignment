
const manager = new BookManager();
function displayBookList(parentElementId) {  

    let bookList = document.getElementById(parentElementId); //get reference to the tbody
    bookList.innerHTML = ''; //empty the tbody


    for (let book of manager.getAllBooks()) {
        let tr = `
        <tr>
            <td><img  src='${book.cover}'/></td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <a class='primary' href='book-details.html?id=${book._id}'>Details</a>
                <a class='danger' href='#' onclick='deleteBook("${book._id}")'>Delete</a>
            </td>
        </tr>        
        `

        bookList.innerHTML+=tr;
    }

}

function deleteBook(bookId){
    //console.log('deleting book ', bookId);
    manager.removeBook(bookId);
    displayBookList('books');
}

function setHtml(id,content){
    document.getElementById(id).innerHTML=content;
}

function setValue(id,content){
    document.getElementById(id).value=content;
}

function showBookDetails(){
    console.log(window.location.search);
    let id = window.location.search.replace("?id=","");
    console.log('id',id);

    let book=manager.getBookById(id);
    console.log('book',book);

    setHtml('book-title',book.title);
    setHtml('book-author',book.author);
    setHtml('book-details',book.description);
    document.getElementById('cover-image').src=book.cover;

       
}

function getValue(id){
    return document.getElementById(id).value;
}

function addBook(){
    let book={
        _id: getValue('id'),
        title:getValue('title'),
        author: getValue('author'),
        cover:getValue('cover'),
        description: getValue('description'),
    }
    console.log('book',book);
    manager.addBook(book);
    window.location.href="index.html";
    
}

function addreview(){
    let review={
        name: getValue('reviewer-name'),
        rating:getValue('reviewer-rating'),
        comment:getValue('reviewer-comment')
    }
    console.log('review',review);
    manager.addreview(review);
    
    
