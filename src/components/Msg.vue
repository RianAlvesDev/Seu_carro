<template>
  <div class="msg-container">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "Msg",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
    .msg-container {
        color: #010102;
        background-color: #0b73d3;
        border: 2px solid #2cccda;
        border-radius: 5px;
        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
        text-align: center;
    }
</style>
