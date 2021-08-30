<template>
  <div class="container">
    <select
      class="dropDownMenu"
      @click="$emit('update:CharactersValue', $event.target.value)"
      :value="CharactersValue"
    >
      <option disabled value="">Pick a character</option>
      <option
        v-for="(item, index) in FetchedData.results"
        :key="index"
        :value="JSON.stringify(item)"
        >{{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
import InputsValue from "../Store/Store";
export default {
  name: "CharactersList",

  props: {
    CharactersValue: {
      type: String,
    },
  },

  setup() {
    const { FetchedData } = InputsValue();

    return {
      FetchedData,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  .dropDownMenu {
    height: 34px;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    color: #324b72;
    font-family: "Source Sans Pro";
    padding-left: 10px;
    margin-top: 13px;
    &:hover {
      background-color: #f4f4f4;
    }
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      background-color: #c4c4c4;
      border-radius: 10px;
      width: 6px;
    }
  }
}
</style>
