<!--  -->
<template>
  <div id="cata">
    <navbar class="cata-bar">
      <div slot="center">分类列表</div>
    </navbar> 
    <div class="right">
    <catelist @tabclick="changecata" :cateliat="cateliat"></catelist>
     <scroll  class="content" 
    ref="scroll" 
    :probe-type="3" 
    @scroll="contentscroll"
    :pull-up-load="true">
    <div>
    <catagoods :showsubcata="showsubcata"></catagoods>
    <tabcontrol :titles="['流行','新款','精选']"   
    @tabclick="tabclick"
    ref="tab2"/>
    <catadetail :recommendlist="showrecommends"></catadetail>
    </div>
    </scroll>
    </div>
    <backtop @click.native="backclick" v-show="isshow"></backtop>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import scroll from 'components/common/better-scroll/scroll'
import tabcontrol from 'components/content/tabcontrol/tabcontrol'
import catelist from './childcomps/catelist'
import catagoods from './childcomps/catagoods'
import catadetail from './childcomps/catadetail'
import backtop from 'components/content/backtop/backtop'

import {getcatedata,getsubcategory,getcategorydetail} from 'network/category'
import {imglistern} from 'common/mixin'
export default {
name:"catagory",
  data () {
    return {
      cateliat:[],
      showdata:{},
      isactive:-1,
      currenttype:'pop',
      taboffsettop:0, 
      isshow:false,
    };
  },
mixins:[imglistern],
  created(){
    this.getcatedata()
    /*this.getsubcategory()*/
    /*this.getcategorydetail()*/
  },
  mounted(){
  },
  computed:{
    showsubcata(){
      if(this.isactive===-1) return {}
      return this.showdata[this.isactive].subcata
    },
    showrecommends(){
      if(this.isactive===-1) return []
      return this.showdata[this.isactive].catadetail[this.currenttype] 
    }
  },
  methods:{
    tabclick(index){
      switch(index){
        case 0:
          this.currenttype='pop'
          break;
        case 1:
          this.currenttype='new'
          break;
        case 2:
          this.currenttype='sell'
          break;
      }
      this.$refs.tab2.currentindex = index;
    },
    getcatedata(){
      getcatedata().then(res=>{
        this.cateliat = res.data.category.list
        //console.log(this.cateliat)
        for(let i=0;i<this.cateliat.length;i++){
          this.showdata[i]={
            subcata:{},
            catadetail:{
              'pop':[],
              'new':[],
              'sell':[]
            }
          }
        }
        this.getsubcategory(0)
      })
    },
    getsubcategory(index){
      //console.log(index,this.cateliat[index].maitKey)
      this.isactive = index
      const maitKey = this.cateliat[index].maitKey
      getsubcategory(maitKey).then(res=>{
        //console.log(res)
        this.showdata[index].subcata = res.data
        this.showdata = {...this.showdata}
        this.getcategorydetail('pop')
        this.getcategorydetail('new')
        this.getcategorydetail('sell')
      })
    },
    getcategorydetail(type){
      const miniWallkey = this.cateliat[this.isactive].miniWallkey
      getcategorydetail(miniWallkey,type).then(res=>{
        //console.log(res)
        this.showdata[this.isactive].catadetail[type] = res
        this.showdata={...this.showdata}
      })
    },
  changecata(index){
     this.getsubcategory(index)
     this.currenttype= 'pop'
     this.$refs.tab2.currentindex = 0
     this.$refs.scroll.scrollTo(0,0)
  },
  contentscroll(position){
      this.isshow = (-position.y)>1000
      //吸顶(position:fixed)
      this.isFixed = (-position.y) > this.taboffsettop
    },
    backclick(){
      this.$refs.scroll.scrollTo(0,0)
    },
  },
  components:{
    scroll,
    tabcontrol,
    navbar,
    catelist,
    catagoods,
    catadetail,
    backtop
  }
}

</script>
<style scoped>
#cata{
  height: 100vh;
}
.cata-bar{
 background-color: var(--color-tint);
  color: #ffffff;
  font-size: 15px;
}

.right{
   position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.content{
  height: 100%;
  overflow: hidden;
  flex: 1;
  background-color: #f1f1f1;
}
</style>