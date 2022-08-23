<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreSubCategoryRequest;
use App\Http\Requests\UpdateSubCategoryRequest;
use Inertia\Inertia;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paginationSubCategories = \collect(SubCategory::latest()->paginate(10));

        return Inertia::render('Admin/SubCategories/Index', [
            'title' => 'Sub Categories',
            'sub_title' => '',
            'routeBaseName' => 'admin.subCategories',
            'subCategories' => $paginationSubCategories->only('data')->toArray()[
                'data'
            ],
            'pagination' => $paginationSubCategories->except('data')->toArray(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();

        return Inertia::render('Admin/SubCategories/Create', [
            'title' => 'Sub Categories',
            'sub_title' => ' / Create Sub Category',
            'routeBaseName' => 'admin.subCategories',
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSubCategoryRequest $request)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('sub_categories');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $newSubCategory = SubCategory::Create($data);
            DB::commit();

            return $newSubCategory->id ?
                 \back()->with('success', 'Sub Category was created successfully')
                 : \back()->with(
                    'failure',
                    'Something went wrong! Sub Category could not be created',
                );
        } catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Sub Category could not be created',
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function show(SubCategory $subCategory)
    {
        return Inertia::render('Admin/SubCategories/Show', [
            'title' => "Sub Categories",
            'sub_title' => ' / '.$subCategory->en_name,
            'routeBaseName' => 'admin.subCategories',
            'subCategory' => $subCategory->load('category','clusters'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(SubCategory $subCategory)
    {
        $categories = Category::all();

        return Inertia::render('Admin/SubCategories/Edit', [
            'title' => 'Sub Categories',
            'sub_title' => ' / Edit Sub Category',
            'routeBaseName' => 'admin.subCategories',
            'subCategory' => $subCategory->load('category','clusters'),
            'categories' => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSubCategoryRequest $request, SubCategory $subCategory)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('sub_categories');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $subCategory->fill($data);

            if (!$subCategory->isDirty()) {
                return \back()->with('info', 'There is nothing to update');
            }

            $updated = $subCategory->save();
            DB::commit();

            return $updated ?
                \back()->with('success', 'Sub Category has been updated successfully')
                : \back()->with(
                    'failure',
                    'Something went wrong! Sub Category could not be updated',
                );
        }catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Sub Category could not be updated',
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubCategory $subCategory)
    {
        $deleted = $subCategory->delete();

        return $deleted
            ? \redirect()
                ->route('admin.subCategories.index')->with('success', 'Sub Category was deleted successfully')
            : \back()->with('failure', "Sub Category doesn't exist");
    }
}
