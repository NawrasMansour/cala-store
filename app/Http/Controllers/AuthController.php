<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function signup()
    {
        return Inertia::render('Auth/Signup', [
            'title' => 'Create an Account',
        ]);
    }

    public function postSignup(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $name = $request->input('name');

        $user = User::create([
            'name' => $name,
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        Auth::login($user);
        $request->session()->regenerate();
        $user->generateAPIToken();

        return \redirect()
            ->intended()
            ->with('success', 'You have sucessfully signed up');
    }

    public function login()
    {
        return Inertia::render('Auth/Login', [
            'title' => 'Welcome Back!',
        ]);
    }

    public function postLogin(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $remember = $request->input('remember');

        if (Auth::attempt($credentials, $remember)) {
            $request->session()->regenerate();
            $request->user()->generateAPIToken();

            return redirect()
                ->intended()
                ->with(
                    'success',
                    'Welcome back! You have successfully logged in',
                );
        }

        return back()->with(
            'failure',
            'The provided credentials do not match our records.',
        );
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return \redirect('login')->with(
            'success',
            'Hope you back soon, You have logged out',
        );
    }
}
