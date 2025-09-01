import fs from "fs";
import path from "path";

import inquirer from "inquirer";

import { mainDirectory } from "./path";
import { convertToError } from "./types";

const generateRouteFile = async() => {
    try {
        const { givenName } = await inquirer.prompt<{ givenName: string }>([
            {
                type: "input",
                name: "givenName",
                message: "Enter the name for the route:",
                validate: input => (input ? true : "Name cannot be empty")
            }
        ]);

        const dirPath = path.join(mainDirectory, "src", "routes", givenName);
        const filePath = path.join(dirPath, `${givenName}.ts`);

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        const fileContent = `
import { applyRoutes } from '@utils/backend';
import { Router } from 'express';
import { Route } from 'shen-types';

const ${givenName}Router = Router();

export const routes: Route[] = [];

applyRoutes({ app: ${givenName}Router, routes });

export { ${givenName}Router };
    `.trim();

        fs.writeFileSync(filePath, fileContent, "utf8");
        console.info(`Route file created: ${filePath}`);
    } catch(error: unknown) {
        const typedError = convertToError(error);

        console.error("Error creating route file:", typedError.message);
    }
};

generateRouteFile().catch(err => console.error(err));
