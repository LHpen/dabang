const app = tcb.init({
    env: 'mc-z-153342'  // 此处填入你的环境ID
  });

  window.onload = function(){
    app.auth({
        persistence: 'session' //在窗口关闭时清除身份验证状态
    })
      .anonymousAuthProvider() 
      .signIn()   //AnonymousAuthProvider.signIn() 匿名登录云开发
      .then(() => {
          console.log("登录成功11") //登录成功
      }).catch(err => {
          console.log("登录失败",err) //登录失败
      })
      env: 'mc-z-153342'  // 此处填入你的环境ID
    }