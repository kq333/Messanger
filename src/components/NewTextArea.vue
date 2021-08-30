<template>
  <div>
    <label class="container">
      <textarea
        placeholder="enter the message here..."
        class="textArea"
        type="text"
        @input="$emit('update:TextAreaInput', $event.target.value)"
        :value="TextAreaInput"
        maxlength="252"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "NewTextArea",

  props: {
    TextAreaInput: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  .textArea {
    border-radius: 8px;
    height: 140px;
    border: 1px solid #e0e0e0;
    resize: none !important;
    font-family: "Source Sans Pro";
    margin-top: 14px;
    text-transform: capitalize;
    &:focus {
      outline: none;
    }
    &::placeholder {
      padding-left: 10px;
      color: #e0e0e0;
      font-size: 14px;
    }
  }
}
</style>
