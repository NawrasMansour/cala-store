<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\SubGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreSubGroupRequest;
use App\Http\Requests\UpdateSubGroupRequest;
use Inertia\Inertia;


class SubGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paginationSubGroup = \collect(SubGroup::latest()->paginate(10));

        return Inertia::render('Admin/SubGroups/Index', [
            'title' => 'Sub Groups',
            'sub_title' => '',
            'routeBaseName' => 'admin.subGroups',
            'subGroups' => $paginationSubGroup->only('data')->toArray()[
                'data'
            ],
            'pagination' => $paginationSubGroup->except('data')->toArray(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $groups = Group::all();

        return Inertia::render('Admin/SubGroups/Create', [
            'title' => 'Sub Groups',
            'sub_title' => ' / Create Sub Group',
            'routeBaseName' => 'admin.subGroups',
            'groups' => $groups
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSubGroupRequest $request)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('sub_groups');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $newSubGroup = SubGroup::Create($data);
            DB::commit();

            return $newSubGroup->id ?
                 \back()->with('success', 'Sub Group was created successfully')
                 : \back()->with(
                    'failure',
                    'Something went wrong! Sub Group could not be created',
                );
        } catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Sub Group could not be created',
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubGroup  $subGroup
     * @return \Illuminate\Http\Response
     */
    public function show(SubGroup $subGroup)
    {
        return Inertia::render('Admin/SubGroups/Show', [
            'title' => "Sub Groups",
            'sub_title' => ' / '.$subGroup->en_name,
            'routeBaseName' => 'admin.subGroups',
            'subGroup' => $subGroup->load('group','items'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SubGroup  $subGroup
     * @return \Illuminate\Http\Response
     */
    public function edit(SubGroup $subGroup)
    {
        $groups = Group::all();

        return Inertia::render('Admin/SubGroups/Edit', [
            'title' => 'Sub Groups',
            'sub_title' => ' / Edit Sub Group',
            'routeBaseName' => 'admin.subGroups',
            'subGroup' => $subGroup->load('group','items'),
            'groups' => $groups
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubGroup  $subGroup
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSubGroupRequest $request, SubGroup $subGroup)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('sub_groups');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $subGroup->fill($data);

            if (!$subGroup->isDirty()) {
                return \back()->with('info', 'There is nothing to update');
            }

            $updated = $subGroup->save();
            DB::commit();

            return $updated ?
                \back()->with('success', 'Sub Group has been updated successfully')
                : \back()->with(
                    'failure',
                    'Something went wrong! Sub Group could not be updated',
                );
        }catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Sub Group could not be updated',
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubGroup  $subGroup
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubGroup $subGroup)
    {
        $deleted = $subGroup->delete();

        return $deleted
            ? \redirect()
                ->route('admin.subGroups.index')->with('success', 'Sub Group was deleted successfully')
            : \back()->with('failure', "Sub Group doesn't exist");
    }
}
