<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Collection<int, User>
     */
    public function index(): Collection
    {
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     * @reuturn void
     */
    public function store(Request $request): void
    {
        return;
    }

    /**
     * Display the specified resource.
     * @reuturn void
     */
    public function show(User $user): void
    {
        return;
    }

    /**
     * Update the specified resource in storage.
     * @reuturn void
     */
    public function update(Request $request, User $user): void
    {
        return;
    }

    /**
     * Remove the specified resource from storage.
     * @reuturn void
     */
    public function destroy(User $user): void
    {
        return;
    }
}
