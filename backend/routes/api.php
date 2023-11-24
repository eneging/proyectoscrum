<?php


use App\Http\Controllers\EstudianteController;

use App\Http\Controllers\CarreraController;
use App\Http\Controllers\DocenteController;
use App\Http\Controllers\GrupoController;
use App\Http\Controllers\MatriculaController;
use App\Http\Controllers\NivelController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::controller( EstudianteController::class)->group(function () {
    Route::get('/estudiante', 'index');
    Route::post('/estudiante', 'store');
    Route::put('/estudiante/{id}','update');
    Route::delete('/estudiante/{id}','destroy');

});

Route::controller(CarreraController::class)->group(function () {
    Route::get('/carreras', 'index');
    Route::post('/carreras', 'store');
    Route::put('/carreras/{id}','update');
    Route::delete('/carreras/{id}','destroy');
    Route::post('/carreras/matricular/estudiante', 'matricularEstudiante');
    Route::put('/carreras/actualizar/matricula', 'actualizarMatriculaEstudiante');
    Route::delete('/carreras/eliminar/matricula/estudiante/{idEstudiante}','eliminarMatricula');
    Route::get('/carreras/{id}', 'show');
    Route::get('/matriculas', 'listaMatricula');
});


Route::controller(DocenteController::class)->group(function() {
    Route::get('/docentes', 'index');
    Route::get('/docentes/{id}', 'show');
    Route::post('/docentes', 'store');
    Route::put('/docentes/{id}', 'update');
    Route::delete('/docentes/{id}', 'destroy');  
});

Route::post('/login/create',[UserController::class,'store']);
Route::post('/login',[UserController::class,'loginIn']);


Route::controller(MatriculaController::class)->group(function() {
    Route::get('/matricula', 'index');
    Route::post('/matricula', 'store');
    Route::put('/matricula/{id}', 'update');
    Route::delete('/matricula/{id}', 'destroy');
});

Route::get('/grupos',[GrupoController::class,'index']);
Route::get('/niveles',[NivelController::class,'index']);