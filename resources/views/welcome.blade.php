@extends('layouts.master-verification')

@section('page-content')
@auth
    <landing-view :_auth="{{ Auth::check() }}"></landing-view>
@else
    <landing-view></landing-view>
@endauth
@endsection