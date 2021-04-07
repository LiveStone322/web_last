<template>
  <div class="row">
    <div class="input-field col s12">
      <input type="text" />
      <label for="name">Имя</label>
    </div>
  </div>
  <div class="row">
    <div class="input-field col s12">
      <input type="text" />
      <label for="done">Сделано</label>
    </div>
  </div>
  <button v-if="btnText" class="btn">{{ btnText }}</button>
</template>

<script>
export default {
  props: {
    btnText: String,
  },
};
</script>
