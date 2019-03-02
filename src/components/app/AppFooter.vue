<template>
 <footer class="page-footer grey lighten-1">
          <div class="container">
            <div class="row ">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">


                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://github.com/sfra">Developer's github profile</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Szymon Frankowski
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
</template>

<script>
import AppLink from './AppLink.vue'

export default {
  name: `AppFooter`,
  components: {
    AppLink,
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppFooter {
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: $color-secondary;
  text-align: center;

  &__wrapper {
    @include wrapper();
  }
}
</style>
