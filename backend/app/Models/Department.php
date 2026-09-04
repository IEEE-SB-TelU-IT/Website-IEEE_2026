<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;
    protected $fillable = [
        'slug',
        'label',
        'accent_color',
        'description',
        'detail',
        'goals'
    ];

    protected $casts = [
        'goals' => 'array',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function officers()
    {
        return $this->hasMany(Officer::class);
    }

    public function programs()
    {
        return $this->hasMany(Program::class);
    }
}
