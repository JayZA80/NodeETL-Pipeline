import fs from 'node:fs';

async function ExtractData() {
    let videos = [];
    let offset = 0;
    // The readFile call returns a string so we convert it to JSON
    const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8', (e, d) => {
        if (e) {
            console.error(`We couldn't open the file: ${e.message}`);
        } else {
            if (d === null) {
                console.log('There was nothing there.');
            } else {
                return d;
            }
        }
    }));
    try {
        // Using recursion caused an HTTP Error 429, so I used a loop-based iterative solution
        while (true) {
            const response = await fetch('https://holodex.net/api/v2/videos?channel_id=UCO_aKKYxn4tvrqPjcTzZ6EQ&limit=50&offset=' + offset, {
                headers: {
                    // 'X-APIKEY': *API KEY*
                },
                mode: 'cors'
            });
            const data = await response.json();
            videos.push(...data);
            if (data.length < 50) {
                break;
            }
            offset += 50;
        }
    } catch (error) {
        console.error('Failed to fetch the data: ', error.message);
    }
    // Return both extracted data. Must be accessed with array destructuring
    return [jsonData, videos]
}

export default ExtractData;
