<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Http\Request;

class ShowMovie extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return response()->json(Movie::find($request->id));
        // return response()->json(Post::with('comment'));
    }
}
