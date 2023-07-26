<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */
    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    public function login(Request $request){
        $credentials = $request->getCredentials();
        // if (!Auth::validate($credentials)){
        //     return response()->json([
        //         'message' => 'Email hoặc mật khẩu không đúng',
        //         'data' => $credentials->errors(),
        //         'encode' => 1,
        //     ], 400);
        // }  
        return response()->json([
            'message' => 'Đăng nhập thành công',
            // 'data' => [
            //     'email' => $request->email,
            //     'password' => $request->password,
            // ],
            'data'=> "",
            'encode' => 0,
        ],200);
    }
}
