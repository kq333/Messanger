<template>
  <button class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: "SendButton",

  props: {
    text: {
      type: String,
      default: "Send",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background-color: #4eadc5;
  border-radius: 20px;
  border: solid 1px black;
  padding: 5px;
  color: #fafffd;
  width: 82px;
  height: 40px;
  margin-top: 46px;
  font-family: "Source Sans Pro";
  &:hover {
    cursor: pointer;
    background-color: #3dacb4;
  }
}
</style>
