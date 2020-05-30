import Express from 'express';
import { loadControllers, scopePerRequest } from 'awilix-express'
import container from './Infra/Ioc/DependencyResolver';

const app = Express();

app.use(scopePerRequest(container))

app.use(loadControllers('Controllers/*.ts', { cwd: __dirname }));

app.listen(3000);