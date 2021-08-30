<template>
  <div>
    <label class="container">
      <input
        placeholder="Enter the title "
        class="input"
        type="text"
        @input="$emit('update:InputText', $event.target.value)"
        :value="InputText"
        maxlength="50"
        :class="{ 'input--changedColor': active.length > 0 }"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "newInput",

  props: {
    InputText: {
      type: String,
      default: "",
    },
    active: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  .input {
    border-radius: 8px;
    height: 34px;
    border: solid 1px #de212b;
    font-family: "Source Sans Pro";
    text-transform: capitalize;

    &--changedColor {
      border: 1px solid #e0e0e0;
    }
    &::placeholder {
      color: #de212b;
      font-family: "Source Sans Pro";
      padding-left: 10px;
      font-size: 14px;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
