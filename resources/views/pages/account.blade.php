@extends('layouts.page')
@section('page_title', 'Account')
@section('content')
    <account-page :_auth="{{ \Auth::user()->toJson() }}"></account-page>
@endsection
