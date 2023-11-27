





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
    <>

   
       <main className="flex h-screen bg-cover p-[15rem] justify-center items-center bg-[url(https://img.freepik.com/foto-gratis/textura-pared-estuco-azul-marino-relieve-decorativo-abstracto-grunge-fondo-color-rugoso-gran-angular_1258-28311.jpg?w=900&t=st=1700849549~exp=1700850149~hmac=f4f620ca9646080683cf1b27a1251f66ee3f19ff8588b7fe787daffaba989653)]">
    
  
    <div className="flex  justify-center items-center w-[60vw] h-[60vh] bg-white rounded-xl ">

<div className=" flex flex-col content-center items-center w-[30vw] h-[52vh] border-2 border-white border-r-gray-300 border-solid ">
    <div className="flex  w-[25vw]  ">
    
    <img  className="w-[30vw] " src="https://www.estudiantefunval.org/pluginfile.php/1/theme_moove/logo/1696433166/logo%202023.png"></img>  
     
    
    </div>
      <div className="flex flex-col h-[200px] w-[320px] bg-white items-center" >
        <div className="flex flex-col gap-y-3 items-start justify-center pt-7 ">
       
          
          <div className="flex justify-center items-center border-[1px] border-gray-400">

            <input id="email" className=" w-[25vw] h-[7vh] pl-4 text-sm rounded-[0.5rem]   border-[1px] border-gray-400 border-solid " type="email" placeholder="Correo" />
          {/*  <span className="material-symbols-outlined pr-1 text-gray-400">

              mail
            </span> */}
          </div>
          <div >

            <input id="password" type="password" className="w-[25vw] h-[7vh] pl-4 rounded-[0.5rem]  text-sm  border-[1px] border-gray-400 border-solid " placeholder="Contraseña" name="contrasena"/>
           {/*  <span className="material-symbols-outlined  pr-1 text-gray-400 ">
            lock </span>*/}
             

          </div>

        </div>

        <div className="pt-4 ">

          <button className="w-[25vw] h-[7vh] bg-blue-800 text-white rounded-[0.5rem]      "  onClick={login}>Ingresar</button>

        </div>
<div className="pt-3 w-[25vw] ">

  <p className="text-blue-700">olvidaste tu contraseña?</p>
</div>


      </div>

      </div>

      <div className=" w-[30vw] h-cover flex justify-center items-center "> otro background</div>
      
      </div>

   

    </main>
    </>
  )
}
