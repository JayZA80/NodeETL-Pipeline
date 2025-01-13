import ExtractData from "./ExtractData.js";

const CombineData = (dataSet1, dataSet2) => {
    try {
        const map1 = new Map();
        dataSet2.forEach(video => {
            map1.set(video.Title, video.CCV);
        });
    
        dataSet1.forEach(entry => {
            if (map1.has(entry.title)) {
                entry.maxCCV = map1.get(entry.title);
            }
    
            // format stream duration to hh:mm:ss
            entry.duration = timeConversion(entry.duration);
    
            // publish these dates in yyy-mm-dd format if it has a published date
            // These operations are pretty similar, possible DRY.
            if (entry.published_at !== undefined) {
                entry.published_at = entry.published_at.substring(0, 10);
            } else {
                // Not every video was made available to the public
                entry.published_at = `The video "${entry.title}" wasn't published.`;
            }
            if (entry.available_at !== undefined) {
                entry.available_at = entry.available_at.substring(0, 10);
            } else {
                entry.available_at = `The video "${entry.title}" wasn't published.`;
            }
            
        });
    
        return dataSet1;
    } catch (e) {
        console.error(`Something went wrong when trying to combine the data: ${e.message}`);
    }

}

const timeConversion = (time) => {
    let duration = time;
    try {
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        while (duration > 0) {
            if (duration < 60) {
                seconds = duration;
                duration -= seconds;
            } else if (duration < 3600) {
                minutes++;
                duration -= 60;
            } else {
                hours++;
                duration -= 3600;
            }
        }
        return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
    } catch (e) {
        console.error(`There was an issue converting the duration to standard time format: ${e.message}`);
    }
}

(async function() {
    const [jsonData, apiData] = await ExtractData();
    let combinedData = await CombineData(apiData, jsonData);
    console.log(typeof combinedData);
})();
