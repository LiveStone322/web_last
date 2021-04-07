<template>
  <Controls btnText="test" />
  <ul>
    <Record
      v-for="t of todos.filter(filter)"
      v-bind:todo="t"
      v-bind:key="t.id"
    />
  </ul>
</template>

<script>
import Record from "@/components/Record";
import Controls from "@/components/Controls";
export default {
  name: "Records",
  data() {
    return {
      todos: [
        { id: 1, name: "Asd1", done: false },
        { id: 2, name: "Asd2", done: false },
        { id: 3, name: "Asd3", done: false },
      ],
      filter: () => {
        return true;
      },
    };
  },
  components: {
    Record,
    Controls,
  },
};
</script>
