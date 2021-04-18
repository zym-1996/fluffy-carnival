<template>
    <div>
        <logintop middleTop="注册bilibili">
            <div slot="right" style="font-size:3.611vw" @click="$router.push('/login')">用户登录</div>
        </logintop>
        <logintext label="姓名" style="margin:4.167vw 0" placeholder="请输入姓名" rule="^.{6,16}$" @inputChange="res => model.name=res"/>
        <logintext label="账号" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res => model.username=res"/>
        <logintext label="密码" placeholder="请输入密码" type="password" rule="^.{6,16}$" @inputChange="res => model.password=res"/>
        <loginbtn btn="注册" @registerSubmit="registerSubmit"/>
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
                  name:'',
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
               if (rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)){
                const res = await this.$http.post('/register',this.model)
                this.$msg.fail(res.data.msg)
                localStorage.setItem('id',res.data.id)
                localStorage.setItem('token',res.data.objtoken)
                setTimeout(()=>{
                  this.$router.push('/login')
                },1000)
               }else{
                   this.$msg.fail('格式不正确！')
               }
           }
       }
    }
</script>

<style lang="less" scoped>

</style>