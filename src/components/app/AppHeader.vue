<template>
  <header :class="$options.name">
    <h1>high on drugs skulls</h1>
  </header>
</template>

<script>
export default {
  name: `AppHeader`,
};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppHeader {
  padding-top: 1em;
  padding-bottom: 1em;
  background: $color-secondary;

  h1 {
    font-size: 30px;
    text-align: center;
  }


  &__wrapper {
    @include wrapper();

    display: flex;
    align-items: center;
  }

  &__logo {
    text-decoration: none;
    font-weight: 500;

    &,
    &:visited {
      color: inherit;
    }

    @media (min-width: 30em) {
      font-size: 2em;
    }
  }

  &__nav {
    margin-left: 1em;
  }
  &__navList {

    display: flex;
  }

  &__navItem {
    &:not(:first-child) {
      margin-left: 0.5em;

      &::before {
        margin-right: 0.5em;
        content: '|';
      }
    }
  }

  &__navLink {
    text-decoration: none;

    &,
    &:visited {
      color: inherit;
    }

    &:focus,
    &:hover,
    &.is-active {
      text-decoration: underline;
    }
  }
}
</style>
