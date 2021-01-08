
<template>
  <article>
    <header class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <div class="nav-item"
            :class="{ 'is-active': tab.isActive }"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Tabs',
  data: () => {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name === selectedTab.name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs {
   border-bottom: 2px solid #ff6600;
   margin: -15px -10px;
  }
  .tabs-details {
    padding: 10px;
  }
   ol {
    justify-content: center;
  }
  ul {
    font-size: 20px;
    justify-content: center;
    display: flex;
    padding-top: 20px;
    padding-left: 65px;
    list-style: none;
    li {
      
      margin-right: 80px;
    }
    .nav-item {
      cursor: pointer;
      &:hover {
        color: #FB130A;
      }
      &.is-active {
         background-color: white; 
  color: black; 
  border-bottom-color: rgb(244, 67, 54);
    border-bottom-style: solid;
    border-bottom-width: 3px;
        color: #FB130A;
      }
    }
  }
</style>
