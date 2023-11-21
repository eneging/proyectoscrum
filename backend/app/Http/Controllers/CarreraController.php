<?php

namespace App\Http\Controllers;

use App\Models\Carrera;
use Illuminate\Http\Request;

class CarreraController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Carrera::all();

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
    public function show(Carrera $carrera)
    {
        //
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
}
