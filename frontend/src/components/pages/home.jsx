import React, { useState } from "react";
import Noticias from "./noticias";
import Card from "./cards";
import Footer from "./footer";
import Calendario from "./calendario";

function Home() {
 
  return (
    <>
      <div className="bg-gray-800  text-white flex justify-around h-[12vh] w-screen items-center "></div>
      <main className=" h-screen bg-[url('https://www.unica.edu.pe/estilosweb/images/bg/bg2nuevo.jpg')]">

        <Noticias></Noticias>
        <div className="flex grow gap-3">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        
       
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
