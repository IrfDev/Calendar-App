<template>
    <div class="container-fluid">
      <nav-bar/>
      <div class="hero-image">
        <h1>
          Focus
        </h1>
        <img src="@/assets/hero-image.png" alt="" class="img-fluid">
      </div>
      <button class="main-cta h4-font">
        Get Started
      </button>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  name: 'HeaderCta',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
nav{
  margin-bottom:-10%;
}
.container-fluid{
  background-color: $beta-200;
  margin-bottom:5%;
  h1{
    color:$beta-100;
  }
  .hero-image{
    margin-top:-5%;
    img{
      position:relative;
    }
    h1{
      @extend .h1-font;
      color:$beta-100;
      font-size: 20em;
      text-transform:uppercase;
      position: absolute;
      top: 18%;
      left: 0;
      right: 0;
    }
  }
  .main-cta{
  color: white;
  background-color: #D5693E;
  border-radius: 8px;
  font-size: 2.5em;
  padding: .7% 10%;
  position: relative;
  top: 25px;
  top: -70px;
  box-shadow: 2px 3px 12px 3px $alpha-100;
  border:none;
  transition: .35s ease-in ;
  }
  .main-cta:hover{
    transition: .3s ease-out ;
    box-shadow: 2px 3px 12px 8px $alpha-200;
    font-size:2.54em;
  }
}
</style>
