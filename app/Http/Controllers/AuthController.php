<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        // return response()->json($request, 200);
        if (Auth::attempt($request->only('email', 'password'))) {
            // Authentication successful
            $user = Auth::user();
            // Generate an authentication token (optional)
            $token = $user->createToken('authToken', ['user'])->plainTextToken;
            // Return the token or perform any other action
            return response()->json([
            'token' => $token, 
            'message' => 'Đăng nhập thành công',
            'data' =>  $user,
            'encode' => 0,], 200);
        }    
        // Authentication failed
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }
    public function register(Request $request)
    {
      
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()){
            return response()->json([
                'message' => 'Xác nhận mật khẩu không đúng',
                'data' => $validator->errors(),
                'encode' => 1,
            ], 400);         
        }   
    
            $user = new User([
                'name' => $request->name,
                'email' => $request->email,
                'roles' => 'user',
                'phone_number' => $request->phone_number,
                'password' => bcrypt($request->password),
            ]);
            $user->save();
            $token = $user->createToken('authToken')->plainTextToken;
        return response()->json([
            'token' => $token, 
            'message' => 'Đăng ký thành công',
            'data' => $user,
            'encode' => 0,
        ], 200);
    }
}
