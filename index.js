const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT || 4000;
app.use(cors()) 
app.get('/', async (req, res) => {
    try {
        const response = await axios.get("https://api.openweathermap.org/data/3.0/onecall", {
            params: {
                lat: 11.0645301,
                lon: 76.0240333,
                appid: process.env.api_key
            }
        });
        console.log(response.data); // Logging the response data for debugging
        res.status(200).json(response.data); // Sending the API response back to the client
    } catch (error) {
        console.error(error); // Logging the error for debugging
        res.status(500).json({ error: "Unable to fetch weather data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port number ${PORT}...`);
});
