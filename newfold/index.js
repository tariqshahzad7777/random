const { string, argv } = require("yargs");
const yargs = require("yargs");
// const {add,sub}=require("./mod1")
// console.log(add(2,3))
// console.log(sub(2,3))
// console.log("hello world");
// console.log(yargs.argv);

yargs.command({
  command: "add",
  describe: "adding new note",
  handler: function (argv) {
    console.log("The title is:" + argv.title);
    console.log("The body is:" + argv.body);
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
    console.log("The notes are being read");
  },
});
yargs.command({
  command: "list",
  describe: "listing the notes",
  handler: function () {
    console.log("the notes are listed");
  },
});
yargs.command({
  command: "delete",
  describe: "deleting a note",
  handler: function () {
    console.log("the note is deleted");
  },
});
yargs.parse();
