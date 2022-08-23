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

class HomeController extends Controller
{

    public function index()
    {
        $categories = Category::all();
        $clusters = Cluster::all();
        $groups = Group::all();
        $items = Item::with(['pictures','subGroup','colors'])->latest()->get();
        $lastestItems = count($items) > 0 ? $items->take(6) : null;
        $heroItems = count($items) > 0 ? $items->random(7) : null;

        return Inertia::render('Main/Home', [
            'title' => 'Cala - Home',
            'heroItems' => $heroItems,
            'lastestItems' => $lastestItems,
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


    public function contact()
    {
        return Inertia::render('Main/Contact', [
            'title' => 'Cala - Contact',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
