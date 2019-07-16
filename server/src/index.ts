import express, {Application} from 'express';
import indexRotes from './routes/indexRoutes';
import peopleRoutes from './routes/peopleRoutes';
import nextRouters from './routes/NextRouters';
import morgan from 'morgan';
import cors from 'cors';

class Server {
    public app: Application;
    constructor() {
        this. app = express();
        this.config();
        this.routes();
    }

    config(): void {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/api',indexRotes);
        this.app.use('/api/people',peopleRoutes);
        this.app.use('/api/next',nextRouters);
        
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();