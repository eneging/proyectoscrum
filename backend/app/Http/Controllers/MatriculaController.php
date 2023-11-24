<?php

namespace App\Http\Controllers;

use App\Models\Estudiante;
use App\Models\Matricula;
use Illuminate\Http\Request;

class MatriculaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      
        return Matricula::join('estudiantes' ,'matriculas.estudiante_id', '=', 'estudiantes.estudiante_id')
        ->join('carreras', 'matriculas.carrera_id','=', 'carreras.carrera_id')
        ->select('matriculas.id', 'estudiantes.nombre', 'carreras.nombre as carrera_nombre' ,'matriculas.estudiante_id','matriculas.nivel_id', 'matriculas.grupo_id', 'matriculas.nivel_id', 'matriculas.carrera_id')
      ->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $matricula = new Matricula();
        $matricula->grupo_id = $request->grupo_id;
        $matricula->nivel_id = $request->nivel_id;
        $matricula->carrera_id = $request->carrera_id;
       $matricula->estudiante_id = $request->estudiante_id;
        $matricula->save();

    

        return "nueva matricula";
    }

    /**
     * Display the specified resource.
     */
    public function show(Matricula $matricula)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Matricula $matricula)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
  
        $matricula = Matricula::find($id);
        $matricula->grupo_id = $request->grupo_id;
        $matricula->nivel_id = $request->nivel_id;
        $matricula->carrera_id = $request->nivel_id;
       
        $matricula->save();

        return "nuevos cambios matricula";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $matricula = Matricula::find($id);
        $matricula->delete();

        return "eliminado";
    }



    public function matricularEstudiante(Request $request)
{
    $request->validate([
        'nombre' => 'required',
        'carrera_id' => 'required|exists:carreras,id',
        'grupo_id' => 'required|exists:grupos,id',
        'nivel_id' => 'required|exists:niveles,id',
    ]);

    // Crea un nuevo estudiante
    $estudiante = new Estudiante([
        'nombre' => $request->input('nombre'),
        'carrera_id' => $request->input('carrera_id'),
        'grupo_id' => $request->input('grupo_id'),
    ]);

    $estudiante->save();

    return "matricula creada";
}
}
