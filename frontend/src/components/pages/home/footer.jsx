import Facebook from '../img/svg/facebook.svg'
import Instagram  from '../img/svg/insta.svg'
import YouTube  from '../img/svg/yutub.svg';
import Planet  from '../img/svg/planet.svg';
import Word2 from '../img/svg/word2.svg';
import Carta from '../img/svg/carta.svg';
import Phone from '../img/svg/phone.svg';

function Footer() {
  return (
   <>
     <div className=" bg-[#292828] flex p-10 ml-auto mr-auto justify-center items-center text-white">
        <div className="flex-1 ">
          <h3 className='text-xl'>Contactanos</h3>

          <div className="flex gap-3">
            <div>
              <img
                style={{ width: "35px", height: "35px" }}
                src={Facebook}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "35px", height: "35px" }}
                src={Instagram}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "35px", height: "35px" }}
                src={YouTube}
                alt=""
              />
            </div>
          </div>
          <h3 className="mt-2 text-xl">Siganos</h3>
          <div className="flex gap-3">
            <div>
              <img
                style={{ width: "35px", height: "35px" }}
                src={Planet}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "35px", height: "35px" }}
                src={Phone}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "35px", height: "35px" }}
                src={Word2}
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
  )
}

export default Footer