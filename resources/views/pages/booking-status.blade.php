@extends('layouts.page')
@section('page_title', 'Booking Status')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/bookings">Bookings</a></li>
    <li class="breadcrumb-item active"><a href="/bookings/{{ $booking->code }}">Booking Status</a></li>
@endsection
@section('content')
    <booking-status :_auth="{{ \Auth::user()->toJson() }}" :_booking="{{ $booking->toJson() }}"></booking-status>
@endsection
