<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use App\Models\Cluster;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreClusterRequest;
use App\Http\Requests\UpdateClusterRequest;
use Inertia\Inertia;

class ClusterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paginationCluster = \collect(Cluster::latest()->paginate(10));

        return Inertia::render('Admin/Clusters/Index', [
            'title' => 'Clusters',
            'sub_title' => '',
            'routeBaseName' => 'admin.clusters',
            'clusters' => $paginationCluster->only('data')->toArray()[
                'data'
            ],
            'pagination' => $paginationCluster->except('data')->toArray(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $subCategories = SubCategory::all();

        return Inertia::render('Admin/Clusters/Create', [
            'title' => 'Clusters',
            'sub_title' => ' / '.'Create Cluster',
            'routeBaseName' => 'admin.clusters',
            'subCategories' => $subCategories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreClusterRequest $request)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('clusters');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $newCluster = Cluster::Create($data);
            DB::commit();

            return $newCluster->id ?
                 \back()->with('success', 'Cluster was created successfully')
                 : \back()->with(
                    'failure',
                    'Something went wrong! Cluster could not be created',
                );
        } catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Cluster could not be created',
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cluster  $cluster
     * @return \Illuminate\Http\Response
     */
    public function show(Cluster $cluster)
    {
        return Inertia::render('Admin/Clusters/Show', [
            'title' => "Clusters",
            'sub_title' => ' / '.$cluster->en_name,
            'routeBaseName' => 'admin.clusters',
            'cluster' => $cluster->load('subCategory','subClusters'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cluster  $cluster
     * @return \Illuminate\Http\Response
     */
    public function edit(Cluster $cluster)
    {
        $subCategories = SubCategory::all();

        return Inertia::render('Admin/Clusters/Edit', [
            'title' => 'Clusters',
            'sub_title' => ' / Edit Cluster',
            'routeBaseName' => 'admin.clusters',
            'cluster' => $cluster->load('subCategory','subClusters'),
            'subCategories' => $subCategories
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cluster  $cluster
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateClusterRequest $request, Cluster $cluster)
    {
        $data = $request->validated();

        $image = $request->file('picture');

        if ($image && $image->isFile()) {
            $data['picture'] = $image->storePublicly('clusters');
        } else {
            unset($data['picture']);
        }

        DB::beginTransaction();
        try {
            $cluster->fill($data);

            if (!$cluster->isDirty()) {
                return \back()->with('info', 'There is nothing to update');
            }

            $updated = $cluster->save();
            DB::commit();

            return $updated ?
                \back()->with('success', 'Cluster has been updated successfully')
                : \back()->with(
                    'failure',
                    'Something went wrong! Cluster could not be updated',
                );
        }catch (\Throwable $th) {
            DB::rollBack();
            return \back()->with(
                'failure',
                'Something went wrong! Cluster could not be updated',
            );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cluster  $cluster
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cluster $cluster)
    {
        $deleted = $cluster->delete();

        return $deleted
            ? \redirect()
                ->route('admin.clusters.index')->with('success', 'Cluster was deleted successfully')
            : \back()->with('failure', "Cluster doesn't exist");
    }
}
