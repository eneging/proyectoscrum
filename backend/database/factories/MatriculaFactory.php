<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Matricula>
 */
class MatriculaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'estudiante_id' =>fake()->numberBetween(1,30),
            'carrera_id' =>fake()->numberBetween(1,6),
            'grupo_id' =>fake()->numberBetween(1,4),
            'nivel_id' =>fake()->numberBetween(1,5)
        ];
    }
}
