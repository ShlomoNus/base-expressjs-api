import { loadEnvFiles } from '@utils/vars';
import { cleanEnv, str, url, num } from 'envalid';

loadEnvFiles();

export const CONFIG = cleanEnv(process.env, {
  
});
