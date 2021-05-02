
import { createServer, proxy } from 'aws-serverless-express';
import { Context } from 'aws-lambda';
import { App } from './app';

const app = App();
const server = createServer(app);

export const index = (event: any, context: Context) => proxy(server, event, context);