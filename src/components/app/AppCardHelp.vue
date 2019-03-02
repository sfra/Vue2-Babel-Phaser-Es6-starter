<template>
  <div class="card hidden" id="live_help_modal">
    <a class="btn-floating halfway-fab waves-effect waves-light red">
      <i class="material-icons">close</i>
    </a>

    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://dummyimage.com/600x400/000/fff.png">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Instructions
        <i class="material-icons right">more_vert</i>
      </span>
      <p>
        <a href="#">Visit our web page for more details</a>
      </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">By category
        <i class="material-icons right">close</i>
      </span>
      <ul class="collapsible">
        <li>
          <div class="collapsible-header">
            <i class="material-icons">filter_drama</i>The scope of the game
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons">place</i>The rules
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="material-icons">whatshot</i>Multiplayer game
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCardHelp"
};
</script>

<style lang="scss" scoped>
@import "../../scss/objects/wrapper.mixin";
@import "../../scss/main.scss";

#live_help_modal > a {
  position: absolute;
  top: -20px;
  z-index: 300;
  //     top: -200px;
}
</style>