<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Estudiante>
 */
class EstudianteFactory extends Factory
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
            'apellido'=>fake()->lastName(),
            'dni'=>fake()->phoneNumber(),
            'direccion'=>fake()->address(),
            'correo'=>fake()->email(),
            'telefono'=>fake()->phoneNumber(),
            'carrera_id'=>fake()->numberBetween(1,6),
            'grupo_id'=>fake()->numberBetween(1,4)
        ];
    }
}
