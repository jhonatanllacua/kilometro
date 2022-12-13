import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <> 
       <Head>
        <title>Kilometro 69</title>
        <link rel="shortcut icon" href="icons.ico">
        <link rel="stylesheet" href="/style.css" />
        <meta name="theme-color" content="#000"/>
         <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Kilometro 69" />
    <meta property="og:description" content="Ofrecemos los mejores platillos de gran selección, como también bebidas unicas" />
    <meta property="og:url" content="..." />
    <meta property="og:site_name" content="Facemash - Who is so beauty" />
    <meta property="og:image" content="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    <meta property="og:image:width" content="640"/>
    <meta property="og:image:height" content="300"/>
    <meta name="description" content="A la hora de escribir una meta descripción, manténla entre 140 y 160 caracteres para que Google pueda mostrar tu mensaje completo. ¡No olvides incluir tu palabra clave!"/>
    <meta name="keywords" content="kilometro69 restobar comida" />
    <meta name="Autor" content="citeO" />
  <meta name="robots" content="index,follow" />
      </Head>


    <body>
        
    <center>
       
    <div class="container" id="container">
      
      
          <div class="book-content">
          <div class="book">
              <div class="face-front" id="portada"></div>
              <div class="face-back" id="trsf">
                  <img class="imach1" src="/img/promocion.jpg" width="425" loading="lazy"/>
              </div>
          </div>
      
      
      
      
      <div class="book-content">
          <div class="book">
              <div class="face-front" id="portada"></div>
              <div class="face-back" id="trsf">
                  <img class="imach1" src="/img/carta_uno.jpg" width="425" loading="lazy"/>
              </div>
          </div>
        
        
          <div class="book">
              <div class="face-front">
                  <img class="imach" src="/img/carta_dos.jpg" width="425" loading="lazy"/>
              </div>
              <div class="face-back">
                  <img class="imach1" src="/img/carta_tres.jpg" width="425" loading="lazy"/>
               </div>
          </div>

          <div class="book">
              <div class="face-front">
                  <img class="imach" src="/img/carta_cuatro.jpg" width="425" loading="lazy"/>
              </div>
              <div class="face-back">
                  <img class="imach1" src="/img/carta_cinco.jpg" width="425" loading="lazy"/>
               </div>
          </div>

          <div class="book">
              <div class="face-front">
                  <img class="imach" src="/img/carta_seis.jpg" width="425" loading="lazy"/>
              </div>
              <div class="face-back" id="portada-back">
              </div>
          </div>
        
        
         <div class="book">
              <div class="face-front">
                  <img class="imach" src="/img/carta_siete.jpg" width="425" loading="lazy"/>
              </div>
              <div class="face-back" id="portada-back">
              </div>
          </div>
        
        
      </div>
  </div>
  </center>

  </body>
    </>
  );
}
