<template>
    <div class="btnparent" @click="registerClick">
        <div class="loginbtn">{{btn}}</div>
    </div>
</template>

<script>
    export default {
        props:['btn'],
        methods:{
            registerClick() {
                this.$emit('registerSubmit')
            }
        }
    }
</script>

<style lang="less" scoped>
.btnparent {
    padding: 4.167vw 2.778vw;
}
.loginbtn {
    height: 12.5vw;
    background-color: #ff9bd5;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.44vw;
    border-radius: 6.25vw;
}
</style>