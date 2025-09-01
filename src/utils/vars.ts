import { join } from "path";

import dotenv from "dotenv";

import { mainDirectory } from "./path";

function loadEnvFiles() {
    const envPath = join(mainDirectory, `.env.${process.env.NODE_ENV}`);

    dotenv.config({ path: envPath });
    dotenv.config();
}

export { loadEnvFiles };
