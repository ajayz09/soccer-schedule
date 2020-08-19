
<template>
  <div class="dropdown">
    <div class="search-bar" style="position:relative" v-if="Object.keys(selectedItem).length === 0">
      <span class="material-icons search-icon">search</span>
      <input
        ref="dropdowninput"
        v-model.trim="inputValue"
        class="dropdown-input"
        type="text"
        placeholder="Enter the team name"
        v-bind:class="{unroundedInput: inputValue && hasDropDown}"
      >
    </div>

    <div v-else @click="resetSelection" class="dropdown-selected">
      <img :src="selectedItem.logo" class="dropdown-item-flag">
      {{ selectedItem.name }}
    </div>
    <div v-show="inputValue && apiLoaded" class="dropdown-list">
      <div
        @click="selectItem(item)"
        v-show="itemVisible(item)"
        v-for="item in itemList"
        :key="item.name"
        class="dropdown-item"
      >
        <div v-if="itemVisible(item) != 0">
          <img :src="item.logo" class="dropdown-item-flag">
          {{ item.name }}
        </div>
        <div v-if="itemVisible(item) === 0">No clubs found</div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../../data/teams.json";

export default {
  name: "DropDown",
  data() {
    return {
      previousInput: "",
      selectedItem: {},
      hasDropDown: false,
      inputValue: "",
      itemList: json,
      apiLoaded: false,
      apiUrl: "https://api-football-v1.p.rapidapi.com/v2/teams/league/"
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    resetSelection() {
      this.selectedItem = {};
      this.$nextTick(() => this.$refs.dropdowninput.focus());
      this.$emit("on-item-reset");
    },
    selectItem(theItem) {
      this.selectedItem = theItem;
      this.inputValue = "";
      this.$emit("on-item-selected", theItem);
    },

    itemVisible(item) {
      let currentName = item.name.toLowerCase();
      let currentInput = this.inputValue.toLowerCase();

      if (this.previousInput != currentInput) {
        this.hasDropDown = false;
      }
      if (this.inputValue != "" && currentName.includes(currentInput)) {
        console.log(item.name);
        this.hasDropDown = true;
        this.previousInput = currentInput;
      }

      return currentName.includes(currentInput);
    },

    getList() {
      this.apiLoaded = true;
    }
  }
};
</script>

<style>
.dropdown {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.dropdown-input,
.dropdown-selected {
  width: 100%;
  padding: 10px 40px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}

.search-icon {
  position: absolute;
  margin: 10px 0 0 10px;
}
.dropdown-input:focus,
.dropdown-selected:hover {
  background: #fff;
  /* border-color: #e2e8f0; */
}
.dropdown-input::placeholder {
  opacity: 0.7;
}
.dropdown-selected {
  font-weight: bold;
  cursor: pointer;
}
.dropdown-list {
  position: absolute;
  width: 100%;
  max-height: 300px;
  /* margin-top: 4px; */
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0 0 8px 8px;
}
.dropdown-item {
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover {
  background: #edf2f7;
}
.dropdown-item-flag {
  max-width: 24px;
  max-height: 18px;
  margin: auto 12px auto 0px;
}

.unroundedInput {
  border-radius: 8px 8px 0 0 !important;
}
</style>