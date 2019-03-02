<template>
  <div class="card hidden" id="hall_of_fame_modal">
    <a class="btn-floating halfway-fab waves-effect waves-light red">
      <i class="material-icons">close</i>
    </a>

    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://dummyimage.com/600X100/000/fff">
    </div>
    <div class="card-content">
      <table class="striped">
        <thead>
          <tr>
            <th>position</th>
            <th>name</th>
            <th>points</th>
            <th>awards</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Szymon</td>
            <td>1343000</td>
            <td>
              <i style="color:#ffff00" class="material-icons">stars</i>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Paul</td>
            <td>123422</td>
            <td>
              <i style="color:#b0bec5" class="material-icons">stars</i>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Kate</td>
            <td>4432</td>
            <td>
              <i style="color: #795548" class="material-icons">stars</i>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Michael</td>
            <td>111</td>
            <td></td>
          </tr>
        </tbody>
      </table>
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
 .hidden {
    display: none;
  }
#live_help_modal > a {
  position: absolute;
  top: -20px;
  z-index: 300;
  //     top: -200px;
}
</style>