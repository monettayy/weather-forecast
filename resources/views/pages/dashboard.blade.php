@extends('layouts.page')
@section('page_title', 'Dashboard')

@section('content')
@if(\Auth::user()->role_id != 3 && \Auth::user()->role_id != 1 && \Auth::user()->role_id != 4)
    <dashboard-page :_auth="{{ Auth::user()->toJson() }}"></dashboard-page>
@else
    <dashboard-admin :_auth="{{ Auth::user()->toJson() }}"></dashboard-admin>
@endif
@endsection