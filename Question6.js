function addBook(id, refreshBook) {
    refreshBook(id);
}

function refreshBookList(id) {
    console.log("Book with id " + id + " has been added");
}

addBook(23, refreshBookList);