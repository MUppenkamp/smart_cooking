// @ts-ignore
const express = require('express');
// @ts-ignore
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
