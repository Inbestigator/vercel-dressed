import { createHandlers, createServer } from "@dressed/dressed/server";
import { commandData, componentData, config } from "./bot.gen";

const { runCommand, runComponent } = createHandlers(commandData, componentData);
const app = createServer(runCommand, runComponent, config);

export default async (req: Request, res: Response) => {
    await app.ready();
    return app.server.emit("request", req, res);
};
