# ETL Pipeline

This ETL (Extract, Transform, Load) pipeline is a Node.js application that processes and transforms data before storing it in a NoSQL MongoDB database. It is designed for scalable and efficient data management in modern applications. The data in "data.json" was data I scraped myself from ([text](https://vt.poi.cat/vtuber/ceres-fauna)) using JavaScript in chrome's devtools.

## Features
- **Extract**: Pulls data from various sources (e.g., APIs, files, or databases).
- **Transform**: Processes, cleans, and structures the extracted data.
- **Load**: Stores the processed data into a MongoDB database.

---

## Prerequisites

1. **Node.js**
   Ensure you have Node.js (version 16 or higher) installed on your system. You can download it from [Node.js](https://nodejs.org/).

2. **MongoDB**
   Install MongoDB and ensure it is running locally or accessible via a connection string.
   - Download and install MongoDB from [MongoDB](https://www.mongodb.com/try/download/community).
   - Alternatively, use a hosted MongoDB service (e.g., MongoDB Atlas).

3. **npm**
   npm (Node Package Manager) comes with Node.js. Use it to install dependencies.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/etl-pipeline.git
   cd etl-pipeline
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the project root with the following variables:
   ```env
   MONGO_URI=mongodb://localhost:27017/etl_database
   SOURCE_API_URL=https://api.example.com/data
   ```
   Replace `MONGO_URI` with your MongoDB connection string and `SOURCE_API_URL` with the API or data source URL.

---

## Usage

### Running the ETL Pipeline

1. Start the MongoDB server (if running locally):
   ```bash
   mongod
   ```

2. Run the ETL script:
   ```bash
   node index.js
   ```

   The script will:
   - Extract data from the source.
   - Transform the data as per the pipeline logic.
   - Load the processed data into the MongoDB database.

3. Verify the data in MongoDB:
   - Use a MongoDB GUI tool like [Compass](https://www.mongodb.com/products/compass).
   - Or access the database via the MongoDB shell:
     ```bash
     mongo
     use etl_database
     db.collection_name.find()
     ```
