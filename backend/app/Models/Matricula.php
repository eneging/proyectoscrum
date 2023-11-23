<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matricula extends Model
{
    use HasFactory;

    protected $fillable = ['estudiante_id', 'carrera_id', 'grupo_id', 'nivel_id'];

    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class);
    }

    public function carrera()
    {
        return $this->belongsTo(Carrera::class);
    }

    public function grupo()
    {
        return $this->belongsTo(Grupo::class);
    }

    public function nivel()
    {
        return $this->belongsTo(Nivel::class);
    }
}
