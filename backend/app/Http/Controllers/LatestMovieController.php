<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class LatestMovieController extends Controller
{
    public function index()
    {
        return response()->json(Movie::orderBy('release_date', 'DESC')->get());
    }
}
