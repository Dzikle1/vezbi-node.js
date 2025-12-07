

const {readFile, writeFile, appendFile} = require("./index.js");

const main = async() => {
    try {
        await writeFile("text.txt", "Sara Popova");
        const read1 = await readFile ("text.txt");
        console.log("Read 2:", read1);

        await appendFile("text.txt", "Ana Stojkova");
        const read2 = await readFile("text.txt");
        console.log("Read 2:", read2);
    } catch (error) {
        console.log("Error:", error);
    }
 };
 main();



        

