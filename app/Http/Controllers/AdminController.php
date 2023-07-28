<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        // return response()->json($request, 200);
        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();
            if ($user->roles === 'admin') {
                // For admin
                $token = $user->createToken('authToken', ['admin'])->plainTextToken;
                return response()->json([
                    'token' => $token,
                    'message' => 'Đăng nhập thành công',
                    'data' => $user,
                    'encode' => 0,
                ], 200);
            }else {
                return response()->json([
                    'token' => '',
                    'data' => '',
                    'message' => 'Chỉ cho phép tài khoản admin truy cập',
                    'encode' => 1,
                ], 200);
            }
        }
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }


    public function getuser()
    {
        $users = User::all();
        return response()->json([
            'message' => 'Get users success',
            'data' => $users,
            'encode' => 0,
        ], 200);
    }
}