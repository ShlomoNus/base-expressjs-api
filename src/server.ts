import http from "http";

import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { json, urlencoded } from "express";
import userAgent from "express-useragent";
import helmet from "helmet";

const app = express();

export  function createServer(port: number): http.Server{
    app.use(helmet());
    app.use(userAgent.express());
    app.use(cors());
    app.use(cookieParser());
    app.use(compression());
    app.use(json());

    console.info("Express with Typescript!");
    app.use(urlencoded({ extended: false }));

    return http.createServer(app).listen(port, () => {
        console.info(`Express with Typescript! http://localhost:${port}`);
    });
}
