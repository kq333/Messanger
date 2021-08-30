<template>
  <div>
    <label class="input">
      <input
        type="checkbox"
        @input="$emit('update:checked', $event.target.checked)"
        :checked="unchecked"
        :value="checked"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "InputCheckBox",

  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 0.5px solid #e0e0e0;
  background-clip: content-box;
  padding: 3px;
}

input[type="checkbox"]:checked {
  background-color: #4eadc5;
}
</style>
