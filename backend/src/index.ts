import http from "http";
import dotenv from "dotenv";
dotenv.config();

import { createApp } from "./app.js";
import { initSocket } from "./sockets/socket.js";
import { startWorker } from "./workers/worker.js";

const PORT = Number(process.env.PORT || 4000);

async function start() {
    const app = createApp();
    const server = http.createServer(app);

    // init socket and listen for connections
    const io = initSocket(server);

    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });

    // start worker in same process for dev/demo; in prod workers usually run separately
    startWorker();
}

start().catch((err) => {
    console.error("Failed to start server", err);
    process.exit(1);
});