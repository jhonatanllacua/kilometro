
export default function Home() {
  return (
    <>
            <title>Kilometro 69</title>
        <link rel="stylesheet" href="/style.css" />
    <body>
        
    <center>
       
    <div class="container" id="container">
      
      <div class="book-content">
          <div class="book">
              <div class="face-front" id="portada"></div>
              <div class="face-back" id="trsf">
                  <img class="imach1" src="/img/carta_uno.png" width="425" loading="lazy"/>
              </div>
          </div>

          <div class="book">
              <div class="face-front">
                  <img class="imach" src="/img/carta_dos.png" width="425" loading="lazy"/>
              </div>
              <div class="face-back">
                  <img class="imach1" src="/img/carta_tres.png" width="425" loading="lazy"/>
               </div>
          </div>

          <div class="book">
              <div class="face-front">
                  <img class="imach" src="/img/carta_cuatro.png" width="425" loading="lazy"/>
              </div>
              <div class="face-back">
                  <img class="imach1" src="/img/carta_cinco.png" width="425" loading="lazy"/>
               </div>
          </div>

          <div class="book">
              <div class="face-front">
                  <img class="imach" src="/img/carta_seis.png" width="425" loading="lazy"/>
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
