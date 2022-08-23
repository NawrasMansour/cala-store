<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreGroupRequest;
use App\Http\Requests\UpdateGroupRequest;
use App\Models\SubCluster;
use Inertia\Inertia;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paginationGroup = \collect(Group::latest()->paginate(10));

        return Inertia::render('Admin/Groups/Index', [
            'title' => 'Groups',
            'sub_title' => '',
            'routeBaseName' => 'admin.groups',
            'groups' => $paginationGroup->only('data')->toArray()[
                'data'
            ],
            'pagination' => $paginationGroup->except('data')->toArray(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $subClusters = SubCluster::all();

        return Inertia::render('Admin/Groups/Create', [
            'title' => 'Groups',
            'sub_title' => ' / Create Group',
            'routeBaseName' => 'admin.groups',
            'subClusters' => $subClusters
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGroupRequest $request)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('groups');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $newGroup = Group::Create($data);
            DB::commit();

            return $newGroup->id ?
                 \back()->with('success', 'Group was created successfully')
                 : \back()->with(
                    'failure',
                    'Something went wrong! Group could not be created',
                );
        } catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Group could not be created',
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function show(Group $group)
    {
        return Inertia::render('Admin/Groups/Show', [
            'title' => "Groups",
            'sub_title' => ' / '.$group->en_name,
            'routeBaseName' => 'admin.groups',
            'group' => $group->load('subCluster','subGroups'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function edit(Group $group)
    {
        $subClusters = SubCluster::all();

        return Inertia::render('Admin/Groups/Edit', [
            'title' => 'Groups',
            'sub_title' => ' / Edit group',
            'routeBaseName' => 'admin.groups',
            'group' => $group->load('subCluster','subGroups'),
            'subClusters' => $subClusters
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGroupRequest $request, Group $group)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('groups');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $group->fill($data);

            if (!$group->isDirty()) {
                return \back()->with('info', 'There is nothing to update');
            }

            $updated = $group->save();
            DB::commit();

            return $updated ?
                \back()->with('success', 'Group has been updated successfully')
                : \back()->with(
                    'failure',
                    'Something went wrong! Group could not be updated',
                );
        }catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Group could not be updated',
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function destroy(Group $group)
    {
        $deleted = $group->delete();

        return $deleted
            ? \redirect()
                ->route('admin.groups.index')->with('success', 'Group was deleted successfully')
            : \back()->with('failure', "Group doesn't exist");
    }
}
