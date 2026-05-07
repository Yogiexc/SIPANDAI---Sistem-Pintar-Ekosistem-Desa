<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pickup_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('driver_id')->nullable()->constrained('users')->nullOnDelete();
            $table->enum('waste_type', ['PLASTIK', 'ORGANIK', 'KERTAS', 'LOGAM', 'KACA', 'LAINNYA']);
            $table->decimal('weight_kg', 8, 2)->nullable(); // filled by driver after pickup
            $table->decimal('estimated_weight_kg', 8, 2)->nullable(); // filled by user
            $table->string('location');
            $table->date('pickup_date');
            $table->enum('status', ['DIAJUKAN', 'DITERIMA', 'DIJEMPUT', 'SELESAI', 'DIBATALKAN'])->default('DIAJUKAN');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pickup_requests');
    }
};
