import React from "react";

function editar() {
  return (
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px] bg-white">
        <form>
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="phone"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Telefono
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button class="hover:shadow-form w-full rounded-md bg-gray-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default editar;
