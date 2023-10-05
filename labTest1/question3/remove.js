// Q3
// Negin Heidari, ID: 101369421

const fs = require("fs");
const path = require("path");

const removeLogs = () => {
  const logsPath = path.join(__dirname, "Logs");
  if (fs.existsSync(logsPath)) {
    const files = fs.readdirSync(logsPath);
    console.log("Files to delete: ", files);
    files.forEach((file) => {
      fs.unlinkSync(path.join(logsPath, file));
    });
    fs.rmdirSync(logsPath);
  }
};

removeLogs();

