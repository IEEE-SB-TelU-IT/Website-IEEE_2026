<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // department_id urutan insert DepartmentSeeder:
        // 1=rnd, 2=education, 3=pr, 4=hr, 5=ci, 6=it

        User::create([
            'department_id' => 1,
            'name' => 'Admin RnD',
            'email' => 'rnd.ieeetelu@gmail.com',
            'password' => '12345678', // auto-hash (cast di User model)
            'is_superadmin' => false,
        ]);

        User::create([
            'department_id' => 2,
            'name' => 'Admin Education',
            'email' => 'eduu.ieeetelu@gmail.com',
            'password' => '12345678',
            'is_superadmin' => false,
        ]);

        User::create([
            'department_id' => 3,
            'name' => 'Admin PR',
            'email' => 'pr.ieeetelkomuniv@gmail.com',
            'password' => '12345678',
            'is_superadmin' => false,
        ]);

        User::create([
            'department_id' => 4,
            'name' => 'Admin HR',
            'email' => 'hr.ieeetelu@gmail.com',
            'password' => '12345678',
            'is_superadmin' => false,
        ]);

        User::create([
            'department_id' => 5,
            'name' => 'Admin Creative & Information',
            'email' => 'ci.ieeesbtelkomuniv@gmail.com',
            'password' => '12345678',
            'is_superadmin' => false,
        ]);

        // IT — superadmin, akses semua department (dicek is_superadmin di controller)
        User::create([
            'department_id' => 6,
            'name' => 'Admin IT (Superadmin)',
            'email' => 'it.ieeetelkomuniv@gmail.com',
            'password' => '12345678',
            'is_superadmin' => true,
        ]);
    }
}
