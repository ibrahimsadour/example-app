<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WebsitePagesController extends Controller
{

    public function home_page (){

        return view('front.pages.home');
    }    
    
    public function about_page (){

        return view('front.pages.about');
    }

   
}
