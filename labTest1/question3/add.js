// Q3
// Negin Heidari, ID: 101369421

const fs = require("fs");
const path = require("path");

const createLogs = () => {
  const logsPath = path.join(__dirname, "Logs");
  if (!fs.existsSync(logsPath)) {
    fs.mkdirSync(logsPath);
  }
  process.chdir(logsPath);
  for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, "some text");
    console.log("File created: ", fileName);
  }
};

createLogs();
