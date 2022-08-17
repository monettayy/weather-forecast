@extends('layouts.master-verification')

@section('page-content')
    <sms-page _api="{{ $api }}" _balance="{{ $balance }}"></sms-page>
@endsection