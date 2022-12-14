<?php

namespace App\Http\Controllers;

use App\Models\UserMovie;
use Illuminate\Http\Request;

class DeleteFavouriteController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $isFavourite = UserMovie::where('user_id', $request->userId)->where('movie_id', $request->movieId)->delete();
        if ($isFavourite) {
            return response()->json([
                'message' => 'true'
            ]);
        } else {
            return response()->json([
                'message' => 'false'
            ]);
        }
    }
}
