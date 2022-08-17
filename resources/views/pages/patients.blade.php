@extends('layouts.page')
@section('page_title', 'Patients')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/patients">Patients</a></li>
@endsection
@section('content')
    <patients-page :_auth="{{ Auth::user()->toJson() }}"></patients-page>
@endsection
