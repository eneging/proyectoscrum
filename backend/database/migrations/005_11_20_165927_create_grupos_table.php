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
        Schema::create('grupos', function (Blueprint $table) {
           
            $table->id('grupo_id');
            $table->string('nombre');
            $table->unsignedBigInteger('nivel_id');
            $table->unsignedBigInteger('docente_id');
            $table->foreign('nivel_id')->references('nivel_id')->on('nivels')->onDelete('cascade');;
            $table->foreign('docente_id')->references('docente_id')->on('docentes')->onDelete('cascade');;
          
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grupos');
    }
};
