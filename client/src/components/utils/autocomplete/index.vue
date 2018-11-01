<template>
  <div class="autocomplete">
    <input
      type="text"
      :placeholder="text"
      @input="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.enter="handleSubmit"
    />

    <ul v-if="list.length > 0 && isListVisible">
      <li v-for="(el, index) in list" :key="index" @mousedown="handleItemClick($event, index)">{{el[orderBy]}}</li>
    </ul>

    <span v-if="list.length === 0 && !isFirstTime">No results were found</span>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  props: {
    text: {
      type: String,
      default: "Search"
    },
    module: {
      type: String,
      required: true
    },
    orderBy: {
      type: String,
      required: true
    },
    onItemClick: Function,
    onSubmit: Function
  },
  data: function() {
    return {
      isListVisible: false,
      isFirstTime: true
    };
  },
  computed: mapState({
    list(state) {
      return state[this.module].searchList;
    }
  }),
  methods: {
    handleChange: function(e) {
      if (e.target.value !== "") {
        this.$store.dispatch(`${this.module}/searchCount`, e.target.value);

        if (this.$data.isFirstTime) {
          this.$data.isFirstTime = false;
        }
      }
    },
    handleFocus: function(e) {
      this.$data.isListVisible = true;
    },
    handleBlur: function(e) {
      this.$data.isListVisible = false;
    },
    handleItemClick: function(e, index) {
      if (this.onItemClick) {
        this.onItemClick(this.list[index]);
      }
    },
    handleSubmit: function(e) {
      e.target.blur();

      if (this.onSubmit) {
        this.onSubmit(this.list);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.autocomplete {
  position: relative;
  width: 100%;

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
