<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('departments')->insert([
            [
                'slug' => 'rnd',
                'label' => 'Research',
                'accent_color' => '#7c3aed',
                'description' => 'Focusing on reasoning which provides a forum for scientific development in the field of research and facilitates the potential achievements of all IEEE SB Telkom University officers.',
                'detail' => 'Apart from that, there is Outlook Project Management which is tasked with supervising each research project and reporting the results of research project achievements on a short or long term scale.',
                'goals' => json_encode([
                    ['title' => 'Harmonization', 'desc' => 'Creating good relationships between IEEE Telkom University Student Branch officers while undergoing the specified work program.'],
                    ['title' => 'Synergy & Collaboration', 'desc' => 'Carrying out work programs with other agencies that have new goals in developing the quality of each agency.'],
                    ['title' => 'Performance', 'desc' => 'Become a center of excellence for the work of Telkom University students which is ready to be launched on an international scale.'],
                    ['title' => 'Innovation', 'desc' => 'Creating new ideas from IEEE SB Telkom University members and officers to improve the quality of human resources IEEE SB Telkom University.'],
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'education',
                'label' => 'Education',
                'accent_color' => '#2563eb',
                'description' => 'Responsible for developing the intellectual capacity of all IEEE SB Telkom members through workshops, seminars, and educational initiatives.',
                'detail' => 'The Education department curates and delivers programs that align with IEEE global standards to foster a culture of continuous learning among student engineers.',
                'goals' => json_encode([
                    ['title' => 'Knowledge Sharing', 'desc' => 'Facilitate knowledge transfer between members and the broader student community.'],
                    ['title' => 'Skill Development', 'desc' => 'Provide technical and soft-skill training to prepare members for professional roles.'],
                    ['title' => 'Collaboration', 'desc' => 'Partner with faculty and industry experts to deliver impactful educational programs.'],
                    ['title' => 'Excellence', 'desc' => 'Uphold high educational standards that reflect the values of IEEE globally.'],
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'pr',
                'label' => 'Public Relation',
                'accent_color' => '#db2777',
                'description' => "Handles external communications, social media management, sponsorships, and university connections to build IEEE SB Tel-U's public image.",
                'detail' => 'The PR department bridges the gap between IEEE SB Tel-U and the wider community, including corporate partners, universities, and media outlets.',
                'goals' => json_encode([
                    ['title' => 'Brand Awareness', 'desc' => 'Increase the visibility and credibility of IEEE SB Tel-U across all platforms.'],
                    ['title' => 'Partnership', 'desc' => 'Establish mutually beneficial relationships with external organizations.'],
                    ['title' => 'Engagement', 'desc' => 'Foster active engagement with the broader student and tech community.'],
                    ['title' => 'Impact', 'desc' => "Create campaigns that meaningfully represent IEEE's mission and values."],
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'hr',
                'label' => 'Human Resource',
                'accent_color' => '#059669',
                'description' => 'Manages member recruitment, internal welfare, bonding activities, and develops the organizational capabilities of all IEEE SB Tel-U members.',
                'detail' => 'Human Resources ensures every member thrives through structured onboarding, mentorship programs, and inclusive organizational culture initiatives.',
                'goals' => json_encode([
                    ['title' => 'Recruitment', 'desc' => 'Attract talented and passionate students to join the IEEE family.'],
                    ['title' => 'Retention', 'desc' => 'Build loyalty through consistent engagement and recognition programs.'],
                    ['title' => 'Development', 'desc' => 'Equip members with leadership and organizational skills for the future.'],
                    ['title' => 'Culture', 'desc' => 'Foster a positive, inclusive, and collaborative working environment.'],
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'ci',
                'label' => 'Creative & Information',
                'accent_color' => '#d97706',
                'description' => 'Responsible for all visual design, creative content, documentation, and information management across IEEE SB Tel-U.',
                'detail' => 'The Creative & Information department crafts compelling visual stories and manages the information ecosystem of the organization.',
                'goals' => json_encode([
                    ['title' => 'Visual Identity', 'desc' => 'Maintain a consistent and professional brand identity for IEEE SB Tel-U.'],
                    ['title' => 'Documentation', 'desc' => 'Archive all organizational activities for institutional memory and transparency.'],
                    ['title' => 'Content', 'desc' => 'Produce high-quality creative content that resonates with our audience.'],
                    ['title' => 'Innovation', 'desc' => 'Push creative boundaries to express the innovative spirit of IEEE.'],
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'it',
                'label' => 'Information & Technology',
                'accent_color' => '#0284c7',
                'description' => 'Maintains the website, develops internal tools, manages digital infrastructure, and supports all technical needs of IEEE SB Telkom University.',
                'detail' => 'The IT department leads digital transformation initiatives, builds technical capacity among members, and represents IEEE in national-level hackathons and competitions.',
                'goals' => json_encode([
                    ['title' => 'Digital Infrastructure', 'desc' => 'Maintain reliable and secure digital systems for the organization.'],
                    ['title' => 'Innovation', 'desc' => 'Develop cutting-edge applications and tools that add value to the community.'],
                    ['title' => 'Collaboration', 'desc' => 'Work with all departments to deliver technical solutions.'],
                    ['title' => 'Excellence', 'desc' => 'Compete and excel in regional and national technology competitions.'],
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
