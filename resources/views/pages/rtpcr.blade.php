@extends('layouts.page')
@section('page_title', 'RT-PCR')
@section('content')
    <rtpcr :_booking="{{ $booking->toJson() }}"></rtpcr>
@endsection
