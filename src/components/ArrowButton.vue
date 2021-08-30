<template>
  <div>
    <button @click="ChangeArrowStatus" class="btn">
      <slot>
        <slot name="text">{{ text }}</slot>
        <slot name="image" class="btn__icon"> </slot>
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "ArrowButton",

  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" csoped>
.btn {
  border: none;
  background-color: transparent;
  color: #7b8ba5;
  &:hover {
    cursor: pointer;
  }
  &__icon {
    width: 12px;
    height: 6px;
  }
}
</style>
