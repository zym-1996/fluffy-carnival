<template>
    <div class="nave">
    <div class="logo"><img src="@/assets/b.png" @click="home"></div>
    <div class="center">
        <van-search placeholder="请输入搜索关键词" @click="$router.push('/search')" input-align="center"/>
    </div>
    <div class="right">
        <img src="@/assets/user.png"  @click="userinfo">
        <p>下载APP</p>
    </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return{
            }
        },
        methods: {
          home () {
              if (this.$route.path!='/home')
              this.$router.push('/home')
          },
          userinfo () {
              if (this.$route.path!='/userinfo'){
                  this.$router.push('/userinfo')
              }
          }
        }
    }
</script>

<style lang="less" scoped>
.nave {
    height: 14.5vw;
    background-color: #fff;
    display: flex;
    .logo {
        display: flex;
        justify-items: center;
        align-items: center;
        width: 80px;
        img {
            padding: 5px;
        }
    }
    .center {
        flex: 1;
        height: 100%;
        .van-search {
            height: 100%;
        }
        .van-search__content  {
            border-radius: 38px;
            width: 90%;
            padding-left: 1.389vw;
        }
    }
    .right {
        display: flex;
        justify-items: center;
        align-items: center;
        img {
            width: 6.667vw;
            height: 6.667vw;
        }
        p {
            padding-top: 1.389vw;
            margin: 0 2.222vw;
            padding: 0 2.778vw;
            background-color: #fb7299;
            color: #fff;
            font-size: 3.611vw;
        }
    }
}
</style>