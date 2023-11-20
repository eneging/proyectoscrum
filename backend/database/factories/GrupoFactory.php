<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Grupo>
 */
class GrupoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre'=>fake()->name(),
            'nivel_id'=>fake()->numberBetween(1,4),
            'docente_id'=>fake()->numberBetween(1,10),
            'estudiante_id'=>fake()->numberBetween(1,30)
        ];
    }
}
