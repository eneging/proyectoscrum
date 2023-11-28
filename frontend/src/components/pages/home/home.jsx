
import Noticias from "./noticias";
import Card from "./cards";
import Footer from "./footer";
import Calendario from "./calendario";
import DatosCard from "./DatosCard";

function Home() {
  return (
    <>
      <div className="bg-gray-800 text-white flex justify-around h-[10vh] w-screen items-center"></div>
      <main className="h-cover bg-[url('https://www.unica.edu.pe/estilosweb/images/bg/bg2nuevo.jpg')] bg-cover bg-center p-0 relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <Noticias></Noticias>
        <div className="flex grow gap-3">
          <DatosCard></DatosCard>
        </div>
        <div>
          <Calendario></Calendario>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Home;
