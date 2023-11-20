<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Carrera>
 */
class CarreraFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $carreras = ['economia','ingenieria de Sistemas' , 'derecho' , 'medicina' , 'contaduria' , 'biologia'];
        $num = rand(0,5);
        return [
           'nombre'=>$carreras[$num]
        ];
    }
}
