<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Officer extends Model
{
    use HasFactory;
    protected $fillable = [
        'department_id',
        'name',
        'position',
        'level',
        'photo_url'
    ];

    public function departments()
    {
        return $this->belongsTo(Department::class);
    }
}
