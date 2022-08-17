@extends('layouts.page')
@section('page_title', 'Bookings')
@section('content')
    <bookings-page :_auth="{{ \Auth::user()->toJson() }}" 
                    :_services="{{ $services->toJson() }}" 
                    :_laboratories="{{ $laboratories->toJson() }}">
    </bookings-page>
@endsection
