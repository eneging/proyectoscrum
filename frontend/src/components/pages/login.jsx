import React from 'react'

export const Login = () => {
  return (
    
       <main class="h-screen flex flex-col items-center bg-gray-300 pt-20">
    
    <div class="flex flex-col h-[300px] w-[420px] bg-white rounded-lg items-center">
      <form class="flex flex-col h-[200px] w-[320px] bg-white items-center" action="/home">
        <div class="flex flex-col gap-y-5 items-center justify-center pt-10 ">
          <h2 >Bienvenido,
             ingresa tu usuario y contraseña</h2>
          
          <div class="flex justify-center items-center border-[1px] border-gray-400">
            <input class=" w-[250px] h-[30px] pl-4 text-sm  border-[1px] border-gray-400 " type="email" placeholder="Usuario" />
            <span class="material-symbols-outlined pr-1 text-gray-400">
              mail
            </span>
          </div>
          <div >
            <input type="password" class="w-[250px] h-[30px] pl-4 text-sm  border-2 border-gray-400" placeholder="Contraseña" name="contrasena"/>
            <span class="material-symbols-outlined  pr-1 text-gray-400 ">
              lock
            </span>
          </div>

        </div>

        <div class="pt-10 ">
          <button class="w-[100px] h-[30px] bg-gray-800 text-white   rounded-md  " type="submit">Ingresar</button>
        </div>
      </form>
      </div>
    </main>
  )
}
