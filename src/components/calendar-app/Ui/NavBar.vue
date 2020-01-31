<template>
<nav id="nav-weekly">
    <img src="@/assets/NavBarBrand.png" class="img-fluid" alt="">
    <img src="@/assets/logo-irving.png" class="img-fluid second" alt="">
</nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
#nav-weekly {
padding-top: 1%;
display:flex;
justify-content: space-between;
.second{
    max-height: 3em;
}
}
</style>
