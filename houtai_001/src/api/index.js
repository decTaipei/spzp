import axios from './request'

//登录页面
//登录接口
export function loging(parameter){
    return axios({
        url: "users/checkLogin",
        method: "post",
        data:parameter
    })
}

//yhadd页面
//用户添加
export function yhadd(parameter){
    return axios({
        url:'users/add',
         method:"post",
         headers: {
            Authorization: localStorage.getItem('token'), 
         },
         data:parameter
    })
}

//orderlist页面
//初始化用户列表
export function chushihua(parameter){
    return axios({
        url:'users/list',
        method:'get',
         headers: {
         Authorization: localStorage.getItem('token')
      },
      params:parameter
    })
}

//获取账号所有信息
export function info(parameter){
    return axios({
        url:'users/info',
        method:'get',
        headers: {
            Authorization: localStorage.getItem('token')
         },
         params:parameter
    })
}
//确认修改框
export function qrxiugai(parameter){
    return axios({
        url:'users/edit',
        method:'post',
        headers: {
            Authorization: localStorage.getItem('token'),
         },
         data:parameter
    })
}
//删除用户
export function shanchu(parameter){
    return axios({
        url:'users/del',
        method:'get',
         headers: {
            Authorization: localStorage.getItem('token'),
         },
         params:parameter
    })
}

//商品列表
//商品展示页面
export function shoppinglist(parameter){
    return axios({
        url:'goods/list',
        method:'get',
        headers:{
            Authorization: localStorage.getItem('token'),
        },
        params:parameter
    })
}

//删除商品
export function delshoping(parameter){
    return axios({
        url:'goods/del',
        method:'get',
        headers:{
            Authorization: localStorage.getItem('token'),
        },
        params:parameter
    })
}

//新增商品
export function addshoping(parameter){
    return axios({
        url:'goods/add',
        method:'post',
        headers:{
            Authorization: localStorage.getItem('token'),
        },
        data:parameter
    })
}