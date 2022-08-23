<?php

namespace App\Http\Controllers;

use App\Models\Color;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreColorRequest;
use App\Http\Requests\UpdateColorRequest;
use Inertia\Inertia;

class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paginationColor = \collect(Color::latest()->paginate(10));
        return Inertia::render('Admin/Colors/Index', [
            'title' => 'Colors',
            'sub_title' => '',
            'routeBaseName' => 'admin.colors',
            'colors' => $paginationColor->only('data')->toArray()[
                'data'
            ],
            'pagination' => $paginationColor->except('data')->toArray(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Colors/Create', [
            'title' => 'Colors',
            'sub_title' => ' / Create Color',
            'routeBaseName' => 'admin.colors',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreColorRequest $request)
    {
        $data = $request->validated();

        DB::beginTransaction();
        try {
            $newColor = Color::Create($data);
            DB::commit();

            return $newColor->id ?
                 \back()->with('success', 'Color was created successfully')
                 : \back()->with(
                    'failure',
                    'Something went wrong! Color could not be created',
                );
        } catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Color could not be created',
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Color  $color
     * @return \Illuminate\Http\Response
     */
    public function show(Color $color)
    {
        return Inertia::render('Admin/Colors/Show', [
            'title' => "Colors",
            'sub_title' => ' / '.$color->en_name,
            'routeBaseName' => 'admin.colors',
            'color' => $color,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Color  $color
     * @return \Illuminate\Http\Response
     */
    public function edit(Color $color)
    {
        return Inertia::render('Admin/Colors/Edit', [
            'title' => "Colors",
            'sub_title' => ' / Edit Color',
            'routeBaseName' => 'admin.colors',
            'color' => $color,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Color  $color
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateColorRequest $request, Color $color)
    {
        $data = $request->validated();

        DB::beginTransaction();
        try {
            $color->fill($data);

            if (!$color->isDirty()) {
                return \back()->with('info', 'There is nothing to update');
            }

            $updated = $color->save();
            DB::commit();

            return $updated ?
                \back()->with('success', 'Color has been updated successfully')
                : \back()->with(
                    'failure',
                    'Something went wrong! Color could not be updated',
                );
        }catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Color could not be updated',
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Color  $color
     * @return \Illuminate\Http\Response
     */
    public function destroy(Color $color)
    {
        $deleted = $color->delete();

        return $deleted
            ? \redirect()
                ->route('admin.colors.index')->with('success', 'Color was deleted successfully')
            : \back()->with('failure', "Color doesn't exist");
    }
}
