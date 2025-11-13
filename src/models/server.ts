import express, { Application } from 'express';
import routesPersonas from '../routes/persona.routes';
import connection from '../db/connection';
import cors from 'cors';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '4000';
    this.middlewares();
    this.routes();
    this.conectarDB();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Aplicacion corriendo por el puerto ', this.port);
    });
  }

  middlewares() {
    // Configuración específica de CORS para permitir Angular local
    this.app.use(cors({
      origin: 'http://localhost:4200',
      credentials: true // Si vas a usar cookies/sessions, si no, puedes quitar esta línea
    }));

    // Parseo del body
    this.app.use(express.json());
  }

  routes() {
    // Registrar la ruta base
    this.app.use('/api/personas', routesPersonas);
  }

  conectarDB() {
    connection.connect((err) => {
      if (err) throw err;
      console.log('Conectado a la base de datos');
    });
  }
}

export default Server;
