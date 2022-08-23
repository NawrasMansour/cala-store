<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Cluster;
use App\Models\Color;
use App\Models\Group;
use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $categories = Category::all();
        $clusters = Cluster::all();
        $groups = Group::all();
        $colors = Color::all();

        if($request['query']){
           $paginationItem = \collect(Item::with(['pictures','subGroup','colors'])
                                            ->latest()
                                            ->SearchText($request['query'])
                                            ->paginate(9));
        }else{
            $paginationItem = \collect(Item::with(['pictures','subGroup','colors'])
                                            ->latest()
                                            ->paginate(9));
        }

        return Inertia::render('Main/Products/Index', [
            'title'      => 'Cala - Home',
            'items'      => $paginationItem,
            'categories' => $categories,
            'clusters'   => $clusters,
            'groups'     => $groups,
            'colors'     => $colors
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
        $item = Item::with(['pictures','subGroup','colors'])->find($id);

        return Inertia::render('Main/Products/Show', [
            'title' => 'Cala - Home',
            'item' => $item
        ]);
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
