<template>
  <div class="gridview" ref="gridview">
  <slot></slot>
  </div>
</template>

<script>
export default {
name:"gridview",
props:{
    cols:{
        type:Number,
        default:2
    },
    hMargin:{
        type:Number,
        default:8
    },
    vMargin:{
        type:Number,
        default:8
    },
    itemSpace:{
        type:Number,
        default:8
    },
    lineSpace:{
        type:Number,
        default:8
    },
},
mounted:function(){
    setTimeout(this._autoLayout,20)
},
updated:function(){
    this._autoLayout()
},
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
      _autoLayout:function(){
          let gridEl = this.$refs.gridview;
          let children = gridEl.children;

          gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`

          let itemWidth = (gridEl.clientWidth - 2 * this.hMargin - (this.cols - 1) * this.itemSpace) / this.cols
          for(let i = 0; i < children.length; i++){
              let item = children[i];
              item.style.width = itemWidth + 'px';
              if((i+1) % this.cols !== 0){
                  item.style.marginRight = this.itemSpace + 'px'
              }
              if(i >= this.cols){
              item.style.marginTop = this.lineSpace + 'px'
              }
          }
      }
  }
}

</script>
<style scoped>
.gridview{
    display: flex;
    flex-wrap: wrap;
}
</style>