<template>
  <div class="select">
    <label>{{label}}</label>
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
    label: String,
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
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 3px;
    font-size: 1.4rem;
    color: rgba(#000000, 0.6);
  }

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
