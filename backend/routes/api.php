<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\DeleteFavouriteController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\FavouriteController;
use App\Http\Controllers\GetUserPostsController;
use App\Http\Controllers\IsFavouriteController;
use App\Http\Controllers\ProfilePicture;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ShowMovie;
use App\Http\Controllers\SingleUserUpdate;
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
Route::resource('topmovies', 'App\Http\Controllers\TopRatedController');

Route::get('movies/search/{title}', 'App\Http\Controllers\MovieController@search');
Route::get('movie/{id}', ShowMovie::class);
Route::post('movies/file/{id}', ProfilePicture::class);
Route::resource('users', Users::class);
Route::resource('post', PostController::class);
Route::resource('favourite', FavouriteController::class);
Route::resource('comment', CommentController::class);
Route::resource('latestMovie', 'App\Http\Controllers\LatestMovieController');
Route::get('isFavourite/{id}/{movie_id}', IsFavouriteController::class);
Route::delete('deleteFavourite', DeleteFavouriteController::class);
Route::put('updateuser/{id}', SingleUserUpdate::class);
Route::get('/user/{id}/posts', GetUserPostsController::class);
