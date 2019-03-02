<template>
  <div :class="$options.name">
    <slot name="header">
      <app-header/>
    </slot>
    <div class="row menu">
      <!-- <div class="col s2">
        <a class="waves-effect waves-light btn">
          
                        <app-link :to="{ name: `article` }"><i class="material-icons right">play_arrow</i></app-link>
        </a>
      </div> -->

<div class="col s2">
	<a class="waves-effect waves-light btn tooltipped" data-position="bottom" data-tooltip="Let us<br />Play!">
              <app-link :to="{ name: `gameplay` }"><i class="material-icons right">play_arrow</i></app-link>
          
        </a>
      </div>


      <div id="live_help" class="col s2">
        <a class="waves-effect waves-light btn tooltipped" data-position="bottom" data-tooltip="Help">
 <i class="material-icons right">live_help</i>
          
        </a>
      </div>

      
      <div id="grade" class="col s2">
	      <a class="waves-effect waves-light btn tooltipped" data-position="bottom" data-tooltip="Hall of<br /> fame">
          <i class="material-icons right">grade</i>
        </a>
      </div>
      <div class="col s2">
        <a class="waves-effect waves-light btn tooltipped" data-position="bottom" data-tooltip="Settings">
          <i class="material-icons right">settings</i>
        </a>
      </div>

      <div class="col s2">
        <a class="waves-effect waves-light btn tooltipped" data-position="bottom" data-tooltip="Help">
          <i class="material-icons right">info</i>
        </a>
      </div>
      <div class="col s2">
        <a class="waves-effect waves-light btn tooltipped" data-position="bottom" data-tooltip="Exit game">
          <i class="material-icons right">power_settings_new</i>
        </a>
      </div>
    </div>











    <app-card-help/>
    <app-card-hall-of-fame/>

    <main :class="`${$options.name}__main`">
      <slot/>
    </main>
    <slot name="footer">
      <app-footer/>
    </slot>
  </div>
</template>

<script>
import AppHeader from "../app/AppHeader.vue";
import AppFooter from "../app/AppFooter.vue";

import AppCardHelp from "../app/AppCardHelp.vue";
import AppCardHallOfFame from "../app/AppCardHallOfFame.vue";
import AppLink from '../app/AppLink.vue';

export default {
  name: `LayoutDefault`,
  components: {
    AppHeader,
    AppFooter,
    AppCardHelp,
    AppCardHallOfFame,
    AppLink
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/objects/wrapper.mixin";
@import "../../scss/main.scss";
.LayoutDefault {
  .card {
    position: absolute;
    z-index: 200;
  }
  i {
    margin-left: 0px;
  }

  .hidden {
    display: none;
  }

  .menu {
    margin-top: 20px;
  }
  &__main {
    @include wrapper();

    padding-top: 3em;
    padding-bottom: 4em;
  }

.material-tooltip {
	
    height: 200px;
}

  .tooltipped {
  }
}
</style>
