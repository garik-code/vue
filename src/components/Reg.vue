<template lang="html">
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
                  <i class="fas fa-globe"></i>
              </div>

              <!--begin::Head-->
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="kt-grid__item  kt-grid kt-grid--ver  kt-grid__item--fluid">
              <!--begin::Body-->
              <div class="kt-login-v1__body">
                  <!--begin::Wrapper-->
                  <div class="kt-login-v1__wrapper">
                      <div class="kt-login-v1__container">
                          <h3 class="kt-login-v1__title">
                              <img src="http://localhost:8888/img/logo_red_alpha.png" alt="" style="width: 20%;">
                          </h3>
                          <p class="kt-login-v1__wrapper_body paragraph-1">
                              Create your<br>Leonardo Account
                          </p>
                          <p class="paragraph-2">
                              Take a step towards success
                          </p>
                          <div class="steps">
                            <span class="dot-active" id='step-first-of-registration'></span>
                            <span class="dot-non-active" id='step-second-of-registration'></span>
                            <span class="dot-non-active" id='step-third-of-registration'></span>
                          </div>
                          <!--begin::Form-->
                          <div class="kt-login-v1__form kt-form" id='registration-form'>
                              <div class="form-group" id='form-group-username-step-first' style='display:block;'>
                                  <input class="form-control" type="text" placeholder="Username" id="username-step-first" name="username-step-first" autocomplete="off">
                                  <label for="username" class="kt-form__check kt-form__add"><img src="http://localhost:8888/assets/media/login/check.png" alt=""></label>
                              </div>
                              <div class="form-group" id='form-group-password-step-first' style='display:block;'>
                                  <input class="form-control" type="password" placeholder="Password" id="password-step-first" name="password-step-first" autocomplete="off">
                                  <label for="password" class="fas fa-eye kt-form__add"></label>
                              </div>
                              <div class="kt-login-v1__actions" id='kt-login-v1__actions'>
                                  <a href='' id='kt-login-v1__left_action'></a>
                                  <button onClick="to_second_step_of_registration()" type='submit' class="btn btn-pill btn-elevate" id='submit-step-first'>Next</button>
                              </div>
                          </div>
                          <!--end::Form-->
                          <!--begin::Options-->
                          <div class="kt-login-v1__signup">
                              <h4 class="kt-login-v1__heading">Already have an account?</h4>
                              <router-link :to="{ path: '/' }"><a data-href="http://localhost:8888/index.html">Login</a></router-link>
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
</template>

<script>

export default {

}

</script>

<style lang="css">
</style>
