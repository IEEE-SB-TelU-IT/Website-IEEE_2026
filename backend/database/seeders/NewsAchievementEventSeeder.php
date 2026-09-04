<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsAchievementEventSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('news')->insert([
            [
                'title' => 'Artificial Intelligence on Human Daily Life',
                'content' => 'Explore how AI is fundamentally reshaping the way people live, work, and interact with the world around them in 2024.',
                'category' => 'TECHNOLOGY',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'IoT Innovation Challenge Winners Announced',
                'content' => 'Our team secured top positions at the National IoT Innovation Challenge held in Jakarta.',
                'category' => 'EVENT',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'IEEE R10 Outstanding Student Branch Award',
                'content' => 'IEEE SB Tel-U receives the prestigious Region 10 Outstanding Student Branch award.',
                'category' => 'AWARD',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        DB::table('achievements')->insert([
            [
                'title' => 'Outstanding Student Branch',
                'description' => 'IEEE Region 10 (Asia Pacific) recognition for exceptional activities and student engagement.',
                'category' => 'IEEE R10 Council',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => '1st Place IoT Innovation',
                'description' => 'National Smart City Hackathon winner for AI-driven traffic management system.',
                'category' => 'Kemendikbud Ristek',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        DB::table('events')->insert([
            [
                'title' => 'Cybersecurity Essentials 101',
                'description' => 'Learn the fundamentals of penetration testing and ethical hacking from industry experts.',
                'category' => 'Workshops',
                'location' => 'Lab Multimedia',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Cloud Architecture Summit',
                'description' => 'A deep dive into serverless architectures and distributed systems with AWS experts.',
                'category' => 'Seminars',
                'location' => 'Virtual via Zoom',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'IoT Innovation Challenge',
                'description' => 'Present your innovative IoT solutions and win prizes up to Rp 10.000.000!',
                'category' => 'Competitions',
                'location' => 'Main Auditorium',
                'image_url' => null,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
