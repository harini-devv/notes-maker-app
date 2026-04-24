function getNotes() {
    return JSON.parse(localStorage.getItem("notes")) || [];
}

function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
    const notes = getNotes();
    const list = document.getElementById("notesList");
    list.innerHTML = "";

    notes.forEach((note, index) => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = note.subject + " : " + note.text;

        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = function () {
            deleteNote(index);
        };

        li.appendChild(span);
        li.appendChild(btn);
        list.appendChild(li);
    });
}

function addNote() {
    let subject = document.getElementById("subject").value;
    let noteText = document.getElementById("noteInput").value;

    if (subject === "" || noteText === "") return;

    const notes = getNotes();
    notes.push({ subject, text: noteText });
    saveNotes(notes);
    renderNotes();

    document.getElementById("subject").value = "";
    document.getElementById("noteInput").value = "";
}

function deleteNote(index) {
    const notes = getNotes();
    notes.splice(index, 1);
    saveNotes(notes);
    renderNotes();
}

window.onload = renderNotes;