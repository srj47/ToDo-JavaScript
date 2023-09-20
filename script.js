const inputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector("#addBtn");
const listContainer = document.querySelector("#listContainer");

function addTask() {
	if (inputBox.value == "") {
		// display alert if input box empty
		alert("You must write somthing!");
	} else {
		// adding list in list container
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	// calling save data for saving changes
	savaData();
}

listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			// for cheking and unckecking list
			e.target.classList.toggle("checked");
			// calling save data for saving changes
			savaData();
		} else if (e.target.tagName === "SPAN") {
			// for removing the list
			e.target.parentElement.remove();
			// calling save data for saving changes
			savaData();
		}
	},
	false,
);

// store in local storage
function savaData() {
	localStorage.setItem("savedList", listContainer.innerHTML);
}

// showing list after reload or comeback to site
function showTask() {
    listContainer.innerHTML = localStorage.getItem("savedList");
}
showTask();