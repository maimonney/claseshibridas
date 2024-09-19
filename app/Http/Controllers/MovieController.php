<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index()
    {
        $allmovies = Movie::all();
        return view('movies.index', [
            'movies' => $allmovies
        ]
        );
    }
    public function view(int $id){
        $movie = Movie::find($id);

        return view('movies.view',[
        'movie'=>$movie
        ]);
    }
    public function createForm () {
        return view('movies.create-form');
    }

    public function creatProcess(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'title' => 'required|min:3|max:255',
            'price' => 'required|numeric',
            'release_date' => 'required',
            'synopsis' => 'required|min:3|max:255'
        ], [
            'title.required' => 'El titulo debe tener un valor',
            'price.required' => 'El precio debe tener un valor',
            'release_date.required' => 'La fecha de estreno debe tener un valor',
            'synopsis.required' => 'La sinopsis debe tener un valor'
        ]);

    
        $input = $request->only(['title', 'price', 'release_date', 'synopsis']);

        Movie::create($input);

        // la funcion "e" previene los ataques de inyeccion de html
        return redirect()
            ->route('movies.index')
            ->with('feedback.message', 'La película <b> "'.e($input['title']). '"</b>se publicó con exito');
} 
public function editform(int $id){
   return view('movies.edit-form' , [
    'movie' => Movie::findOrfail($id)
   ]);
}

public function editProcess(int  $id, Request $request){
    dd($request->all());
}
}
