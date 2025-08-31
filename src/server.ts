import http from 'http';
import express, { json, urlencoded } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import 'express-async-errors';
import userAgent from 'express-useragent';
import cookieParser from 'cookie-parser';

const app = express();

export  function createServer(port: number): http.Server{
        app.use(helmet());
        app.use(userAgent.express());
        app.use(cors());
        app.use(cookieParser());
        app.use(compression());
        app.use(json());

        app.use(urlencoded({ extended: false }));

        return http.createServer(app).listen(port, () => {
            console.info(`Express with Typescript! http://localhost:${port}`);
        });

}
