import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb://dhruvinchawda:filesharing@ac-j4omgof-shard-00-00.hstzrqm.mongodb.net:27017,ac-j4omgof-shard-00-01.hstzrqm.mongodb.net:27017,ac-j4omgof-shard-00-02.hstzrqm.mongodb.net:27017/?ssl=true&replicaSet=atlas-vvlt8y-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;