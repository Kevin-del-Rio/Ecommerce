# Kevin del Río

Ecommerce de cuadros personalizados creado con ReactJs, HTML5, CSS3, Firestone
nombre "La Cuadreria"

## Ejecucion Local
```bash
$ git clone https://github.com/Kevin-del-Rio/Ecommerce.git
$ cd Ecommerce
$ npm install
- configurar el archivo .env (dejo un .env.example como ejemplo)
$ npm start
```
## Configuracion de Firebase
```bash
- deben haber 2 colecciones:
 categories y products
```
## categories:
- label - string
- slug  - string
- order - numerico 

## products:
- category - string
- descripcion  - string
- img - string
- name - string
- price - numerico
- stock - nuemerico

## Contruido Usando
- [Create-React-App](https://create-react-app.dev/)
- [Vercel](https://vercel.com)
- [Firebase](https://firebase.com)

## Test App 

[Deploy]https://ecommerce-kdelrio21.vercel.app/