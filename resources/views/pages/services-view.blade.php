@extends('layouts.page')
@section('page_title', 'Services')
@section('breadcrumbs')
    <li class="breadcrumb-item"><a href="/services">Services</a></li>
    <li class="breadcrumb-item active"><a href="/services/{{ $service->code }}">{{ $service->name }}</a></li>
@endsection
@section('content')
    <services-view :_auth="{{ \Auth::user()->toJson() }}" :_service="{{ $service->toJson() }}" ></services-view>
@endsection
