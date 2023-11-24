<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Estudiante;
class EstudianteController extends Controller
{
    public function index()
    {
        $estudiantes = Estudiante::all();
        return $estudiantes;
    }

    public function create()
    {
        return view('estudiantes.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'apellido' => 'required',
            'dni' => 'required',
            'direccion' => 'required',
            'correo' => 'required',
            'telefono' => 'required',
            
        ]);
        $estudiante= new Estudiante();
        $estudiante->nombre= $request->nombre;
        $estudiante->apellido= $request->apellido;
        $estudiante->dni= $request->dni;
        $estudiante->direccion= $request->direccion;
        $estudiante->correo= $request->correo;
        $estudiante->telefono= $request->telefono;
        $estudiante->save();
        return  'Estudiante creado exitosamente.';
    }

    public function show($id)
    {
        $estudiante = Estudiante::findOrFail($id);
        return view('estudiantes.show', compact('estudiante'));
    }

    public function edit($id)
    {
        $estudiante = Estudiante::findOrFail($id);
        return view('estudiantes.edit', compact('estudiante'));
    }

    public function update(Request $request, $id)
    {
           $estudiante = Estudiante::find($id);

        $estudiante->nombre=$request->nombre;
        $estudiante->apellido=$request->apellido;
        $estudiante->correo=$request->correo;
   
        $estudiante->save();

        return 'Estudiante actualizado exitosamente';
    }

    public function destroy($id)
    {
        $estudiante = Estudiante::findOrFail($id);
        $estudiante->delete();

        return  'Estudiante eliminado exitosamente';
    }
}