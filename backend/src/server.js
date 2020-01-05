import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import getNameController from './controllers/getNameController';

const start = () => {
  const port = 8050;
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  app.get('/getName', getNameController);

  app.listen(port, () => {
    console.log(`Server started`);
  });
};
export default { start };
