@extends('layouts.page')
@section('page_title', 'Users')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/users">Users</a></li>
@endsection
@section('content')
    <users-list :_auth="{{ \Auth::user()->toJson() }}"></users-list>
@endsection
