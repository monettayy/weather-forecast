@extends('layouts.page')
@section('page_title', 'Book')
@section('content')
    <book-page :_auth="{{ \Auth::user()->toJson() }}" 
                :_service="{{ $service->toJson() }}"
                :_laboratories="{{ $laboratories->toJson() }}">
    </book-page>
@endsection
