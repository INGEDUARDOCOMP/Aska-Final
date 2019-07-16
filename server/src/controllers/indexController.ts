import { Request, Response} from 'express';

class IndexController {
    public index(req: Request, res: Response) {
        res.send('{"text":"API Is /api/people"}') 
    }
}

export const indexController  = new IndexController();