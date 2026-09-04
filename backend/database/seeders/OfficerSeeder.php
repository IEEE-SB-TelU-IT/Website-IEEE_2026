<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OfficerSeeder extends Seeder
{
    public function run(): void
    {
        // department_id urutan insert DepartmentSeeder: 1=rnd, 2=education, 3=pr, 4=hr, 5=ci, 6=it
        $departments = [
            1 => 'RnD',
            2 => 'Education',
            3 => 'PR',
            4 => 'HR',
            5 => 'Creative & Information',
            6 => 'IT',
        ];

        $rows = [];

        foreach ($departments as $deptId => $deptLabel) {
            // level 0 — head of department
            $rows[] = [
                'department_id' => $deptId,
                'name' => "Head of {$deptLabel}",
                'position' => 'Head of Department',
                'level' => 0,
                'photo_url' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ];
            // level 1 — 2 vice/coordinator
            for ($i = 1; $i <= 2; $i++) {
                $rows[] = [
                    'department_id' => $deptId,
                    'name' => "Coordinator {$i} - {$deptLabel}",
                    'position' => 'Coordinator',
                    'level' => 1,
                    'photo_url' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
            // level 2 — 3 staff
            for ($i = 1; $i <= 3; $i++) {
                $rows[] = [
                    'department_id' => $deptId,
                    'name' => "Staff {$i} - {$deptLabel}",
                    'position' => 'Staff',
                    'level' => 2,
                    'photo_url' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        DB::table('officers')->insert($rows);
    }
}
