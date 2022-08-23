<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function subCluster()
    {
        return $this->belongsTo(SubCluster::class);
    }

    public function subGroups()
    {
        return $this->hasMany(SubGroup::class);
    }
}
