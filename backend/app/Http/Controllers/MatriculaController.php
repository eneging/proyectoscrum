<?php

namespace App\Http\Controllers;

use App\Models\Estudiante;
use App\Models\Matricula;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Return_;

class MatriculaController extends Controller
{

    public function index()
    {
        return Matricula::join('estudiantes' ,'matriculas.estudiante_id', '=', 'estudiantes.estudiante_id')
        ->join('carreras', 'matriculas.carrera_id','=', 'carreras.carrera_id')
        ->select('matriculas.id', 'estudiantes.nombre', 'carreras.nombre as carrera_nombre' ,'matriculas.estudiante_id','matriculas.nivel_id','matriculas.nivel_id', 'matriculas.Fecha_Nivel', 'matriculas.grupo_id', 'matriculas.Fecha_Grupo','matriculas.carrera_id','matriculas.Fecha_Carrera')
      ->get();
    }

    public function store(Request $request)
    {
        
        $matricula = new Matricula();

        $matricula->estudiante_id = $request->estudiante_id;
        $matricula->carrera_id = $request->carrera_id;
        $matricula->Fecha_Carrera = $request->Fecha_Carrera;
        $matricula->nivel_id = $request->nivel_id;
        $matricula->Fecha_Nivel = $request->Fecha_Nivel;
        $matricula->grupo_id = $request->grupo_id;
        $matricula->Fecha_Grupo = $request->Fecha_Grupo;
        
        $matricula->save();

        return "nueva matricula";
    }


    public function show($id)
    {
        $resultado = Matricula::find($id);
        return $resultado;
    }

    public function update(Request $request, $id)
    {
  
        $matricula = Matricula::find($id);
        
        $matricula->estudiante_id = $request->estudiante_id;
        $matricula->carrera_id = $request->carrera_id;
        $matricula->Fecha_Carrera = $request->Fecha_Carrera;
        $matricula->nivel_id = $request->nivel_id;
        $matricula->Fecha_Nivel = $request->Fecha_Nivel;
        $matricula->grupo_id = $request->grupo_id;
        $matricula->Fecha_Grupo = $request->Fecha_Grupo;
       
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

}
