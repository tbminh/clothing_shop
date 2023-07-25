<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TextController;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::prefix('api')->group(function () {
//     // Route::get('/sp', [TextController::class, 'index']);
//     Route::get('/sp', 'App\Http\Controllers\Api\TextController@index');
// });
Route::get('/use', [UserController::class, 'index']);
Route::get('/use/{id}', [UserController::class, 'show']);

Route::apiResource('/user', UserController::class);