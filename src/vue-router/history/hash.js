import History from './base'

function ensureSlash(){
  if(!window.location.hash){
    window.location.hash = '/'
  }
}
export default class HashHistory extends History{
  constructor(router){
    super(router);
    ensureSlash()
}
  
   getHash(){
     return window.location.hash.slice(1)
   }
   // 获取当前的路径
   getCurrentLocation(){
      return this.getHash()  
   }
   
   //开启监听
   setupListener(){
     
   }
}