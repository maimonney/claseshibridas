@extends('layouts.main')
@section('title', 'Publicar una nueva pelicula')

@section('content')
<div class="container ">
    <div class="row">
        <div class="col-12">
        <h1 class="mb-3">Publicar una pelicula</h1>

        @if ($errors->any())
        <div class="alert alert-danger">
            Hay errores en los datos del formulario. Por favor, revisalos y volvé a intentar
        </div>
        @else
        <p>La pelicula fue agregado</p>
        @endif


        <form action="{{ route('movies.create.process')}}" method="post">
            @csrf
            <div class="mb-3">
            <label for="title" class="form-label"> titulo </label>
            <input
            type="text"
            id="title"
            name="title"
            class="form-control"
            value="{{old('title')}}">
        @error('title')
        <div class="text-danger">
            {{$message}}
        </div>
        @enderror
            </div>

            <div class="mb-3">
                <label for="price" class="form-label"> Price </label>
                <input
                type="text"
                id="price"
                name="price"
                class="form-control"
                value="{{old('price')}}">

                @error('price')
        <div class="text-danger">
            {{$message}}
        </div>
        @enderror
                </div>

                <div class="mb-3">
                    <label for="release_date" class="form-label"> Fecha de estrenoo</label>
                    <input
                    type="date"
                    id="release_date"
                    name="release_date"
                    class="form-control"
                    value="{{old('release_date')}}">

                    @error('release_date')
                    <div class="text-danger">
                        {{$message}}
                    </div>
                    @enderror
                    </div>


                    <div class="mb-3">
                        <label for="synopsis" class="form-label"> Sinopsis </label>
                        <textarea
                        id="synopsis"
                        name="synopsis"
                        class="form-control"
                        value="{{old('synopsis')}}">
                        @error('synopsis')
                        <div class="text-danger">
                            {{$message}}
                        </div>
                        @enderror
                        </textarea>
                    </div>
        <button
        class="btn btn-primary" type="submit">Publicar </button>

        </form>
        </div>


    </div>

</div>
@endsection
