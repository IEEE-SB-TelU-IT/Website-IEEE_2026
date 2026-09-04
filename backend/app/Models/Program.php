<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    protected $fillable = [
        'department_id',
        'name',
        'description',
        'image_url',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
