export default local

const local={
    // 设置值
   set(k,v){
       window.localStorage.setItem(k,v)
   },
//取值
   get(k){
    return window.localStorage.getItem(k)
   },
// 删除值
   remove(k){
    window.localStorage.removeItem(k)
   },
// 清空值
cls(){
    window.localStorage.clear()
   },
}