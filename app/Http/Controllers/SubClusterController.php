<?php

namespace App\Http\Controllers;

use App\Models\Cluster;
use App\Models\SubCluster;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreSubClusterRequest;
use App\Http\Requests\UpdateSubClusterRequest;
use Inertia\Inertia;

class SubClusterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paginationSubCluster = \collect(SubCluster::latest()->paginate(10));

        return Inertia::render('Admin/SubClusters/Index', [
            'title' => 'Sub Clusters',
            'sub_title' => '',
            'routeBaseName' => 'admin.subClusters',
            'subClusters' => $paginationSubCluster->only('data')->toArray()[
                'data'
            ],
            'pagination' => $paginationSubCluster->except('data')->toArray(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $clusters = Cluster::all();

        return Inertia::render('Admin/SubClusters/Create', [
            'title' => 'sub Clusters',
            'sub_title' => ' / Create Sub Cluster',
            'routeBaseName' => 'admin.subClusters',
            'clusters' => $clusters
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSubClusterRequest $request)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('sub_clusters');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $newSubCluster = SubCluster::Create($data);
            DB::commit();

            return $newSubCluster->id ?
                 \back()->with('success', 'Sub Cluster was created successfully')
                 : \back()->with(
                    'failure',
                    'Something went wrong! Sub Cluster could not be created',
                );
        } catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Sub Cluster could not be created',
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubCluster  $subCluster
     * @return \Illuminate\Http\Response
     */
    public function show(SubCluster $subCluster)
    {
        return Inertia::render('Admin/SubClusters/Show', [
            'title' => "Sub Clusters",
            'sub_title' => ' / '.$subCluster->en_name,
            'routeBaseName' => 'admin.subClusters',
            'subCluster' => $subCluster->load('cluster','groups'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SubCluster  $subCluster
     * @return \Illuminate\Http\Response
     */
    public function edit(SubCluster $subCluster)
    {
        $clusters = Cluster::all();

        return Inertia::render('Admin/SubClusters/Edit', [
            'title' => 'Sub Clusters',
            'sub_title' => ' / Edit Sub Cluster',
            'routeBaseName' => 'admin.subClusters',
            'subCluster' => $subCluster->load('cluster','groups'),
            'clusters' => $clusters
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubCluster  $subCluster
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSubClusterRequest $request, SubCluster $subCluster)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('sub_clusters');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $subCluster->fill($data);

            if (!$subCluster->isDirty()) {
                return \back()->with('info', 'There is nothing to update');
            }

            $updated = $subCluster->save();
            DB::commit();

            return $updated ?
                \back()->with('success', 'Sub Cluster has been updated successfully')
                : \back()->with(
                    'failure',
                    'Something went wrong! Sub Cluster could not be updated',
                );
        }catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Sub Cluster could not be updated',
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubCluster  $subCluster
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubCluster $subCluster)
    {
        $deleted = $subCluster->delete();

        return $deleted
            ? \redirect()
                ->route('admin.subClusters.index')->with('success', 'Sub Cluster was deleted successfully')
            : \back()->with('failure', "Sub Cluster doesn't exist");
    }
}
