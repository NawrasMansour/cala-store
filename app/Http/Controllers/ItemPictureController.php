<?php

namespace App\Http\Controllers;

use App\Models\ItemPicture;
use Illuminate\Http\Request;

class ItemPictureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Models\ItemPicture  $itemPicture
     * @return \Illuminate\Http\Response
     */
    public function show(ItemPicture $itemPicture)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ItemPicture  $itemPicture
     * @return \Illuminate\Http\Response
     */
    public function edit(ItemPicture $itemPicture)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ItemPicture  $itemPicture
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ItemPicture $itemPicture)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ItemPicture  $itemPicture
     * @return \Illuminate\Http\Response
     */
    public function destroy(ItemPicture $itemPicture)
    {
        $deleted = $itemPicture->delete();
        return $deleted
            ? \back()->with('success', "Item's Picture was deleted successfully")
            : \back()->with('failure', "Item's Picture doesn't exist");
    }
}
