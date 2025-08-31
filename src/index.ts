import { Server } from 'http';
import { CONFIG } from './config';
import { createServer } from './server';

const port = CONFIG.Port || 3000;
const server = createServer(port);

run(server).catch(err => {
    console.error(err);
});
async function gracefulShutdown(serverInstance: Server) {
    try {
        console.info('Closing HTTP server...');
        await serverInstance.close();

        await new Promise(resolve => {
            setTimeout(resolve, 500);
        });

        console.info('Server shut down gracefully.');
    } catch (error) {
        console.error('Error during graceful shutdown:', error);
    }
}

async function run(httpServer: Server) {

    console.log(`Server listening on port ${port}`);

    process.on('SIGTERM', () => {
        void (async () => {
            try {
                console.log('Received SIGTERM signal, shutting down gracefully...');
                await gracefulShutdown(httpServer);
            } catch (error) {
                console.error(error);
            }
        })();
    });

    process.on('SIGINT', () => {
        void (async () => {
            try {
                console.log('Received SIGTERM signal, shutting down gracefully...');
                await gracefulShutdown(httpServer);
            } catch (error) {
                console.error(error);
            }
        })();
    });


}



