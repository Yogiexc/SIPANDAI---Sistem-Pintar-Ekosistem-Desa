<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('driver_earnings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('driver_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('pickup_request_id')->constrained()->cascadeOnDelete();
            $table->decimal('amount_rupiah', 12, 2); // earnings in IDR
            $table->integer('eco_points');           // eco points earned
            $table->decimal('weight_kg', 8, 2);
            $table->string('waste_type');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('driver_earnings');
    }
};
