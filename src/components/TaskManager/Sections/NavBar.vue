<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Distracti-off</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">App</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
nav{
    display:flex;
    align-content: space-around;
    .navbar-brand{
        @extend .h3-font;
        color:$alpha-200;
        text-transform: uppercase;
        font-size:2em;
    }
}
</style>
