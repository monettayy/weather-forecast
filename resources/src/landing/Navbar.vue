<template>
<div class="nav-container">
  <nav class="navbar navbar-top navbar-expand navbar-dark bg-white border-bottom">
      <div class="container-fluid">
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <a class="d-lg-flex align-items-center" href="/">
              <img src="/icons/moon-and-sun.png" class="mr-3 app-header-logo" style="width: 45px;">
              <div class="app-header-title">
                <h2 class="text-primary font-weight-bold mb-0 font-bebas">Weather</h2>
                <h4 class="mb-0 font-roboto text-primary">Forecast</h4>
              </div>
          </a>
        </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  props:[]
}
</script>

<style lang="scss" scoped>
.app-header-title h1{
  font-size: 2.5rem;
}
    @media(max-width:900px)
    {
        .app-header-title h1{
            font-size: 1.9rem;
        }
    }

</style>