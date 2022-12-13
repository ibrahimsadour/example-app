<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users\PostController;
use App\Http\Controllers\Front\WebsitePagesController;

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


Route::get('user',  [PostController::class ,'show']);


Route::group( [
    'prefix' => '/'
],function() {

    /** Home Page route 
    * @todo URL:www.DomeinName.com
    * @todo Route name : site.index
    */
    Route::get('',[WebsitePagesController::class ,'home_page']) -> name('site.index');

    Route::get('about',[WebsitePagesController::class ,'about_page']) -> name('about.index');
    




});



