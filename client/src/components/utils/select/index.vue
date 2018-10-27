<template>
  <div class="select">
    <input
      type="text"
      :readonly="true"
      placeholder="Select an option"
      :value="value"
      @click="handleClick"
      @blur="handleBlur"
    />

    <ul v-if="isListVisible">
      <li v-for="(el) in options" :key="el" @mousedown="handleItemClick">{{el}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    onItemClick: Function
  },
  data: function() {
    return {
      isListVisible: false,
      value: ""
    };
  },
  methods: {
    handleClick: function(e) {
      this.$data.isListVisible = !this.$data.isListVisible;
    },
    handleBlur: function(e) {
      if (this.$data.isListVisible) {
        this.$data.isListVisible = false;
      }
    },
    handleItemClick: function(e) {
      this.$data.value = e.target.innerHTML;

      if (this.onItemClick) {
        this.onItemClick(e.target.innerHTML);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 100%;

  input {
    @include input();
    cursor: pointer;
  }

  ul {
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    border: 1px solid rgba(#000, 0.12);
    border-radius: 3px;

    li {
      padding: 10px;
      background-color: #fff;
      cursor: pointer;

      &:hover {
        background-color: $color-grey-main;
      }
    }
  }
}
</style>
