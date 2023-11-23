<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Carrera;
use App\Models\Docente;
use App\Models\Estudiante;
use App\Models\Grupo;
use App\Models\Nivel;
use Illuminate\Database\Seeder;
use PhpParser\Node\Expr\New_;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $seeder5 = New CarreraSeeder;
        $seeder5->run();

       $seeder1 = New DocenteSeeder;
     $seeder1->run();


     $seeder4 = New NivelSeeder;
     $seeder4->run();


     $seeder3 = New GrupoSeeder;
     $seeder3->run();

    
    $seeder2 = New EstudianteSeeder;
        $seeder2->run();

        $seeder6 = New UsuarioSeeder;
        $seeder6->run();

     
   
    }
}
