<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCluster extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function cluster()
    {
        return $this->belongsTo(Cluster::class);
    }

    public function groups()
    {
        return $this->hasMany(Group::class);
    }
}
