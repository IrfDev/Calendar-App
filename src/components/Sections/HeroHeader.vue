<template>
  <main class="container-fluid">
    <nav-bar/>
    <div id="hero-header-animate">
        <h1 class="text-center">
            Be the hero your <span>week</span> needs
        </h1>
    </div>
    <divider/>
  </main>
</template>

<script>
import NavBar from '@/components/Ui/NavBar.vue';
import Divider from '@/components/Ui/Divider.vue';

export default {
  name: 'HeroHeader',
  components: {
    NavBar,
    Divider,
  },
  mounted() {},
};

</script>

<style lang="scss" scoped>
main{
    background-color: #D6E0EA!important;
    display:flex;
    flex-direction: column;
    #hero-header-animate{
        width: 803px;
        height: 421px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%,
         rgba(0, 0, 0, 0.68) 100%),
         url(../../assets/hero-header-banner.jpg),  #C4C4C4;
         background-size: cover;
         background-position: 0% 100%;
        box-shadow: 5px 4px 13px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        align-self: center;
        margin-top: 5%;
        margin-bottom: 10%;
        display: flex;
        justify-content: center;
        h1{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 49px;
            line-height: 98%;
            color: #FFFFFF;
            align-self: center;
        }
        span{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 800;
            font-size: 49px;
            line-height: 98%;
            text-decoration-line: underline;
            color: #FFB395;
        }
    }
}
</style>
