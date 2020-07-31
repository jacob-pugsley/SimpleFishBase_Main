<template>
  <div id="app">
    <h1>simple<b>Fishbase</b></h1>
    <mainSearchForm></mainSearchForm>
  </div>
</template>

<script>
import mainSearchForm from '@/components/mainSearchForm.vue'

export default {
  name: 'app',
  components: {
    mainSearchForm
  },
  data(){
    return{

    }
  }
}
</script>

<style>
#app {
  width: 65%;
  margin: auto;
  margin-top: 10%;
}

#detailsView{
  position: absolute;
  width: 74%;
  left: 13%;
  top: 10%;

  visibility: none !important;
}
</style>
