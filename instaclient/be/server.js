import { createServer } from "http"
import data from "./data/cars_full.json" assert { type: 'json' };

createServer(async (req, res) => {



    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PATCH, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    switch (req.method) {

        case "GET":
            if (req.url == "/api/cars") {

                res.writeHead(200, {
                    "Content-Type": "application/json;charset=utf-8",
                });
                res.end(JSON.stringify(data))
            }
            break
    }


}).listen(3000, () => { console.log("runnnin on 3000 "); })