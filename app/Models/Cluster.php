<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cluster extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function subCategory()
    {
        return $this->belongsTo(SubCategory::class);
    }

    public function subClusters()
    {
        return $this->hasMany(SubCluster::class);
    }


}
