<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    use HasFactory;

    protected $primaryKey = 'estudiante_id';

    //Permite mass importing y protege al momento de editar datos en el modal
    protected $fillable = ['nombre', 'apellido', 'correo'];
}