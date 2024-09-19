@extends('layouts.main')

@section('title', 'Nosotros')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-12">
            <x-nav> </x-nav>
            <h1 class="text-center mb-3">Listado de peliculas</h1>
            <div class="mb-3">
                <a href="{{ route('movies.create.form')}}"> Publicar una nueva pelicula</a>
            </div>


            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Fecha de estreno</th>
                        <th>Acciones</th>
                    </tr>
                    @foreach ($movies as $movie)
                        <tr>
                            <td>{{$movie->movie_id}}</td>
                            <td>{{$movie->title}}</td>
                            <td>{{$movie->price}}</td>
                            <td>{{$movie->release_date}}</td>
                            <td> <a href="{{route('movies.view', ['id' => $movie->movie_id])}}" class="btn btn-primary">Ver
                                    mas</a>
                                <a href="{{route('movies.edit.form')}}" class="btn btn-secondary ms-2"> Editar </a>
                            </td>
                        </tr>

                    @endforeach
                </thead>
            </table>
        </div>
    </div>
</div>


@endsection