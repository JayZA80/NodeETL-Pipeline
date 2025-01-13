import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.mongoURL;
const client = new MongoClient(uri);

const LoadData = async (data) => {
    try {
        const database = client.db('videos');
        const info = database.collection('info');
        try {
            info.insertMany(data);
        } catch (e) {
            console.error(`Something went wrong when inserting data: ${e.message}`);
        }
    } catch (e) {
        console.error(`We couldn't connect to the database: ${e.message}`);
    }
}

export default LoadData;
