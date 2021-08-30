import { reactive, toRefs } from "vue";

const store = reactive({
  InputText: "",
  TextAreaInput: "",
  CharactersValue: "",
  FetchedData: [],
  FinalValue: [],
  checked:'',
});

export default function InputsValue() {
  const fetchData = async () => {
    store.FetchedData = await (
      await fetch("https://rickandmortyapi.com/api/character")
    ).json();
  };

  return { ...toRefs(store), fetchData };
}
