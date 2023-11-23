<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('matriculas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('estudiante_id');
            $table->unsignedBigInteger('carrera_id');
            $table->unsignedBigInteger('grupo_id');
            $table->unsignedBigInteger('nivel_id');
            $table->timestamps();

            $table->foreign('estudiante_id')->references('estudiante_id')->on('estudiantes');
            $table->foreign('carrera_id')->references('carrera_id')->on('carreras');
            $table->foreign('grupo_id')->references('grupo_id')->on('grupos');
            $table->foreign('nivel_id')->references('nivel_id')->on('nivels');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('matriculas');
    }
};
