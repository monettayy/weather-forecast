@extends('layouts.page')
@section('page_title', 'Laboratories')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/laboratories">Laboratories</a></li>
    @if(!isset($id))
        <li class="breadcrumb-item active"><a href="/laboratories/create">New</a></li>
    @else
        <li class="breadcrumb-item active"><a href="/laboratories/edit/{{ $id }}">Edit</a></li>
    @endif
@endsection
@section('content')
    @if(!isset($laboratory))
        <laboratories-form :_auth="{{ \Auth::user()->toJson() }}" :_services="{{ $services->toJson() }}"></laboratories-form>
    @else
        <laboratories-form :_auth="{{ \Auth::user()->toJson() }}" :_laboratory="{{ $laboratory->toJson() }}" :_services="{{ $services->toJson() }}"></laboratories-form>
    @endif
@endsection
