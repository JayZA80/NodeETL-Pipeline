import fs from 'node:fs';

const readJSON = (file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(`We couldn't open the file: ${err.message}`);
        } else {
            if (data === null) {
                console.log('There was nothing there.');
            } else {
                return data;
            }
        }
    });
}

export default readJSON
