@extends('layouts.page')
@section('page_title', 'Schedules')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/schedules">Schedules</a></li>
@endsection
@section('content')
    <schedule-list  :_auth="{{ \Auth::user()->toJson() }}" 
                    :_services="{{ $services->toJson() }}" 
                    :_laboratories="{{ $laboratories->toJson() }}"
                    :_facility_request="{{ $facility_request->toJson() }}">
    </schedule-list>
@endsection
