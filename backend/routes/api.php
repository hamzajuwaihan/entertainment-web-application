<?php
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfilePicture;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ShowMovie;
use App\Http\Controllers\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('register', RegisterController::class);
Route::post('login', LoginController::class);
Route::resource('movies', 'App\Http\Controllers\MovieController');
Route::get('movies/search/{title}', 'App\Http\Controllers\MovieController@search');
Route::get('movie/{id}', ShowMovie::class);
Route::post('movies/file/{id}', ProfilePicture::class);
Route::resource('users', Users::class);

