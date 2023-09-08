document.addEventListener('DOMContentLoaded', () => {
    const titleInput = document.createElement('input');
    titleInput.placeholder = 'Note';

    const noteTextArea = document.createElement('textarea');
    noteTextArea.placeholder = 'Note Content';

    const noteButton = document.createElement('button');
    noteButton.textContent = 'Add Note';

    const noteList = document.getElementById('noteList');

    let notes = JSON.parse(localStorage.getItem('notes'));

    function saveNotes() {
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    function addNote() {
        const title = titleInput.value;
        const content = noteTextArea.value;
        const note = { title, content };
        notes.push(note);
        titleInput.value = '';
        noteTextArea.value = '';
    }
    function displayNotes() {
        noteList.innerHTML = '';
        notes.forEach((note, index) => {
            const noteElement = document.createElement('div');
            noteElement.className = 'note';
            noteElement.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
            `;
            noteList.appendChild(noteElement);
        });
    }
    noteButton.addEventListener('click', addNote);
    const notesContainer = document.getElementById('notes-container');
    notesContainer.append(titleInput, noteTextArea, noteButton);
    displayNotes();
});
