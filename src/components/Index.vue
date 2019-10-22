<template lang="html">
  <div>
    <div class="kt-grid kt-grid--ver kt-grid--root">
        <div class="kt-grid__item  kt-grid__item--fluid kt-grid kt-grid--hor kt-login-v1" id="kt_login_v1">
            <!--begin::Item-->
            <div class="kt-grid__item">
                <!--begin::Heade-->
                <div class="kt-login-v1__head">
                    <div class="kt-login-v1__logo">
                        <a data-href="statistics.html">
                            <img src="http://localhost:8888/leonardo/logo_full.png" style="width:120px;" alt="" />
                        </a>
                    </div>
                </div>
                <!--begin::Head-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="kt-grid__item  kt-grid kt-grid--ver  kt-grid__item--fluid">
                <!--begin::Body-->
                <div class="kt-login-v1__body">
                    <!--begin::Section-->
                    <div class="kt-login-v1__section">
                        <div class="kt-login-v1__info">
                            <h3 class="kt-login-v1__intro">Innovative financial solutions in the cryptocurrency world</h3>
                            <p>Take a step towards success</p>
                        </div>
                    </div>
                    <!--begin::Section-->
                    <!--begin::Separator-->
                    <div class="kt-login-v1__seaprator"></div>
                    <!--end::Separator-->
                    <!--begin::Wrapper-->
                    <div class="kt-login-v1__wrapper">
                        <div class="kt-login-v1__container">
                            <h3 class="kt-login-v1__title">
                                Sign To Account
                            </h3>
                            <!--begin::Form-->
                            <div class="kt-login-v1__form kt-form">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Username" id="username" name="username" autocomplete="off">
                                    <label for="username" class="kt-form__check kt-form__add"><img src="assets/media/login/check.png" alt=""></label>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" placeholder="Password" id="password" name="password" autocomplete="off">
                                    <label for="password" class="fas fa-eye kt-form__add"></label>
                                </div>
                                <div class="kt-login-v1__actions">
                                    <a data-href="statistics.html" class="kt-login-v1__forgot">
                                        Forgot Password ?
                                    </a>
                                    <button type="submit" class="btn btn-pill btn-elevate">Sign In</button>
                                </div>
                            </div>
                            <!--end::Form-->
                            <!--begin::Divider-->
                            <div class="kt-login-v1__divider">
                                <div class="kt-divider">
                                    <span></span>
                                    <span>OR</span>
                                    <span></span>
                                </div>
                            </div>
                            <!--end::Divider-->
                            <!--begin::Options-->
                            <div class="kt-login-v1__options">
                                <a data-href="statistics.html" class="btn">
                                    <i class="fab fa-facebook-f"></i>
                                    Facebook
                                </a>
                                <a data-href="statistics.html" class="btn">
                                    <i class="fab fa-twitter"></i>
                                    Twitter
                                </a>
                                <a data-href="statistics.html" class="btn">
                                    <i class="fab fa-google"></i>
                                    Google
                                </a>
                            </div>
                            <div class="kt-login-v1__signup">
                                <h4 class="kt-login-v1__heading">Don't have an account?</h4>
                                <router-link :to="{ path: '/reg' }"><a data-href="statistics.html">Sign Up</a></router-link>
                            </div>
                            <!--end::Options-->
                        </div>
                    </div>
                    <!--end::Wrapper-->
                </div>
                <!--begin::Body-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="kt-grid__item">
                <div class="kt-login-v1__footer">
                    <div class="kt-login-v1__menu">
                        <a data-href="statistics.html">Privacy</a>
                        <a data-href="statistics.html">Legal</a>
                        <a data-href="statistics.html">Contact</a>
                    </div>
                    <div class="kt-login-v1__copyright">
                        <a data-href="statistics.html">&copy; 2019 Leonardo Inc</a>
                    </div>
                </div>
            </div>
            <!--end::Item-->
        </div>
    </div>
  </div>
</template>

<script>

export default {

}

</script>

<style lang="css">
</style>
