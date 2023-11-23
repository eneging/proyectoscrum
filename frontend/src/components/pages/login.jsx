



export const Login = (props) => {

  function login() {
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');

    let email = inputEmail.value;
    let password = inputPassword.value;

    props.handleLogin(email,password);

    inputEmail.value = "";
    inputPassword.value = "";


  }


  return (
    
       <main className="flex bg-gradient-to-r from-orange-600 ">
    
<div className=" h-screen w-[45vw] flex">
<img className="object-none" src="https://img.freepik.com/foto-gratis/joven-nina-lectura-libro-texto_23-2147655985.jpg?w=996&t=st=1700764189~exp=1700764789~hmac=eaad096be5eb136b22d71574ee689e42c2be11650db608cf0f100e67d39b582d"></img>

</div>

    <div className="flex flex-col h-screen w-[55vw]   bg-white  ">



<div className=" flex flex-col p-[18vh] content-start items-center w-[40vw] h-screen">
    <div className="flex  w-[25vw] gap-5">
    
    <img  className="w-[5vw]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6G3iW4Ur14DPKXx427YVLoMAv83QjhgOIgZdzNO7Tm5M6meiVyRg3sMQlsHT35rptSIE&usqp=CAU"></img>  
      <h1 className="flex justify-center items-center font-serif font-bold text-2xl ">Universidad <br></br>del  Atlantico</h1>
    
    </div>
      <div className="flex flex-col h-[200px] w-[320px] bg-white items-center" >
        <div className="flex flex-col gap-y-5 items-start justify-center pt-10 ">
          <h2 className="text-2xl" >Ingresa a tu Cuenta</h2>
          
          <div className="flex justify-center items-center border-[1px] border-gray-400">
            <input id="email" className=" w-[25vw] h-[7vh] pl-4 text-sm rounded  border-[1px] border-gray-400 border-solid " type="email" placeholder="Correo" />
          {/*  <span className="material-symbols-outlined pr-1 text-gray-400">
              mail
            </span> */}
          </div>
          <div >
            <input id="password" type="password" className="w-[25vw] h-[7vh] pl-4 rounded text-sm  border-[1px] border-gray-400 border-solid " placeholder="Contraseña" name="contrasena"/>
           {/*  <span className="material-symbols-outlined  pr-1 text-gray-400 ">
            lock </span>*/}
             
          </div>

        </div>

        <div className="pt-10 ">
          <button className="w-[25vw] h-[7vh] bg-gray-800 text-white rounded     "  onClick={login}>Ingresar</button>
        </div>
<div className="pt-7 w-[25vw] ">

  <p>olvidaste tu contraseña?</p>
</div>


      </div>

      </div>
      </div>



    </main>
  )
}
