@extends('layouts.page')
@section('page_title', 'Facility Requests')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/facility-requests">Facility Requests</a></li>
@endsection
@section('content')
    <facility-request :_auth="{{ \Auth::user()->toJson() }}" 
                    :_laboratories="{{ $laboratories->toJson() }}" 
                    :_facility_request="{{ $facility_request->toJson() }}">
    </facility-request>
@endsection
