<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function subGroup()
    {
        return $this->belongsTo(SubGroup::class);
    }

    public function pictures()
    {
        return $this->hasMany(ItemPicture::class);
    }

    public function colors()
    {
        return $this->belongsToMany(Color::class)->withPivot('count');
    }

    public function scopeSearchText($query,string $terms =null){
        collect(explode(" ",$terms))->filter()->each(function($term) use($query){
            $term = '%'.$term.'%';
            $query->whereIn('id',function($query) use($term){
                $query->select('id')
                      ->from (function($query) use($term){
                        $query->select('id')
                              ->from('items')
                              ->where('en_name','LIKE',$term)
                              ->orwhere('ar_name','LIKE',$term)
                              ->union(
                                $query->newQuery()
                                      ->select('items.id')
                                      ->from('items')
                                      ->join('sub_groups','sub_groups.id' , '=' , 'items.sub_group_id')
                                      ->where('sub_groups.en_name','LIKE',$term)
                                      ->orwhere('sub_groups.ar_name','LIKE',$term)
                                      ->orwhereIn('sub_groups.id',function($query) use($term){
                                            $query->select('sub_groups.id')
                                                  ->from('sub_groups')
                                                  ->join('groups','groups.id','=','sub_groups.group_id')
                                                  ->where('groups.en_name','LIKE',$term)
                                                  ->orwhere('groups.ar_name','LIKE',$term)
                                                  ->orwhereIn('groups.id',function($query) use($term){
                                                    $query->select('groups.id')
                                                          ->from('groups')
                                                          ->join('sub_clusters','sub_clusters.id','=','groups.sub_cluster_id')
                                                          ->where('sub_clusters.en_name','LIKE',$term)
                                                          ->orwhere('sub_clusters.ar_name','LIKE',$term)
                                                          ->orwhereIn('sub_clusters.id',function($query) use($term){
                                                            $query->select('sub_clusters.id')
                                                                  ->from('sub_clusters')
                                                                  ->join('clusters','clusters.id','=','sub_clusters.cluster_id')
                                                                  ->where('clusters.en_name','LIKE',$term)
                                                                  ->orwhere('clusters.ar_name','LIKE',$term)
                                                                  ->orwhereIn('clusters.id',function($query) use($term){
                                                                    $query->select('clusters.id')
                                                                          ->from('clusters')
                                                                          ->join('sub_categories','sub_categories.id','=','clusters.sub_category_id')
                                                                          ->where('sub_categories.en_name','LIKE',$term)
                                                                          ->orwhere('sub_categories.ar_name','LIKE',$term)
                                                                          ->orwhereIn('sub_categories.id',function($query) use($term){
                                                                            $query->select('sub_categories.id')
                                                                                  ->from('sub_categories')
                                                                                  ->join('categories','categories.id','=','sub_categories.category_id')
                                                                                  ->where('categories.en_name','LIKE',$term)
                                                                                  ->orwhere('categories.ar_name','LIKE',$term);
                                                                          });
                                                                  });
                                                          });
                                                  });
                                      })
                                );
                      },'matches');
            });
        });
    }
}
