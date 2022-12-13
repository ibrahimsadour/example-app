<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class FirstController extends Controller
{
    public function showString(){
        return 'Ibrahim';
    }

    // public function __construct()
    // {
    //     // Middleware only applied to these methods
    //     $this->middleware('auth'); // Could add bunch of more methods too
            
        
    // }
}
