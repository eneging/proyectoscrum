<?php

namespace App\Http\Controllers;

use App\Models\Carrera;
use App\Models\Estudiante;
use Illuminate\Http\Request;

class CarreraController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $carreras = Carrera::all();
        $estudiantes = Estudiante::all();
        $info = [];
        foreach ($carreras as $carrera) {
            $infoEstudiante =[];
            foreach ($estudiantes as $estudiante) {
                if($carrera->carrera_id === $estudiante->carrera_id){
                    $infoEstudiante[]=[
                        'estudiante_id' => $estudiante->estudiante_id,
                        'nombre' => $estudiante->nombre.' '.$estudiante->apellido
                    ];
                }
            }
            $info[]=[
                'carrera_id' => $carrera->carrera_id,
                'nombre' => $carrera->nombre,
                'estudiantes' => $infoEstudiante
            ];
        }
        return $info;


    }
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        $carrera= new Carrera();
        $carrera->nombre= $request->nombre;
        $carrera->save();
        return "guardado correctamente";
    }

    /**
     * Display the specified resource.
     */
    public function show($carrera_id)
    {
        $carrera = Carrera::find($carrera_id);
        $estudiantes = Estudiante::all();
        $info = null;
            $infoEstudiante =[];
            foreach ($estudiantes as $estudiante) {
                if($carrera->carrera_id === $estudiante->carrera_id){
                    $infoEstudiante[]=[
                        'estudiante_id' => $estudiante->estudiante_id,
                        'nombre' => $estudiante->nombre.' '.$estudiante->apellido
                    ];
                }
            }
            $info=[
                'carrera_id' => $carrera->carrera_id,
                'nombre' => $carrera->nombre,
                'estudiantes' => $infoEstudiante
            ];
        return $info;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Carrera $carrera)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $carrera= Carrera::find($id);
        $carrera->nombre = $request->nombre;
        $carrera->save();
        return 'actualizado correctamente';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $carrera= Carrera::find($id);
        $carrera->delete();
        return "carrera elimidada correctamente";
    }


    public function matricularEstudiante(Request $request){
        $carrera_id = $request->carrera_id;
        $estudiante_id = $request->estudiante_id;
        $fechaMatricula = $request->fechaMatricula;
        $carreraId = Estudiante::where('estudiante_id', $estudiante_id)->value('carrera_id');
        if ($carreraId !== NULL) {
            return "El estudiante ya se encuentra matriculado";
        } else {
            $condicion =[
                ['estudiante_id', '=',$estudiante_id]
            ];
            Estudiante::where($condicion)->update(['carrera_id' => $carrera_id,'fechaMatricula' => $fechaMatricula]);
            return "Matricula Exitosa";
        }
    }

    public function actualizarMatriculaEstudiante(Request $request){
        $carrera_id = $request->carrera_id;
        $estudiante_id = $request->estudiante_id;
        $fechaMatricula = $request->fechaMatricula;
        $carreraId = Estudiante::where('estudiante_id', $estudiante_id)->value('carrera_id');
        if ($carreraId !== NULL) {
            $grupo_id = NULL;
            $condicion =[
                ['estudiante_id', '=',$estudiante_id]
            ];
            Estudiante::where($condicion)->update(['carrera_id' => $carrera_id,'grupo_id' => $grupo_id,'fechaMatricula' => $fechaMatricula]);
            return "Actualización de Matricula Exitosa";
            
        } else {
            return "El estudiante no se encuentra matriculado";
        }
    }

    public function eliminarMatricula($estudiante_id){
        $carrera_id = NULL;
        $fechaMatricula = NULL;
        $carreraId = Estudiante::where('estudiante_id', $estudiante_id)->value('carrera_id');
        if ($carreraId !== null) {
            $grupo_id = NULL;
            $condicion =[
                ['estudiante_id', '=',$estudiante_id]
            ];
            Estudiante::where($condicion)->update(['carrera_id' => $carrera_id,'grupo_id' => $grupo_id,'fechaMatricula' => $fechaMatricula]);
            return "Matricula eliminada de manera exitosa";
            
        } else {
            return "No se puede eliminar porque la matricula es inexistente";
        }
    }
}
