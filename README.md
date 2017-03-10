# Node + Express + create-react-app + flickrApi Boilerplate

TEste proyecto permite generar un arcoiris de imágenes basado en el API de Flickr

============
Instalación:
=============
```
git clone https://github.com/camiloforero/tecweb-parcial1-camilo.git myApp
cd myApp
echo "my_flickr_api_key" > server/api_key.txt
echo "my_flickr_api_secret" > server/api_secret.txt
npm install
```
You can [get your Flickr api key and secrets here](https://www.flickr.com/services/apps/create/)


Then compile the front-end into the build folder using

```
npm run build
```

And finally run the server
s
```
node server
```
And open [http://localhost:9000](http://localhost:9000)

[http://localhost:9000/flickr/query](http://localhost:9000/flickr/query) points to an endpoint that will return a JSON object with the Flickr results. For more information on the Flickr API check:
* The [Flickr API documentation](https://www.flickr.com/services/api/)
* The [flickrapi node module documentation](https://www.npmjs.com/package/flickrapi)
* And this [page that explains how to build the urls for the images](https://www.flickr.com/services/api/misc.urls.html)


This project was created following the instructions on [this great tutorial](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d#.34je0jd4l)


=========
Uso
=====

Se ingresa el término de búsqueda y se presiona el botón de enviar. Se generará el arcoiris de manera automática.

No hubo tiempo para implementar una función creativa en particular, aunque habría querido usar una librería de análisis de imágenes para escoger aquellas con el color más parecido al solicitado.
