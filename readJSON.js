import fs from 'node:fs';

const readJSON = fs.readFile('data.json', 'utf8', (e, d) => {
    if (e) {
        console.error(`We couldn't open the file: ${e.message}`);
    } else {
        if (d === null) {
            console.log('There was nothing there.');
        } else {
            return d;
        }
    }
});

export default readJSON
