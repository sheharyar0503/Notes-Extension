let notes = [];
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const notesList = document.getElementById("notes-list");
const myNotes = JSON.parse(localStorage.getItem("notes"));

if (myNotes) {
  notes = myNotes;
  render(notes);
}

function render(notes) {
  let list = "";
  for (let i = 0; i < notes.length; i++) {
    list += `<li> ${notes[i]} </li>`;
  }

  notesList.innerHTML = list;
}

addBtn.addEventListener("click", function () {
  notes.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("notes", JSON.stringify(notes));
  render(notes);
});

deleteBtn.addEventListener("click", function () {
  notes = [];
  localStorage.clear();
  render(notes);
});
