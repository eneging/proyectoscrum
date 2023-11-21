<?php

use App\Http\Controllers\CarreraController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(CarreraController::class)->group(function () {
    Route::get('/carreras', 'index');
    Route::post('/carreras', 'store');
    Route::put('/carreras/{id}','update');
    Route::delete('/carreras/{id}','destroy');
    Route::post('/carreras/matricular/estudiante', 'matricularEstudiante');
    Route::put('/carreras/actualizar/matricula', 'actualizarMatriculaEstudiante');
    Route::delete('/carreras/eliminar/matricula/estudiante/{idEstudiante}','eliminarMatricula');
    Route::get('/carreras/{id}', 'show');});

