<template>
    <div>
        <logintop middleTop="登录bilibili">
             <div slot="right" style="font-size:3.611vw" @click="$router.push('/register')">注册</div>
        </logintop>
        <logintext label="账号" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res => model.username=res" style="margin:4.167vw 0"/>
        <logintext label="密码" placeholder="请输入密码" type="password" rule="^.{6,16}$" @inputChange="res => model.password=res"/>
        <loginbtn btn="登录" @registerSubmit="registerSubmit" />
    </div>
</template>

<script>
import logintop from '../components/common/logintop'
import logintext from '../components/common/logintext'
import loginbtn from '../components/common/loginbtn'
    export default {
        data () {
            return {
                model:{
                  username:'',
                  password:''
                }
            }
        },
        components:{
            logintop,
            logintext,
            loginbtn
        },
       methods:{
            async registerSubmit() {
                let rulg = /^.{6,16}$/
               if (rulg.test(this.model.username) && rulg.test(this.model.password)){
                const res = await this.$http.post('/login',this.model)
                this.$msg.fail(res.data.msg)
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('id',res.data.id)
                setTimeout(()=>{
                  this.$router.push('/userinfo')
                },1000)
               }else{
                   this.$msg.fail('请先登录！')
               }
           }
       }
    }
</script>

<style lang="less" scoped>

</style>