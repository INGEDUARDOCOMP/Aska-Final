import {Router} from 'express';

class PeopleRoutes {
    public router: Router =  Router();
    constructor() {
      this.config();
    }

    config(): void {
      const request = require('request-promise');
      const RUTA = 'https://swapi.co/api/people';
      request({
        uri: RUTA,
        json: true, // Para que lo decodifique automáticamente 
    }).then(Peoples => {
            this.router.get('/', (req, res) => {
                res.send(Peoples);
                });
    });  
  }
}

 const peopleRoutes = new PeopleRoutes();
 export default peopleRoutes.router;