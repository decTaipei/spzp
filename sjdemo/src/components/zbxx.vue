<template>

         <div class="box">
            <div class="left">
                <div class="top">
                    <h4 class="h4one">
                        <slot name="toptitle"></slot>
                        <span>
                            <slot name="zhuangtai"></slot>
                        </span>
                    </h4>
                    <h4 class="h4two">
                       报名截止时间:
                        <span>
                            <slot name="baomingtime"></slot>
                        </span>
                    </h4>
                </div>
                <div class="xiamian">
                    <div class="buttontop">
                        <h4 class="buttonsizi">招标品类:
                            <span>
                                <slot name="buttonsizi1"></slot>
                            </span>
                        </h4>
                        <h4 class="buttonsizi">发布时间:
                             <span>
                                <slot name="buttonsizi2"></slot>
                              </span>
                        </h4>
                    </div>
                    <div class="buttonxia">
                         <h4 class="buttonsizi">项目所在地:
                              <span>
                                <slot name="buttonsizi3"></slot>
                              </span>
                         </h4>
                         <h4 class="buttonsizi">招标范围:
                              <span>
                                <slot name="buttonsizi4"></slot>
                              </span>
                         </h4>
                    </div>
                </div>
            </div>
            <div class="zhong">
              <el-steps :active="2" align-center class="jindutiao" space="150px" >
                <el-step title="发布招标公告"></el-step>
                <el-step title="供应商报名" ></el-step>
                <el-step title="完成"></el-step>
              </el-steps>
            </div>
            <div class="right">
                <span>操作</span>
            </div>
         </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>

.box{
    height: 128px;
    margin: 15px;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    .left{
        flex:5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .top{
            flex:3;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .h4one{
                flex: 5;
                span{
                    height: 30px;
                    width: 74px;
                    background-color: #EFC76B;
                    color: #FFFFFF;
                }
            }
            .h4two{
                flex: 5;
            }
        }
        .xiamian{
            flex: 7;
            display: flex;
            flex-direction: row;
            .buttontop{
                flex: 5;
                display: flex;
                flex-direction: column;
                font-size:15px ;
                color: rgb(114, 110, 110);
                margin: 0px;
                padding: 0px;
                .buttonsizi{
                    flex: 5;
                }
            }
            .buttonxia{
                flex: 5; 
                display: flex;
                flex-direction: column;
                font-size: 15px;
                  color: rgb(114, 110, 110);
                margin: 0px;
                padding: 0px;
                .buttonsizi{
                    flex: 5;
                }
            }
        }
    }
    .zhong{
        flex: 4;
       
        .jindutiao{
            margin-top:35px ;
            margin-left: 80px;
        }
    }
    .right{
        flex: 1;
       
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        span{
           flex: 1;
           text-align: center;
           color: rgb(59, 83, 221);
        }
    }
}
</style>