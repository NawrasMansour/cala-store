<?php

namespace App\Http\Controllers;

use App\Models\Category;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paginationCategories = \collect(Category::latest()->paginate(10));

        return Inertia::render('Admin/Categories/Index', [
            'title' => 'Categories',
            'sub_title' => '',
            'routeBaseName' => 'admin.categories',
            'categories' => $paginationCategories->only('data')->toArray()[
                'data'
            ],
            'pagination' => $paginationCategories->except('data')->toArray(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Categories/Create', [
            'title' => 'Categories',
            'sub_title' => ' / Create Category',
            'routeBaseName' => 'admin.categories',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('categories');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $newCategory = Category::Create($data);
            DB::commit();

            return $newCategory->id ?
                 \back()->with('success', 'Category was created successfully')
                 : \back()->with(
                    'failure',
                    'Something went wrong! Category could not be created',
                );
        } catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Category could not be created',
            );
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return Inertia::render('Admin/Categories/Show', [
            'title' => "Categories",
            'sub_title' => ' / '.$category->en_name,
            'routeBaseName' => 'admin.categories',
            'category' => $category->load('subCategories'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return Inertia::render('Admin/Categories/Edit', [
            'title' => 'Categories',
            'sub_title' => ' / Edit Category',
            'routeBaseName' => 'admin.categories',
            'category' => $category->load('subCategories'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('categories');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $category->fill($data);

            if (!$category->isDirty()) {
                return \back()->with('info', 'There is nothing to update');
            }

            $updated = $category->save();
            DB::commit();

            return $updated ?
                \back()->with('success', 'Category has been updated successfully')
                : \back()->with(
                    'failure',
                    'Something went wrong! Category could not be updated',
                );
        }catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Category could not be updated',
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $deleted = $category->delete();

        return $deleted
            ? \redirect()
                ->route('admin.categories.index')->with('success', 'Category was deleted successfully')
            : \back()->with('failure', "Category doesn't exist");
    }
}
