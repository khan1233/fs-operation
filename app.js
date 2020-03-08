const fs = require('fs');
var argv = require('yargs').argv;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var dir = './uploads';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

// console.log(process.argv);
// var myData = process.argv[2];

rl.question('Enter File Name please:\nFilename:', (answer) => {
    //Log the filename in a fileNames.txt in JSON format

    var myData = [];
    myData.push(JSON.stringify(answer));
    fs.appendFile('./uploads/fileNames.txt', `${myData},`, (err) => {
        if (answer == '') {
            console.log("No File name please enter file name to process");
            // } else if (JSON.parse(myData) == answer) {
            //     console.log("File Presnt enter different file")
        } else {
            // fs.writeFile('./uploads/newFile', `${myData},`, (err) => {
            console.log("New file added");
            // })
        }
        // Update the dataFile.txt with You are Awesome!
        fs.appendFile('./uploads/dataFile.txt', 'You are Awesome! \n', (err) => {
                if (err) {
                    console.log("No data added");
                } else {
                    console.log("Data Added")
                }
            })
            // fs.unlink('./uploads/newFile', (err) => {
            //     console.log("File Removed")
            // })
    })
    rl.close();
})