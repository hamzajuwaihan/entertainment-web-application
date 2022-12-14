<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Post;
use App\Models\Comment;
use App\Models\User;
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
        $movie = Movie::find($request->id);
        $posts = Post::where('movie_id', $request->id)->where('status','approved')->get();
        $posts->map(function ($post) {
            $post->comments = Comment::where('post_id', $post->id)->get();

            return $post;
        });
        $posts->map(function ($post) {
            $post->user = User::find($post->user_id);
            return $post;
        });

        $posts->map(function ($post) {
            $post->user = User::find($post->user_id);
           
            return $post;
        });
        $posts->map(function ($post) {
            $post->comments->map(function ($comment) {
                $comment->user = User::find($comment->user_id);
                return $comment;
            });
            return $post;
        });
        return response()->json([
            'movie' => $movie,
            'posts' => $posts
        ]);


    }
}
