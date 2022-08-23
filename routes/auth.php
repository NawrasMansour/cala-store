
<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgotPasswordController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/signup', [AuthController::class, 'signup'])->name('signup');
Route::post('/signup', [AuthController::class, 'postSignup'])->name(
    'signup.attempt',
);
Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'postLogin'])->name(
    'login.attempt',
);
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
