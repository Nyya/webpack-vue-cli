<template>
  <div>
    <h1 class="nyya">{{message}}</h1>
  </div>
</template>

<script>
export default {
  name: "Com",
  data() {
    return {
      message: "我是 Nyya",
    };
  },
};
</script>

<style scoped>
.nyya {
  width: 200px;
  height: 300px;
  background-color: blanchedalmond;
  color: darkseagreen;
  font-size: 18px;
  text-align: center;
  line-height: 300px;
}
</style>
