<?php

namespace App\Http\Controllers;

use App\Models\UserMovie;
use Illuminate\Http\Request;

class IsFavouriteController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $isFavourite = UserMovie::where('user_id', $request->id)->where('movie_id', $request->movie_id)->exists();
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
