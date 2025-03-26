const fs = require('fs');


function countWordOccurrences(content, word) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi'); 
  const matches = content.match(regex);
  return matches ? matches.length : 0;
}


function countWordInFile(filePath, word) {


  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }


    const count = countWordOccurrences(data, word);
    console.log(`The word "${word}" occurs ${count} time(s) in the file.`);
  });
}


const wordToCount = 'hello'; 
countWordInFile("file1.txt", wordToCount);

