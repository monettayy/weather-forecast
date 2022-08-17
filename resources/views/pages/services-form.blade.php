@extends('layouts.page')
@section('page_title', 'Services')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/services">Services</a></li>
    @if(!isset($id))
        <li class="breadcrumb-item active"><a href="/services/create">New</a></li>
    @else
        <li class="breadcrumb-item active"><a href="/services/edit/{{ $id }}">Edit</a></li>
    @endif
@endsection
@section('content')
    @if(!isset($service))
        <services-form :_auth="{{ \Auth::user()->toJson() }}"></services-form>
    @else
        <services-form :_auth="{{ \Auth::user()->toJson() }}" :_service="{{ $service->toJson() }}" ></services-form>
    @endif
@endsection
