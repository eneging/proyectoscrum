import World from "./img/planet.svg";
import Phone from "./img/phone.svg";
import Carta from "./img/carta.svg";
import Facebook from "./img/facebook.svg";
import Youtube from "./img/yutub.svg";
import Insta from "./img/insta.svg";

function Home() {
  return (
    <>
      <div className="bg-gray-800  text-white flex justify-around h-[12vh] w-screen items-center "></div>
      <main className=" h-screen bg-[url('https://www.unica.edu.pe/estilosweb/images/bg/bg2nuevo.jpg')]"></main>
      <div className="bg-white h-screen"></div>
      <div className=" bg-[#292828] flex p-2 ml-auto mr-auto justify-center items-center text-white">
        <div className="flex-1">
          <h3>Contactanos</h3>

          <div className="flex">
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src={World}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src={Phone}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src={Carta}
                alt=""
              />
            </div>
          </div>
          <h3 className="mt-2 ">Siganos</h3>
          <div className="flex">
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src={Facebook}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src={Youtube}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "25px", height: "25px" }}
                src={Insta}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <p>Contactar con el soporte del sitio</p>
          </div>
          <p>Usted se ha identificado como usuario</p>
          <a href="#">Cerrar Sesion</a>
          <a href="#">Resumen de retencion de datos</a>
          <br />
          <a href="#">Descargar la app para dispositivos moviles</a>
        </div>
        <div className="flex-1">
          <p>Descargar la app para dispositivos moviles</p>
        </div>
      </div>
      <footer className="h-[10vh] bg-orange-500  ">
        <div className="flex justify-around text-white ">
          <div className="flex gap-2">
            <div>(056) 284399</div>
            <div> LUN-VIE 8:00 a 15:30</div>
            <div> mesadepartes@unica.edu.pe</div>
          </div>

          <div className="flex gap-2">
            <div>Bolsa de Trabajo</div>|<div>Correos</div>|<div>Soporte</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
