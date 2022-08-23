<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\ClusterController;
use App\Http\Controllers\SubClusterController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\SubGroupController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ItemPictureController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\ProductShopController;
use App\Http\Controllers\AuthController;


include 'utils.php';


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('homepage');
});

Route::get('/home', [HomeController::class, 'index'])->name(
            'homepage',
        );
Route::get('/contact', [HomeController::class, 'contact'])->name(
            'conact',
        );

Route::resource('products', ProductShopController::class)
    ->only(['index', 'show'])
    ->names([
        'index' => 'products.shop.index',
        'show' => 'products.shop.show',
    ]);

Route::middleware(['auth']) //
    ->prefix('admin')
    ->group(function () {
        Route::get('/', function () {
            return redirect()->route('admin.dashboard');
        });

        Route::get('/home', DashboardController::class)->name(
            'admin.dashboard',
        );

        Route::resource('categories', CategoryController::class)->names(
            mapResourceNames('admin.categories'),
        );

        Route::resource('subCategories', SubCategoryController::class)->names(
            mapResourceNames('admin.subCategories'),
        );

        Route::resource('clusters', ClusterController::class)->names(
            mapResourceNames('admin.clusters'),
        );

        Route::resource('subClusters', SubClusterController::class)->names(
            mapResourceNames('admin.subClusters'),
        );

        Route::resource('groups', GroupController::class)->names(
            mapResourceNames('admin.groups'),
        );

        Route::resource('subGroups', SubGroupController::class)->names(
            mapResourceNames('admin.subGroups'),
        );

        Route::resource('items', ItemController::class)->names(
            mapResourceNames('admin.items'),
        );

        Route::resource('itemPictures', ItemPictureController::class)->names(
            mapResourceNames('admin.itemPictures'),
        );

        Route::resource('colors', ColorController::class)->names(
            mapResourceNames('admin.colors'),
        );


    });


require __DIR__ . '/auth.php';