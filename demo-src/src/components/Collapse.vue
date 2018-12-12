<template>
  <div class="collapse" :class="{ open: open }">
    <div class="toggle" @click="open = !open">{{ title }} <span class="icon">▼</span></div>
    <transition name="slide-down">
      <div class="content" v-if="open"><slot/></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      open: false,
    }
  },
}
</script>

<style lang="scss">
.toggle {
  padding: 12px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  color: #666;
  .icon {
    display: inline-block;
    transition: transform .3s ease-in-out;
    transform-origin: center 10px;
  }
  &:hover {
    color: black;
    background: #f8f8f8;
  }
}
.open {
  .toggle {
    .icon {
      transform: rotate(180deg);
    }
  }
  .slide-down-enter, .slide-down-to {
    opacity: 0;
  }
  .slide-down-enter-active {
    transition: opacity .3s;
  }
}
</style>
