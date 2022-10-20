<template>
    <div>
 <div>
     <input type="text" v-model="namename"><button @click="add">点击添加</button>
     <tr v-for="(item,index) in arrar" :key="index">
         <td>{{item.id}}---{{item.name}}--<button @click="del(index)">删除</button></td>
     </tr>
 </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                namename:'',
                arrar:[
                   {
                       id:1,
                       name:'zhangyu'
                   },
                    {
                       id:2,
                       name:'liuhongjie'
                   },
                    {
                       id:3,
                       name:'xiaoxiong'
                   },
                    {
                       id:4,
                       name:'huhuiyang'
                   }
                ]
            }
        },
        methods: {
            del(index){
                this.arrar.splice(index,1)
            },
            add(){
                this.arrar.push({
                    id:5,
                    name:this.namename
                    
                })
                this.namename = ''
            }
        },
    }
</script>

<style lang="less" scoped>

</style>