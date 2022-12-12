<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Movie;

class MovieController extends Controller
{

     /**

     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Movie::all());
        // return response()->json(Movie::orderBy('rating', 'DESC')->get());
    }
    public function view()
    {
        return response()->json(Movie::orderBy('rating', 'DESC')->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $movie = Movie::create($request->all());
        return response()->json($movie, 201);
    }

    /**
     * Display the specified resource.
     *

     * @param  \App\Models\movie  $movie
     * @return \Illuminate\Http\Response
     */
    
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *

     * @param  \App\Models\movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(Movie $movie)

    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $movie)
    {
        // movie in the parameter is for id
        $movie = Movie::find($movie);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy($movie_id)
    {
        $movie = Movie::find($movie_id);
        $movie->delete();
        return response()->json(Movie::all());
    }
    public function search($searchTerm)
    {
        return response()->json(Movie::query()
            ->where('title', 'LIKE', "%{$searchTerm}%")
            ->orWhere('genre', 'LIKE', "%{$searchTerm}%")
            ->get());
    }
}

