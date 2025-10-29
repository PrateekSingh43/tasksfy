import pino from "pino";
import pinoHttp from "pino-http";
import type { ServerResponse, IncomingMessage } from "http";

const isDevelopment = process.env.NODE_ENV !== "production";

const pinoOptions: pino.LoggerOptions = {
  level: isDevelopment ? "debug" : "info",
  ...(isDevelopment && {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
      },
    },
  }),
};

export const logger = pino(pinoOptions);

export const httpLogger = pinoHttp({
  logger,
  customLogLevel: (req: IncomingMessage, res: ServerResponse, err?: Error) => {
    if (res.statusCode >= 400 && res.statusCode < 500) return "warn";
    if (res.statusCode >= 500 || err) return "error";
    if (res.statusCode >= 300 && res.statusCode < 400) return "silent";
    return "info";
  },
});
