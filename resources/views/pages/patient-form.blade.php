@extends('layouts.page')
@section('page_title', 'Edit Patients')
@section('content')
    <patient-form :_auth="{{ Auth::user()->toJson() }}" :_booking="{{ $booking->toJson() }}" :_personnels="{{ $personnel->toJson()}}"></patient-form>
@endsection
