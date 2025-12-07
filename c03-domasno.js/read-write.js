const fs = require ("fs");

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const writeFile = (fileName,data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(FileName, data ,(err) => {
            if (err) reject (err);
            resolve();
        });
    });
}

function appendFile(file, data) {
  return new Promise((resolve, reject) => {
    fs.appendFile(file, data, (err) => {
      if (err) reject(err);
      else resolve("append done");
    });
  });
}

module.exports = { readFile, writeFile, appendFile };