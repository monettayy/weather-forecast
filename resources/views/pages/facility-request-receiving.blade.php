@extends('layouts.page')
@section('page_title', 'Facility Request Receiving')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/facility-request/receiving/">Facility Request Receiving</a></li>
@endsection
@section('content')
    <facility-request-receiving :_auth="{{ \Auth::user()->toJson() }}" :_facility_request="{{ $facility_request->toJson() }}"></facility-request-receiving>
@endsection
