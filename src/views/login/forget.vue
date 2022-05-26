<template>
  <div class="container">
    <div class="column login-box forget-box">
      <span class="txt-forget">忘记密码</span>
        <a-input v-model:value="userName" @change="handleUserName" placeholder="账户" class="input-login">
          <template #prefix>
            <i class="iconfont icon-mobile" />
          </template>
        </a-input>
        <div class="between center">
          <a-input type="password" v-model:value="code" @change="handleCode" placeholder="验证码" class="input-login">
            <template #prefix>
              <i class="iconfont icon-lock" />
            </template>
          </a-input>
          <a-button class="btn-code" @click="handleGetCode">获取验证码</a-button>
        </div>
        <a-input type="password" v-model:value="password" @change="handlePassword" placeholder="密码" class="input-login">
          <template #prefix>
            <i class="iconfont icon-lock" />
          </template>
        </a-input>
        <a-button type="primary" class="btn-login" @click="handleSubmit">提交</a-button>
    </div>
    <div className="copy">
      Copyright &copy; {{new Date().getFullYear()}} Lxy Vue3Demo
    </div>
  </div>
</template>

<script>
export default {
  name: "Forget",
  data(){
    return{
      userName: '', //账户
      password: '', //密码
      code: '', //验证码
      time: 0, //倒计时
    }
  },
  methods:{
    // 监听账户
    handleUserName(e){
      this.userName= e.target.value;
    },
    // 监听验证码
    handleCode(e){
      this.code= e.target.value;
    },
    // 监听密码
    handlePassword(e){
      this.password= e.target.value
    },
    // 发送验证码
    handleGetCode(){
      this.time= 59;
    },
    // 提交
    handleSubmit(){
      const {userName, password, code} = this;
      console.log(userName, password, code);
    }
  }
}
</script>

<style scoped lang="less">
@import './indexStyle.less';
</style>