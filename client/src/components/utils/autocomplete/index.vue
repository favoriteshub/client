<template>
  <div class="autocomplete">
    <input
      type="text"
      placeholder="Search"
      @input="handleChange"
      @blur="handleBlur"
      @focus="handleBlur"
      @keyup.enter="submit"
    />

    <ul v-if="!error && isListVisible && list.length > 0">
      <li v-for="(el) in list" :key="el" @mousedown="handleItemClick">{{el}}</li>
    </ul>

    <span v-if="error">No results were found</span>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    error: {
      type: Boolean,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    onItemClick: Function
  },
  data: function() {
    return {
      isListVisible: false
    };
  },
  methods: {
    handleChange: function(e) {
      if (e.target.value !== "") {
        this.$store.dispatch(this.action, e.target.value);
      }
    },
    handleBlur: function(e) {
      this.$data.isListVisible = !this.$data.isListVisible;
    },
    handleItemClick: function(e) {
      if (this.onItemClick) {
        let item = this.$store.getters["search/getElementByTitle"](e.target.innerText);
        this.onItemClick(item);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.autocomplete {
  position: relative;

  input {
    @include input();
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

      &:hover {
        background-color: $color-grey-main;
      }
    }
  }

  span {
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    color: $color-secondary;
  }
}
</style>
