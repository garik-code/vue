<template id="">
  <div class="">
    <header id="header">
      <div class="inner">
        <a href="javascript:;" class="logo"><router-link :to="{ path: '/' }"><strong>Projection</strong> by TEMPLATED</router-link></a>
        <nav id="nav">
          <router-link :to="{ path: '/' }"><a href="javascript:;">Home</a></router-link>
          <router-link :to="{ path: '/generic' }"><a href="javascript:;">Generic</a></router-link>
          <router-link :to="{ path: '/elements' }"><a href="javascript:;">Elements</a></router-link>
        </nav>
        <a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>
      </div>
    </header>
    <!-- Banner -->
      <section id="banner">
        <div class="inner">
          <header>
            <h1>Welcome to Projection</h1>
          </header>

          <div class="flex ">

            <div>
              <span class="icon fa-car"></span>
              <h3>Aliquam</h3>
              <p>Suspendisse amet ullamco</p>
            </div>

            <div>
              <span class="icon fa-camera"></span>
              <h3>Elementum</h3>
              <p>Class aptent taciti ad litora</p>
            </div>

            <div>
              <span class="icon fa-bug"></span>
              <h3>Ultrices</h3>
              <p>Nulla vitae mauris non felis</p>
            </div>

          </div>

          <footer>
            <router-link :to="{ path: '/generic' }"><a href="javascript:;" class="button">Get Started</a></router-link>
          </footer>
        </div>
      </section>
  </div>
</template>
