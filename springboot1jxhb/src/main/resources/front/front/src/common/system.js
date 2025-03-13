export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看","修改","删除"],"menu":"商品类型","menuJump":"列表","tableName":"shangpinleixing"}],"menu":"商品类型管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除","查看评论"],"menu":"二手商品","menuJump":"列表","tableName":"ershoushangpin"}],"menu":"二手商品管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除","领单"],"menu":"校园跑腿","menuJump":"列表","tableName":"xiaoyuanpaotui"}],"menu":"校园跑腿管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除","完成登记"],"menu":"跑腿领单","menuJump":"列表","tableName":"paotuilingdan"}],"menu":"跑腿领单管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","修改","删除","评价"],"menu":"完成订单","menuJump":"列表","tableName":"wanchengdingdan"}],"menu":"完成订单管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","修改","删除"],"menu":"评价信息","menuJump":"列表","tableName":"pingjiaxinxi"}],"menu":"评价信息管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"通知公告","tableName":"news"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","删除","导出","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"appFrontIcon":"cuIcon-goods","buttons":["查看","删除","导出"],"menu":"已完成订单","tableName":"orders/已完成"},{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","删除","导出"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-send","buttons":["查看","删除","导出"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-explore","buttons":["查看","删除","导出"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-copy","buttons":["查看","删除","导出"],"menu":"已发货订单","tableName":"orders/已发货"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看"],"menu":"二手商品列表","menuJump":"列表","tableName":"ershoushangpin"}],"menu":"二手商品模块"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","领单"],"menu":"校园跑腿列表","menuJump":"列表","tableName":"xiaoyuanpaotui"}],"menu":"校园跑腿模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","删除"],"menu":"校园跑腿","menuJump":"列表","tableName":"xiaoyuanpaotui"}],"menu":"校园跑腿管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","完成登记"],"menu":"跑腿领单","menuJump":"列表","tableName":"paotuilingdan"}],"menu":"跑腿领单管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","支付","评价"],"menu":"完成订单","menuJump":"列表","tableName":"wanchengdingdan"}],"menu":"完成订单管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看"],"menu":"评价信息","menuJump":"列表","tableName":"pingjiaxinxi"}],"menu":"评价信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看"],"menu":"二手商品列表","menuJump":"列表","tableName":"ershoushangpin"}],"menu":"二手商品模块"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","领单"],"menu":"校园跑腿列表","menuJump":"列表","tableName":"xiaoyuanpaotui"}],"menu":"校园跑腿模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
