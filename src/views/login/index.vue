<template>
  <div class="container">
    <div class="column login-box">
      <div class="column center">
        <span class="f20 bold title">Vue3-商城管理系统</span>
      </div>
    
      <div class="column">
        <a-input v-model:value="userName" @change="handleUserName" placeholder="账户" class="input-login">
          <template #prefix>
            <i class="iconfont icon-mobile" />
          </template>
        </a-input>
        <a-input type="password" v-model:value="password" @change="handlePassword" placeholder="密码" class="input-login">
          <template #prefix>
            <i class="iconfont icon-lock" />
          </template>
        </a-input>
        <div class="between m-25">
          <a-checkbox v-model:checked="checked" @change="handleChecked">自动登录</a-checkbox>
          <span class="cursor f14 txt-forget" @click="handleForget">忘记密码</span>
        </div>
        <a-button type="primary" class="btn-login" @click="handleLogin">登录</a-button>
      </div>
    </div>
    <div className="copy">
      Copyright &copy; {{new Date().getFullYear()}} Lxy Vue3Demo
    </div>
  </div>
</template>

<script>
import store from '@/store/index.ts';
export default {
  name: "Login",
  components: {},
  data(){
    return{
      userName: '', //账户
      password: '', //密码
      checked: false, //是否自动登录
    }
  },
  methods:{
    // 监听账户
    handleUserName(e){
      this.userName= e.target.value;
    },
    // 监听密码
    handlePassword(e){
      this.password= e.target.value
    },
    // 监听多选
    handleChecked(e){
      this.checked= e.target.checked;
    },
    // 忘记密码
    handleForget(){
      console.log('forget');
      this.$router.push('/forget')
    },
    // 登录
    handleLogin(){
      const _userInfo={
        nickname: this.userName,
        token: "ASDJFKSDKFJZSDFBSDKJF48SDFSDF12ASDFS5DF46",
      }
      store.dispatch('updateUserInfoAct', _userInfo)
      this.$router.push('/home')
    }
  }
};
</script>
<style scoped lang="less">
@import './indexStyle.less';
</style>
