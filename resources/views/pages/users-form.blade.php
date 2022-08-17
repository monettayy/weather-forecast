@extends('layouts.page')
@section('page_title', 'Users')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/users">Users</a></li>
    @if(!isset($id))
        <li class="breadcrumb-item active"><a href="/users/create">New</a></li>
    @else
        <li class="breadcrumb-item active"><a href="/users/edit/{{ $id }}">Edit</a></li>
    @endif
@endsection
@section('content')
    @if(!isset($user))
        <users-form :_auth="{{ \Auth::user()->toJson() }}" :_roles="{{ $roles->toJson() }}" :_laboratories="{{ $laboratories->toJson() }}" :_otp_users="{{ $otp_users->toJson() }}" ></users-form>
    @else
        <users-form :_auth="{{ \Auth::user()->toJson() }}" :_roles="{{ $roles->toJson() }}" :_laboratories="{{ $laboratories->toJson() }}" :_otp_users="{{ $otp_users->toJson() }}" :_user="{{ $user->toJson() }}" ></users-form>
    @endif
@endsection
