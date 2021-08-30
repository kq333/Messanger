<template>
  <div class="navBar">
    <NavBar />
  </div>
  <div class="Container">
    <div class="header">
      <h1>Send a new message</h1>
    </div>

    <div class="titleName" :class="{ color: active.length > 0 }">Title</div>
    <div class="inputTitle">
      <newInput v-model:InputText="InputText" :active="active" />
    </div>
    <div class="textTitle" :class="{ color: active.length > 0 }">
      Please enter the title
    </div>
    <div class="titleMessage">Message</div>
    <div class="inputTextArea">
      <NewTextArea v-model:TextAreaInput="TextAreaInput" />
    </div>
    <div class="titleMessage">Character</div>
    <div class="dropDownMenu">
      <suspense>
        <template #default>
          <CharactersList v-model:CharactersValue="CharactersValue" />
        </template>
      </suspense>
    </div>
    <div class="inputCheckBox">
      <div class="inputCheckBox__check">
        <InputCheckBox v-model:checked="checked" />
      </div>
      <span class="inputCheckBox__text"
        >I want to use InterGalaxy QuickPost&#x2122;
      </span>
    </div>
    <div class="sendButton">
      <SendButton @click="getData" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import newInput from "../components/newInput";
import NewTextArea from "../components/NewTextArea";
import CharactersList from "../components/CharactersList";
import SendButton from "../components/SendButton";
import InputCheckBox from "../components/InputCheckBox";
import NavBar from "../components/NavBar";
import InputsValue from "../Store/Store";

export default {
  name: "FirstPage",
  components: {
    newInput,
    NewTextArea,
    CharactersList,
    SendButton,
    InputCheckBox,
    NavBar,
  },

  setup() {
    const {
      InputText,
      TextAreaInput,
      CharactersValue,
      FinalValue,
      FetchedData,
      checked,
      fetchData,
    } = InputsValue();

    onMounted(() => {
      fetchData();
    });

    function getData() {
      if (
        InputText.value.length > 2 &&
        TextAreaInput.value.length > 2 &&
        CharactersValue.value.length > 0
      ) {
        const current = new Date();
        const date =
          current.getFullYear() +
          "-" +
          (current.getMonth() + 1) +
          "-" +
          (current.getDate() + 1);
        const time =
          current.getHours() +
          ":" +
          current.getMinutes() +
          ":" +
          current.getSeconds();

        FinalValue.value.push({
          title: InputText.value,
          message: TextAreaInput.value,
          characters: JSON.parse(CharactersValue.value),
          date: date,
          time: time,
          checked: checked.value,
        });

        InputText.value = "";
        TextAreaInput.value = "";
      }
    }

    const active = ref(InputText);

    return {
      InputText,
      TextAreaInput,
      CharactersValue,
      FinalValue,
      FetchedData,
      checked,
      getData,
      active,
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



.Container {
  margin: auto;
  max-width: 460px;
  max-height: 100vh;
  margin-top: 150px;
  display: grid;
  grid-template-rows: repeat(auto-fit, repeat(500px, 1fr));
  padding: 5px;

  .header {
    display: flex;
    justify-content: center;

    h1 {
      font-weight: 200;
    }
  }

  .titleName {
    font-size: 16px;
    width: 30px;
    height: 20px;
    color: #de212b;
    margin-bottom: 10px;
    margin-top: 50px;
  }

  .textTitle {
    width: 147px;
    height: 10px;
    font-size: 12px;
    color: #de212b;
    margin-top: 4px;
  }

  .color {
    color: #324b72;
  }

  .titleMessage {
    font-size: 16px;
    max-width: 460px;
    height: 11px;
    color: #324b72;
    margin-top: 20px;
  }
  .inputTextArea {
    margin-top: 20px;
  }

  .dropDownMenu {
    max-width: 460px;
    margin-top: 20px;
  }

  .inputCheckBox {
    display: grid;
    grid-auto-columns: 30px auto;
    grid-template-areas: "check text";
    margin-top: 20px;

    &__check {
      grid-area: check;
    }

    &__text {
      grid-area: text;
      display: flex;
      align-items: center;
      color: #324b72;
    }
  }
  .sendButton {
    max-width: 460px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
