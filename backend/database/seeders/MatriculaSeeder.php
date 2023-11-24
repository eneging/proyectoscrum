<?php

namespace Database\Seeders;

use App\Models\Estudiante;
use App\Models\Matricula;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MatriculaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         Matricula::factory(30)->create();
    }
}
