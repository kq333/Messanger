<template>
  <div>
    <NavBar />
  </div>
  <div class="container">
    <div class="containerLoop">
      <h1 class="containerLoop__h1" v-if="active > 0">Message History</h1>
      <div
        class="containerLoop__characterItems"
        v-for="(item, index) in FinalValue"
        :key="index"
        :value="item"
      >
        <div class="containerLoop__titleBar">
          <div :class="{first:index==0 , last:index==FinalValue.length-1}" class="containerLoop__titleBar__title">
            {{ item.title }}
          </div>
          <div class="containerLoop__titleBar__button">
            <ArrowButton @click="changeArrowByClicking(index)">
              <template #image>
                <span v-if="changeArrow"
                  ><i class="fas fa-chevron-up"></i
                ></span>
                <span v-else><i class="fas fa-chevron-down"></i></span>
              </template>
            </ArrowButton>
          </div>
        </div>
        <div class="dataBar" v-if="show == index">
          <div class="dataBar__stick"></div>
          <div class="dataBar__image">
            <img class="dataBar__image_img" :src="item.characters.image" />
          </div>
          <div class="dataBar__data">
            <div class="dataBar__data__row">
              <span class="dataBar__data__row__sentTo">
                Sent to: {{ item.characters.name }}
              </span>
              <div
                class="dataBar__data__row__reciveQuickPost"
                v-if="item.checked == true"
              >
                <span class="dataBar__data__row__reciveQuickPost__icon"
                  ><i class="fas fa-check"></i
                ></span>
                <span>Using QuickPost&#x2122;</span>
              </div>
            </div>
            <div class="dataBar__data__day">Date: {{ item.date }}</div>
            <div class="dataBar__data__hour">At: {{ item.time }}</div>
          </div>
        </div>
        <div v-if="show == index" class="messageBar_message">
          {{ item.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputsValue from "../Store/Store";
import NavBar from "../components/NavBar";
import { ref } from "vue";
import ArrowButton from "../components/ArrowButton";

export default {
  name: "SecandPage",

  components: {
    ArrowButton,
    NavBar,
  },

  setup() {
    const { FinalValue, checked } = InputsValue();

    const Active = ref(true);
    const changeArrow = ref(true);
    const active = ref(FinalValue.value.length);
    const show = ref(true);

    function changeArrowByClicking(index) {
      changeArrow.value = !changeArrow.value;
      show.value = index;
    }

    return {
      FinalValue,
      Active,
      changeArrow,
      changeArrowByClicking,
      checked,
      active,
      show,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Source Sans Pro";
}

.container {
  margin: auto;
  color: #324b72;
  margin-top: 150px;
  max-width: 460px;
  padding: 15px;

  .containerLoop {
    max-width: 460px;
    height: auto;

    &__h1 {
      display: flex;
      justify-content: center;
      align-content: center;
      font-family: "Source Sans Pro" !important;
      font-weight: 200;
      margin-bottom: 50px;
    }

    &__titleBar {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 460px));
      grid-template-areas: "title button";
      border-bottom: 1px solid #e0e0e0;
      height: 50px;

      &__title {
        grid-area: title;
        max-width: 460px;
        height: 10px;
        font-size: 14px;
        font-weight: bold;
        margin-top: 18px;
      }

      &__button {
        grid-area: button;
        margin-top: 18px;
      }
    }

    .dataBar {
      margin-top: 15px;
      max-width: 460px;
      height: 48px;
      display: grid;
      grid-template-columns: 3px 48px auto;

      gap: 3px;
      font-size: 14px;

      &__stick {
        height: 48px;
        border-left: solid 1px #c4c4c4;
      }

      &__image_img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .dataBar__data {
        &__row {
          display: grid;
          grid-template-columns: 1fr;

          grid-template-areas: "sentTo reciveQuickPost";
          margin-top: -3px;

          &__sentTo {
            grid-area: sentTo;
          }

          &__reciveQuickPost {
            grid-area: reciveQuickPost;
            display: flex;
            justify-content: flex-end;
            color: #50c878;

            &__icon {
              margin-right: 5px;
            }
          }
        }
      }
    }

    .messageBar_message {
      font-size: 16px;
      margin-top: 20px;
      border-bottom: 1px solid #e0e0e0;
      padding: 15px;
    }
  };

  .first{
        &:before{
          content:'First message:  '
        }
  }

  .last{
       &:before{
          content:'My latest message:  '
        }

  }



}
</style>
