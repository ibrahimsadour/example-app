<!DOCTYPE html>
<html dir="rtl" lang="ar" data-skin="light" prefix="og: http://ogp.me/ns#">
    @include('front.includes.head')
   <body id="tie-body" class="home-page bp-nouveau rtl home page-template-default page page-id-131 theme-jannah tie-no-js woocommerce-no-js wrapper-has-shadow block-head-1 magazine1 demo is-lazyload is-thumb-overlay-disabled is-mobile is-header-layout-3 has-header-ad has-builder hide_share_post_top hide_share_post_bottom no-js">
    
        <div class="background-overlay">
            <div id="tie-container" class="site tie-container">
                <div id="tie-wrapper">

                    @include('front.includes.header')

                    @yield('content')

                    @include('front.includes.footer')
                    @include('front.includes.go-to-top')
                </div>
                @include('front.includes.mobile-menu')
            </div>
        </div>
        
      <div id="autocomplete-suggestions" class="autocomplete-suggestions"></div>
      <div id="is-scroller-outer">
         <div id="is-scroller"></div>
      </div>
      <div id="fb-root"></div>
      
      <div id="tie-popup-search-desktop" class="tie-popup tie-popup-search-wrap" style="display: none;">
         <a href="#" class="tie-btn-close remove big-btn light-btn"> <span class="screen-reader-text">إغلاق</span> </a>
         <div class="popup-search-wrap-inner">
            <div class="live-search-parent pop-up-live-search" data-skin="live-search-popup" aria-label="بحث">
               <form method="get" class="tie-popup-search-form" action="./"> <input class="tie-popup-search-input is-ajax-search" inputmode="search" type="text" name="s" title="بحث عن" autocomplete="off" placeholder="إكتب كلمة البحث ثم إضغط زر الإدخال" /> <button class="tie-popup-search-submit"
                  type="submit"> <span class="tie-icon-search tie-search-icon" aria-hidden="true"></span> <span class="screen-reader-text">بحث عن</span> </button> </form>
            </div>
         </div>
      </div>
      <div id="tie-popup-login" class="tie-popup" style="display: none;">
         <a href="#" class="tie-btn-close remove big-btn light-btn"> <span class="screen-reader-text">إغلاق</span> </a>
         <div class="tie-popup-container">
            <div class="container-wrapper">
               <div class="widget login-widget">
                  <div class="widget-title the-global-title">
                     <div class="the-subtitle">تسجيل الدخول <span class="widget-title-icon tie-icon"></span></div>
                  </div>
                  <div class="widget-container">
                     <div class="login-form">
                        <form name="registerform" action="wp-login.php" method="post">
                           <input type="text" name="log" title="إسم المستخدم" placeholder="إسم المستخدم">
                           <div class="pass-container"> <input type="password" name="pwd" title="كلمة المرور" placeholder="كلمة المرور"> <a class="forget-text" href="%d8%ad%d8%b3%d8%a7%d8%a8%d9%8a/lost-password/">نسيت كلمة المرور؟</a> </div>
                           <input type="hidden"
                              name="redirect_to" value="/rtl/" /> <label for="rememberme" class="rememberme"> <input id="rememberme" name="rememberme" type="checkbox" checked="checked" value="forever" /> تذكرني </label> <button type="submit"
                              class="button fullwidth login-submit">تسجيل الدخول</button> 
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <script type='text/javascript' src='https://jannah.tielabs.com/rtl/wp-includes/js/jquery/jquery.min.js' id='jquery-core-js'></script>
      <script type='text/javascript' defer="defer" src='https://jannah.tielabs.com/rtl/wp-content/themes/jannah/assets/js/scripts.min.js' id='tie-scripts-js'></script>
      <script type='text/javascript' defer="defer" src='https://jannah.tielabs.com/rtl/wp-content/themes/jannah/assets/js/br-news.js' id='tie-js-breaking-js'></script>
      <script type='text/javascript' defer="defer" src='https://jannah.tielabs.com/rtl/wp-content/themes/jannah/assets/js/sliders.min.js' id='tie-js-sliders-js'></script>
    </body>
</html>