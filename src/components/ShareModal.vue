<template>
  <div class="modal is-active">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <div style="padding: 1rem;display: flex;justify-content: center;align-items: center;">
        <q-btn flat round color="faded"><i class="fab fa-facebook-f"></i></q-btn>
        <q-btn flat round color="faded"><i class="fab fa-twitter"></i></q-btn>
        <q-btn flat round color="faded"><i class="fab fa-google"></i></q-btn>
        <q-btn flat round color="faded"><i class="fab fa-instagram"></i></q-btn>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>

<script>
export default {
  name: 'ShareModal',
  props: ['closeModal']
}
</script>

<style>
</style>
