<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('departments')->insert([
            [
                'slug' => 'environment',
                'label' => 'Environment',
                'accent_color' => '#22C55E',
                'description' => 'Departemen yang fokus pada pengelolaan lingkungan.',
                'detail' => 'Mengelola program kebersihan, daur ulang, dan pelestarian lingkungan.',
                'goals' => json_encode([
                    'Mengurangi sampah plastik',
                    'Meningkatkan daur ulang',
                    'Menjaga kebersihan lingkungan'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'education',
                'label' => 'Education',
                'accent_color' => '#3B82F6',
                'description' => 'Departemen yang fokus pada pendidikan.',
                'detail' => 'Mengelola program pembelajaran dan pengembangan keterampilan.',
                'goals' => json_encode([
                    'Meningkatkan kualitas pendidikan',
                    'Menyediakan pelatihan',
                    'Mengembangkan keterampilan siswa'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'health',
                'label' => 'Health',
                'accent_color' => '#EF4444',
                'description' => 'Departemen yang fokus pada kesehatan.',
                'detail' => 'Mengelola program kesehatan masyarakat dan kebugaran.',
                'goals' => json_encode([
                    'Meningkatkan kesehatan masyarakat',
                    'Mendorong pola hidup sehat',
                    'Menyediakan layanan kesehatan'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}