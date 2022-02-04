const fs = require("fs");

const addNotes = function (title, body) {
  const notes = loadNotes();
  notes.push({
    title: title,
    body: body,
  });

  saveNotes(notes);
};
const removeNotes = function (title) {
  const notes = loadNotes();
  updatednotes = notes.filter(function (note) {
    if (note.title !== title) {
      return note;
    }
  });
  saveNotes(updatednotes);
};
const saveNotes = function (notes) {
  const jsonnotes = JSON.stringify(notes);
  fs.writeFileSync("appnotes.json", jsonnotes);
};
const loadNotes = function () {
  try {
    const readnotes = fs.readFileSync("appnotes.json");
    const data = readnotes.toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};
const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log("title:" + note.title);
    console.log("body:" + note.body);
    console.log("\n");
  });
};

module.exports = { addNotes, removeNotes, listNotes, readNotes };
