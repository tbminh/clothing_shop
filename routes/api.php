<?php

use App\Http\Controllers\Auth\RegisterController;
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
Route::post('/register',[RegisterController::class,'registerd']);
Route::post('/login',[RegisterController::class,'login']);

Route::get('/use',[UserController::class, 'index']);
