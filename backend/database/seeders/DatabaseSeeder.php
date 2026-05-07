<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Admin
        User::firstOrCreate(['email' => 'admin@sipandai.desa.id'], [
            'name' => 'Admin Desa',
            'password' => Hash::make('password123'),
            'role' => 'admin',
        ]);

        // Regular User
        User::firstOrCreate(['email' => 'user@example.com'], [
            'name' => 'User Biasa',
            'password' => Hash::make('password123'),
            'role' => 'user',
        ]);

        // Driver
        User::firstOrCreate(['email' => 'driver@sipandai.desa.id'], [
            'name' => 'Budi Driver',
            'password' => Hash::make('driver123'),
            'role' => 'driver',
        ]);
    }
}
