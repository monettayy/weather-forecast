@extends('layouts.page')
@section('page_title', 'Services')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/services">Services</a></li>
@endsection
@section('content')
    <services-list :_auth="{{ \Auth::user()->toJson() }}"></services-list>
@endsection
