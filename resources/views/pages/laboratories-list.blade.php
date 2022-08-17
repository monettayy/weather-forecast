@extends('layouts.page')
@section('page_title', 'Laboratories')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/laboratories">Laboratories</a></li>
@endsection
@section('content')
    <laboratories-list :_auth="{{ \Auth::user()->toJson() }}"></laboratories-list>
@endsection
