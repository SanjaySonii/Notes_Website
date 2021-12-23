console.log("I am in the notes app");
showNotes();

// if user add a note , add it to the local storage
let addBtn = document.getElementById(`addBtn`);
addBtn.addEventListener(`click`, function (e) {
    let title = document.getElementById(`title`);
    let noteArea = document.getElementById(`noteArea`);
    let noteArray = [title.value, noteArea.value];
    let myNotes = localStorage.getItem(`myNotes`);
    if (myNotes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(myNotes);
    }
    if (noteArea.value == "" && title.value == "") { alert("Please Enter Title and Some Notes"); }
    else if (noteArea.value == "") { alert("Please Enter Some Notes"); }
    else if (title.value == "") { alert("Please Enter Title"); }
    else { notesObj.push(noteArray); show("success"); }
    localStorage.setItem("myNotes", JSON.stringify(notesObj));
    console.log(localStorage);
    noteArea.value = "";
    title.value = "";
    console.log(notesObj);
    showNotes();
});

function show(type) {
    // let displayObj = new Display();
    let alert = document.getElementById(`alert`);
    if (type == "delete") {
        alert.style.background = "lightgreen";
         alert.innerHTML = `<div><strong> Success </strong> ,
        You have successfully deleted a new Note </div>`;
        setTimeout(() => {
            alert.innerHTML = "";
            // displayObj.clear();
        }, 4000);
    }
    else if (type == "success") {
        alert.style.background = "lightblue";
        alert.innerHTML = `<div><strong> Success </strong> ,
        You have successfully added a new Note </div>`;
        setTimeout(() => {
            alert.innerHTML = "";
            // displayObj.clear();
        }, 4000);
    }
}


// function to show elements from local storage
function showNotes() {
    let myNotes = localStorage.getItem(`myNotes`);
    if (myNotes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(myNotes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html +=
            `  <div class="noteCard">
                <div> <h3>Note ${index + 1}</h3>
                <h4> Title :- ${element[0]} </h4>
                <p>${element[1]}</p>
                </div>
                <button class="btn" id="${index}" onclick="deleteNote(this.id)">Delete Notes</button>
                </div>`

    });
    noteElem = document.getElementById(`myNotes`);
    if (notesObj.length != 0) {
        noteElem.innerHTML = html;
    }
    else {
        noteElem.innerHTML = "nothing to show , Add some notes";
    }
}


// function for delete a note 

function deleteNote(index) {
    console.log("i am deleting", index);
    let myNotes = localStorage.getItem(`myNotes`);
    if (myNotes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(myNotes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("myNotes", JSON.stringify(notesObj));
    show("delete");
    showNotes();
}


let search = document.getElementById(`search_box`);
let btnSearch = document.getElementById(`search`);
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    console.log("input event fired", inputVal);
    if (search.value != "") {
        let noteCards = document.getElementsByClassName(`noteCard`);
        Array.from(noteCards).forEach(function (element) {
            let cardText = element.getElementsByTagName("p")[0].innerText;
            let cardTitle = element.getElementsByTagName("h4")[0].innerText;

            btnSearch.addEventListener("click", function () {

                if (cardText.includes(inputVal) || cardTitle.includes(inputVal)) {
                    element.style.display = "block";
                }
                else {
                    element.style.display = "none";
                }
            });

        })
    }
    else { showNotes(); }
})
