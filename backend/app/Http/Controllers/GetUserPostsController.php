<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Post;
use Illuminate\Http\Request;

class GetUserPostsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // $request->id
        $posts = Post::where('user_id', $request->id)->where('status', 'approved')->get();
        $posts->map(function ($post) {
            $post->movie = Movie::find($post->movie_id);
            return $post;
        });
        return response()->json($posts);
    }
}
