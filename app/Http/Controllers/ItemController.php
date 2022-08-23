<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\ItemPicture;
use App\Models\SubGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Models\Color;
use Inertia\Inertia;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paginationItem = \collect(Item::latest()->paginate(10));

        return Inertia::render('Admin/Items/Index', [
            'title' => 'Items',
            'sub_title' => '',
            'routeBaseName' => 'admin.items',
            'items' => $paginationItem->only('data')->toArray()[
                'data'
            ],
            'pagination' => $paginationItem->except('data')->toArray(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $subGroups = SubGroup::all();
        $colors = Color::all();

        return Inertia::render('Admin/Items/Create', [
            'title' => 'Items',
            'sub_title' => ' / Create Item',
            'routeBaseName' => 'admin.items',
            'subGroups' => $subGroups ,
            'colors'  => $colors
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreItemRequest $request)
    {
        $data = $request->validated();
        $item = array(
            'en_name' => $data['en_name'],
            'ar_name' => $data['ar_name'],
            'price' => $data['price'],
            'en_description' => $data['en_description'],
            'ar_description' => $data['ar_description'],
            'sub_group_id' => $data['sub_group_id']
        );

        DB::beginTransaction();
        try {
            $newItem = Item::Create($item);

            // save pictures
            if($request->hasfile('pictures')){
                foreach ($request->file('pictures') as $key => $image) {
                    if ($image && $image->isFile()) {
                        $imagePath = $image->storePublicly('items');

                        $newImage = ItemPicture::Create(array('item_id' => $newItem->id,'name'=> $imagePath, 'default' => $key == 0 ? 1 : 0));

                    }
                }
            }

            // save the amount depending on the colors
            foreach ($data['colorsAmounts'] as $key => $color) {
                if($color['checked']){
                    $newItem->colors()->syncWithoutDetaching([
                        $color['id'] => [
                            'count' => $color['value'],
                        ]
                    ]);
                }
            }

            DB::commit();
            return $newItem->id ?
                 \back()->with('success', 'Item was created successfully')
                 : \back()->with(
                    'failure',
                    'Something went wrong! Item could not be created',
                );
        } catch (\Throwable $th) {
            DB::rollBack();
            return $th;
            return \back()->with(
                'failure',
                'Something went wrong! Item could not be created',
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show(Item $item)
    {
        return Inertia::render('Admin/Items/Show', [
            'title' => "Items",
            'sub_title' => ' / '.$item->en_name,
            'routeBaseName' => 'admin.items',
            'item' => $item->load('subGroup','pictures' , 'colors'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {
        $subGroups = SubGroup::all();
        $colors = Color::all();

        return Inertia::render('Admin/Items/Edit', [
            'title' => "Items",
            'sub_title' => ' / Edit Item',
            'routeBaseName' => 'admin.items',
            'item' => $item->load('subGroup','pictures' , 'colors'),
            'subGroups' => $subGroups,
            'colors'  => $colors
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateItemRequest $request, Item $item)
    {
        $data = $request->validated();
        $itemData = array(
            'en_name' => $data['en_name'],
            'ar_name' => $data['ar_name'],
            'price' => $data['price'],
            'en_description' => $data['en_description'],
            'ar_description' => $data['ar_description'],
            'sub_group_id' => $data['sub_group_id']
        );

        DB::beginTransaction();
        try {
            $item->fill($itemData);

            $updated = $item->save();

            // save pictures
            if($request->hasfile('pictures')){
                foreach ($request->file('pictures') as $key => $image) {
                    if ($image && $image->isFile()) {
                        $imagePath = $image->storePublicly('items');

                        $newImage = ItemPicture::Create(array('item_id' => $item->id,'name'=> $imagePath, 'default' => $key == 0 ? 1 : 0));

                    }
                }
            }

            // save the amount depending on the colors
            foreach ($data['colorsAmounts'] as $key => $color) {
                if($color['checked']){
                    $item->colors()->syncWithoutDetaching([
                        $color['id'] => [
                            'count' => $color['value'],
                        ]
                    ]);
                }
            }

            DB::commit();
            return $updated ?
                 \back()->with('success', 'Item was updated successfully')
                 : \back()->with(
                    'failure',
                    'Something went wrong! Item could not be updated',
                );
        } catch (\Throwable $th) {
            DB::rollBack();
            return $th;
            return \back()->with(
                'failure',
                'Something went wrong! Item could not be created',
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        $deleted = $item->delete();

        return $deleted
            ? \redirect()
                ->route('admin.items.index')->with('success', 'Item was deleted successfully')
            : \back()->with('failure', "Item doesn't exist");
    }
}
