<script>
export default {
name: "AboutView.vue",
  data(){
return{
  query:""
} },
    created(){
this.query=this.$route.query.query;
    }

}
</script>

<template>
  <div>
    {{query}}
  </div>
</template>

<style scoped>

</style>