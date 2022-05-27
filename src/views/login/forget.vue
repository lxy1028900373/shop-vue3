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
            <i class="iconfont icon-youjian" />
          </template>
        </a-input>
        <a-button class="btn-code" :disabled="countdown.count>0" @click="handleGetCode">{{countdown.count > 0 ? `${countdown.count} s` : '获取验证码'}}</a-button>
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
import CountDown from '../../components/hooks/countDown.ts';
export default {
  name: "Forget",
  setup() {
    const { state: countdown, start: handleCountDown } = CountDown(59)
    return {
        countdown,
        handleCountDown,
    }
    },
  data(){
    return{
      userName: '', //账户
      password: '', //密码
      code: '', //验证码
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
      this.password= e.target.value;
    },
    // 发送验证码
    handleGetCode(){
      this.handleCountDown();
    },
    // 提交
    handleSubmit(){
      const {userName, password, code} = this;
      console.log(userName, password, code);
      this.$router.back();
    }
  }
}
</script>

<style scoped lang="less">
@import './indexStyle.less';
</style>