const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if theres an err, reject the Promise and send the error to the Promise's catch method
            if (err) {
                reject (err);
                return;
            }
            // if everything is well, resolve the Promise and send success message
            resolve ({
                ok: true,
                message: 'File created'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve("Style sheet copied successfully");
        });
    });
};
module.exports = { writeFile, copyFile};

// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };

// const sampleHtml = '<h1>Hello World</h1>';

// writeFile(sampleHtml)
// .then(response => {
//     console.log(response);
// })
// .catch(err =>
//     console.log(err));

// copyFile()
// .then(response => {
//     console.log(response);
// })
// .catch(err => {
//     console.log(err);
// });