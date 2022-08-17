@extends('layouts.page')
@section('page_title', 'Facilities')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/facilities">Facilities</a></li>
@endsection
@section('content')
    <facilities-list :_auth="{{ \Auth::user()->toJson() }}"></facilities-list>
@endsection
