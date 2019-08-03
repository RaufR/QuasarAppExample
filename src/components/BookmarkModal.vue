<template>
  <div class="modal is-active">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <div style="padding: 1rem;display: inline-block;">Your bookmark is saved!</div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>

<script>
export default {
  name: 'BookmarkModal',
  props: ['closeModal']
}
</script>

<style>
</style>
