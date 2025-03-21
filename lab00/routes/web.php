<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ForumPostController;
use App\Http\Controllers\ForumReplyController;
use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/', [ForumPostController::class, 'home'])->name('forum_posts.index');

Route::get('/about', function () {
    return view('about');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/user/{userName}', function ($userName) {
    $user = User::where('name', 'LIKE', "%$userName%")->first();
    return view('user', ['user' => $user]);
});

Route::get('/announcement', [AnnouncementController::class, 'index'])->name('announcement.index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'blocked'])->group(function () {
    Route::get('/forum/create', [ForumPostController::class, 'create'])->name('forum.create');
    Route::post('/forum', [ForumPostController::class, 'store'])->name('forum.store');
    Route::post('/replies', [ForumReplyController::class, 'store'])->name('replies.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/forum', [ForumPostController::class, 'index'])->name('forum.index');
    Route::get('/forum/search', [ForumPostController::class, 'search'])->name('forum.search');
    Route::post('/dashboard/description', [ProfileController::class, 'description'])->name('user.description');
    Route::post('/dashboard/profile-picture', [ProfileController::class, 'updateProfilePicture'])->name('user.profile-picture');
    Route::get('/forum/{id}', [ForumPostController::class, 'show'])->name('forum.show');
    Route::put('/forum/{id}', [ForumPostController::class, 'update'])->name('forum.update');
    Route::get('/forum/{id}/edit', [ForumPostController::class, 'edit'])->name('forum.edit');
    Route::put('/reply/{id}', [ForumReplyController::class, 'update'])->name('reply.update');
    Route::get('/reply/{id}/edit', [ForumReplyController::class, 'edit'])->name('reply.edit');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/announcement/create', [AnnouncementController::class, 'create'])->name('announcement.create');
    Route::post('/announcement', [AnnouncementController::class, 'store'])->name('announcement.store');
    Route::get('/announcement/{id}/edit', [AnnouncementController::class, 'edit'])->name('announcement.edit');
    Route::put('/announcement/{id}', [AnnouncementController::class, 'update'])->name('announcement.update');
    Route::delete('/announcement/{id}', [AnnouncementController::class, 'destroy'])->name('announcement.destroy');
    Route::delete('/forum/{postId}', [ForumPostController::class, 'destroy'])->name('forum.destroy');
    Route::delete('/reply/{replyId}', [ForumReplyController::class, 'destroy'])->name('reply.destroy');
    Route::post('/user/{id}/toggle-block', [ProfileController::class, 'toggleBlock'])->name('user.toggleBlock');
});

require __DIR__ . '/auth.php';
