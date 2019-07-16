import {Router} from 'express';

class NextRoutes {
    public router: Router =  Router();
    constructor() {
      this.config();
      this.nextone();
    }

    config(): void {
  }
 nextone(): void {
    const request = require('request-promise');
    const RUTA = 'https://swapi.co/api/people/?page=3';
    request({
      uri: RUTA,
      method: 'GET',
      json: true, // Para que lo decodifique automáticamente 
  }).then(Peoples => {
          this.router.get('/', (req, res) => {
              res.send(Peoples);
              });
  });  
 }
  
}

 const nextRoutes = new NextRoutes();
 export default nextRoutes.router;