// Root Variables
var submit = document.querySelector(".book-list");
var success = document.querySelector(".success-alert");
var error = document.querySelector(".error-alert");
var remove = document.querySelector(".remove-alert");
var singleBookRow = document.querySelector("#table-body")

/*Single Book creating Constructor
******************************************************/
function Books(bookName, author, bookNumber) {
	this.title = bookName;
	this.writer = author;
	this.isbn =  bookNumber;
}

/*Book Adding to the HTML Constructor
*****************************************************/
function EditingMarkupForBooks(){};

EditingMarkupForBooks.prototype.addBook = function (randomObject){
	var list = document.querySelector("#table-body");
	var row = document.createElement('tr');
	row.innerHTML = `
	<td>${randomObject.title}</td>
	<td>${randomObject.writer}</td>
	<td>${randomObject.isbn}</td>
	<td class="delete"><span class="delete-span">X</span></td>
	`;
	list.appendChild(row);
}
EditingMarkupForBooks.prototype.clearForm = function (){
	document.querySelector("#title").value = "";
	document.querySelector("#author").value = "";
	document.querySelector("#isbn").value = "";
}
EditingMarkupForBooks.prototype.errorAlert = function (){
	error.classList.add("show");
  setTimeout(function(){
    error.classList.remove("show");
  }, 3000);
}
EditingMarkupForBooks.prototype.successAlert = function (){
	success.classList.add("show");
  setTimeout(function(){
    success.classList.remove("show");
  }, 3000);
}
EditingMarkupForBooks.prototype.removeAlert = function (){
	remove.classList.add("show");
  setTimeout(function(){
    remove.classList.remove("show");
  }, 3000);
}

/* Main Work area
********************************************************/
submit.addEventListener("submit", function (e){
var title = document.querySelector("#title").value,
		author = document.querySelector("#author").value,
		isbn = document.querySelector("#isbn").value;
	var newBook = new Books(title, author, isbn);
	var ui = new EditingMarkupForBooks();

	if (title == "" || author == "" || isbn == "") {
		ui.errorAlert();
	} else {
			ui.addBook(newBook);
			ui.clearForm();
			ui.successAlert();
	}

	e.preventDefault(); //donno how/why it works, just know it has to be added to prevent the defaulted instant loading when submit button is clicked/pressed.
											//Update: now ik. e parameter is the event object where lies all the possible method/event for an element. Submit button in this case
})
singleBookRow.addEventListener("click", function (e){
	var ui = new EditingMarkupForBooks();
	if (e.target.className == "delete-span") {
		e.target.parentElement.parentElement.remove();
		ui.removeAlert();
	} else {
		console.log("whytf are you clicking randomly nigga?");
	}
	e.preventDefault();
})