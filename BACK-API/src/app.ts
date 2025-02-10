import express, { Application, Request, Response } from 'express';
import { router as beersRoutes } from './routes/beersRouter';
import { router as breweriesRoutes } from './routes/breweriesRouter';
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./docs/swagger";
import cors from 'cors';
import { pool } from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const version = 'v1';
const path = `/api/${version}`;

// Test de connexion à PostgreSQL
pool.connect()
  .then(() => console.log('Connecté à PostgreSQL'))
  .catch((err) => console.error('Erreur de connexion à PostgreSQL:', err));

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue à l\'API. Visitez /api-docs pour la documentation.');
});

app.use(`${path}/beers`, beersRoutes);
app.use(`${path}/breweries`, breweriesRoutes);
app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
