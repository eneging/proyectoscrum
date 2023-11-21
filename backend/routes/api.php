<?php

use App\Http\Controllers\CarreraController;
use App\Http\Controllers\DocenteController;
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

      
});














Route::controller(DocenteController::class)->group(function() {
    Route::get('/docentes', 'index');
    Route::get('/docentes/{id}', 'show');
    Route::post('/docentes', 'store');
    Route::put('/docentes/{id}', 'update');
    Route::delete('/docentes/{id}', 'destroy');  
});