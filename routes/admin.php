<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DashboardController;
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
Route::group( [
    'prefix' => 'admin'
],function() {

    /** Home Page route 
    * @todo URL:www.DomeinName.com
    * @todo Route name : site.index
    */
    Route::get('',[DashboardController::class ,'show']);



});

    Route::get('user',  [DashboardController::class ,'show']);

