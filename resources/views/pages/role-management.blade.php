@extends('layouts.page')
@section('page_title', 'Role Management')
@section('breadcrumbs')
    <li class="breadcrumb-item active"><a href="/role-management">Role Management</a></li>
@endsection
@section('content')
    <role-management :_auth="{{ \Auth::user()->toJson() }}" :_roles="{{ $roles->toJson() }}" :_templates="{{ $templates->toJson() }}" :_personnels="{{ $personnels->toJson() }}"></role-management>
@endsection
