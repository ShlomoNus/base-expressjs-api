import { loadEnvFiles } from "@utils/vars";
import { cleanEnv, str, num } from "envalid";

loadEnvFiles();

export const CONFIG = cleanEnv(process.env, {
    Port: num({ devDefault: 5050 }),
    Secret: str({ devDefault: "12345" })
});
