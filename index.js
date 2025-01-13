import ExtractData from "./etlFunctions/ExtractData.js";
import CleanData from "./etlFunctions/CleanData.js";
import LoadData from "./etlFunctions/LoadData.js";
import dotenv from 'dotenv';
dotenv.config();

(async function() {
    const [jsonData, apiData] = await ExtractData();
    let combinedData = await CleanData(apiData, jsonData);
    LoadData(combinedData);

})();
