<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Cluster;
use App\Models\Group;
use App\Models\Item;
use App\Models\SubCategory;
use App\Models\SubCluster;
use App\Models\SubGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $categories = Category::all();
        $clusters = Cluster::all();
        $groups = Group::all();
        $items = Item::all();

        return inertia('Admin/Home', [
            'title' => 'Dashborad',
            'sub_title' => '',
            'routeBaseName' => 'admin.dashboard',
            'categories_stats' => [
                'Category' => $categories->count(),
                'Sub Category' => SubCategory::all()->count(),
            ],

            'clusters_stats' => [
                'Cluster' => $clusters->count(),
                'Sub Cluster' => SubCluster::all()->count(),
            ],

            'groups_stats' => [
                'Group' => $groups->count(),
                'sub Group' => SubGroup::all()->count(),
            ],

            'items_stats' => [
                'Item' => $items->count(),
            ],
        ]);
    }
}
