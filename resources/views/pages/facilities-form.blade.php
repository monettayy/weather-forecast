@extends('layouts.page')
@section('page_title', 'Facilities')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/facilities">Facilities</a></li>
    @if(!isset($id))
        <li class="breadcrumb-item active"><a href="/facilities/create">New</a></li>
    @else
        <li class="breadcrumb-item active"><a href="/facilities/edit/{{ $id }}">Edit</a></li>
    @endif
@endsection
@section('content')
    @if(!isset($facility))
        <facilities-form :_auth="{{ \Auth::user()->toJson() }}" :_laboratories="{{ $laboratories->toJson() }}"></facilities-form>
    @else
        <facilities-form :_auth="{{ \Auth::user()->toJson() }}" :_facility="{{ $facility->toJson() }}" :_laboratories="{{ $laboratories->toJson() }}"></facilities-form>
    @endif
@endsection
