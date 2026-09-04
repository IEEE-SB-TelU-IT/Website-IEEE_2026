<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProgramSeeder extends Seeder
{
    public function run(): void
    {
        // department_id urutan insert DepartmentSeeder: 1=rnd, 2=education, 3=pr, 4=hr, 5=ci, 6=it
        DB::table('programs')->insert([
            // RnD (1)
            [
                'department_id' => 1,
                'name' => 'Research Expo',
                'description' => 'The Research Expo Division is responsible for organising the annual showcase of student research projects, recognising the best research each cycle through "Research of the Month", and publishing research findings through IEEE channels.',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'department_id' => 1,
                'name' => 'Innovation Lab',
                'description' => "The Innovation Lab Division is tasked with facilitating hands-on experiments and prototyping sessions, organising study groups on emerging technologies, and collaborating with other branches to explore research trends.",
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            // Education (2)
            [
                'department_id' => 2,
                'name' => 'Workshop Division',
                'description' => 'The Workshop Division organises hands-on technical sessions covering topics such as programming, hardware design, and data science. They create workshop materials, manage registrations, and ensure participants receive certificates upon completion.',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'department_id' => 2,
                'name' => 'Seminar Division',
                'description' => 'The Seminar Division is tasked with planning and executing knowledge-sharing seminars, inviting academic and industry experts, managing live streaming for virtual participants, and compiling session recordings for the IEEE SB archive.',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            // PR (3)
            [
                'department_id' => 3,
                'name' => 'Design',
                'description' => 'The Design Division is responsible for upgrading the Instagram feed with attractive and informative designs, creating visual content, and recognising the best officer each month through "Officer of the Month".',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'department_id' => 3,
                'name' => 'Social Media',
                'description' => 'The Social Media Division is tasked with the role of Instagram and TikTok admin, providing interactive live sessions through "Live with Minbieee", and collaborating with other media through "Media Partner".',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            // HR (4)
            [
                'department_id' => 4,
                'name' => 'Recruitment Division',
                'description' => 'The Recruitment Division manages the open recruitment process for new IEEE SB members, which includes designing the selection process, conducting interviews, and onboarding new members.',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'department_id' => 4,
                'name' => 'Member Welfare Division',
                'description' => 'The Member Welfare Division is responsible for organising bonding activities, celebrating member achievements, and conducting regular check-ins with officers.',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            // CI (5)
            [
                'department_id' => 5,
                'name' => 'Creative Design Division',
                'description' => "The Creative Design Division handles all visual assets for the organisation, including event posters, social media graphics, presentation templates, and merchandise design.",
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'department_id' => 5,
                'name' => 'Documentation Division',
                'description' => 'The Documentation Division archives all organisational activities, produces the annual report, manages the digital library, and creates video documentation of events.',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            // IT (6)
            [
                'department_id' => 6,
                'name' => 'Web Development Division',
                'description' => 'The Web Development Division is responsible for building and maintaining the official IEEE SB Tel-U website, developing internal management tools, and ensuring the platform is always up-to-date and secure.',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'department_id' => 6,
                'name' => 'Competition Division',
                'description' => "The Competition Division organises and coordinates the branch's participation in national and regional hackathons and technology competitions.",
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
