<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\UserController;

Route::prefix("v1")->group(function () {
    Route::apiResource('users', UserController::class);
});
