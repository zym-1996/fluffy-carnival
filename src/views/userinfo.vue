<template>
    <div>
        <nave/>
        <img src="../assets/sdff.jpg" alt="">
        <user-detail :userInfo="model"/>
      <user-article />
    </div>
</template>

<script>
import nave from '../components/common/nave'
import userArticle from '../components/userComponent/userArticle'
import userDetail from '../components/userComponent/userDetail'
    export default {
        data() {
            return {
                model:{}
            }
        },
        created() {
            this.userinfoData()
        },
        methods:{
            async userinfoData() {
              const res = await this.$http.get('/user/'+localStorage.getItem('id'))
              this.model = res.data[0]
              console.log(res)
            }
        },
        components:{
            nave,
            userArticle,
            userDetail
        }
    }
</script>

<style lang="less" scoped>
div img {
    width: 100%;
    height: 91px;
}
</style>