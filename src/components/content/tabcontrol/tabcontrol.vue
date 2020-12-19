<!--  -->
<template>
  <div class="tabcontrol">
     <div v-for="(item,index) in titles" 
     :class="{active:index===currentindex}" 
     :key="index"
     class="controlitem"
     @click="itemclick(index)">
         <span>{{item}}</span>
     </div>
  </div>
</template>

<script>
export default {
name:"tabcontrol",
  props:{
     titles:{
         type:Array,
         default(){
            return []
         }
     }
},
data(){
    return{
        currentindex:0
    }
},

  components: {},

  computed: {

  },

  methods: {
      itemclick(index){
          this.currentindex=index;
          this.$emit('tabclick',index)
      }
  }
}

</script>
<style>
.tabcontrol{
  display: flex;
  text-align: center; 
  font-size: 15px; 
   height: 40px;
   line-height: 40px;
   background-color: #fff;
}
.controlitem{
    flex:1;
}
.controlitem span{
    padding: 5px;
}
.active{
    color: var(--color-high-text);  
}
.active span{
    border-bottom: 2px solid var(--color-tint);
}
</style>