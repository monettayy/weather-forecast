@extends('layouts.page')
@section('page_title', 'Developers Option')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/developers">Developers Option</a></li>
@endsection
@section('content')
    <developers :_auth="{{ \Auth::user()->toJson() }}"></developers>
@endsection
