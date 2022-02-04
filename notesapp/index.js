const { string, argv } = require("yargs");
const yargs = require("yargs");
const {
  addNotes,
  removeNotes,
  listNotes,
  readNotes,
} = require("./functionality");
// const {add,sub}=require("./mod1")
// console.log(add(2,3))
// console.log(sub(2,3))
// console.log("hello world");..
// console.log(yargs.argv);

yargs.command({
  command: "add",
  describe: "adding new note",
  handler: function (argv) {
    addNotes(argv.title, argv.body);
  },
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
});
yargs.command({
  command: "read",
  describe: "reading a note",
  handler: function () {
    readNotes();
  },
});
yargs.command({
  command: "list",
  describe: "listing the notes",
  handler: function () {
    listNotes();
  },
});
yargs.command({
  command: "remove",
  describe: "deleting a note",
  handler: function (argv) {
    removeNotes(argv.title);
  },
  builder: {
    title: {
      describe: "Note to be removed",
      demandOption: true,
      type: "string",
    },
  },
});
yargs.parse();
