<template>
  <li class="z-depth-2">
    <section>
      <label>
        <input type="checkbox" v-on:change="updateTodo" />
        <span>{{ todo.name }}</span>
      </label>
    </section>
    <section>
      <button class="btn">edit</button>
      <button class="btn red">x</button>
    </section>
  </li>
</template>

<style lang="scss">
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 8px;
  border-radius: 4px;
}
section > button {
  margin-left: 8px;
}
</style>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
