



export const Login = () => {
  return (
    
       <main className="h-screen flex flex-col items-center bg-gray-300 pt-20">
    
    <div className="flex flex-col h-[300px] w-[420px] bg-white rounded-lg items-center">
      <form className="flex flex-col h-[200px] w-[320px] bg-white items-center" >
        <div className="flex flex-col gap-y-5 items-center justify-center pt-10 ">
          <h2 >Bienvenido,
             ingresa tu usuario y contraseña</h2>
          
          <div className="flex justify-center items-center border-[1px] border-gray-400">
            <input className=" w-[250px] h-[30px] pl-4 text-sm  border-[1px] border-gray-400 " type="email" placeholder="Usuario" />
            <span className="material-symbols-outlined pr-1 text-gray-400">
              mail
            </span>
          </div>
          <div >
            <input type="password" className="w-[250px] h-[30px] pl-4 text-sm  border-2 border-gray-400" placeholder="Contraseña" name="contrasena"/>
            <span className="material-symbols-outlined  pr-1 text-gray-400 ">
              lock
            </span>
          </div>

        </div>

        <div className="pt-10 ">
          <button className="w-[100px] h-[30px] bg-gray-800 text-white   rounded-md  " type="submit">Ingresar</button>
        </div>
      </form>
      </div>
    </main>
  )
}
