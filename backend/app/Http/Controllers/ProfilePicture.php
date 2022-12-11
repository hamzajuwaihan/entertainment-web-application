<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfilePicture extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {

        if ($request->hasFile('image') && $request->hasFile('poster')) {
            $file = $request->file('image');
            $extension = time() . $request->title . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('images'), $extension);
            $posterFile = $request->file('poster');
            $posterExtension = time() . $request->title . 'poster' . '.' . $posterFile->getClientOriginalExtension();
            $posterFile->move(public_path('images'), $posterExtension);

            DB::table('movies')
                ->where('id', $request->id)
                ->update([
                    'genre' => $request->genre,
                    'image' => $extension,
                    'title' => $request->title,
                    'overview' => $request->overview,
                    'popularity' => $request->popularity,
                    'release_date' => $request->release_date,
                    'runtime' => $request->runtime,
                    'rating' => $request->rating,
                    'poster' => $posterExtension,
                ]);
            return response()->json(['message' => 'Movie, image and poster updated successfully'], 200);
        } else if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = time() . $request->title . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('images'), $extension);

            DB::table('movies')
                ->where('id', $request->id)
                ->update([
                    'genre' => $request->genre,
                    'image' => $extension,
                    'title' => $request->title,
                    'overview' => $request->overview,
                    'popularity' => $request->popularity,
                    'release_date' => $request->release_date,
                    'runtime' => $request->runtime,
                    'rating' => $request->rating,
                ]);
            return response()->json(['message' => 'Movie and image updated successfully'], 200);
        } else if ($request->hasFile('poster')) {
            $posterFile = $request->file('poster');
            $posterExtension = time() . $request->title . '.' . $posterFile->getClientOriginalExtension();
            $posterFile->move(public_path('images'), $posterExtension);

            DB::table('movies')
                ->where('id', $request->id)
                ->update([
                    'genre' => $request->genre,
                    'poster' => $posterExtension,
                    'title' => $request->title,
                    'overview' => $request->overview,
                    'popularity' => $request->popularity,
                    'release_date' => $request->release_date,
                    'runtime' => $request->runtime,
                    'rating' => $request->rating,
                ]);
            return response()->json(['message' => 'Movie and poster updated successfully'], 200);
        } else {
            DB::table('movies')
                ->where('id', $request->id)
                ->update([
                    'genre' => $request->genre,
                    'title' => $request->title,
                    'overview' => $request->overview,
                    'popularity' => $request->popularity,
                    'release_date' => $request->release_date,
                    'runtime' => $request->runtime,
                    'rating' => $request->rating,
                ]);
            return response()->json(['message' => 'Movie updated successfully']);
        }
    }
}
