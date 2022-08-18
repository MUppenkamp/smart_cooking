// @ts-ignore
declare function require(name: string);
// This must be there because of Typescript

const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
