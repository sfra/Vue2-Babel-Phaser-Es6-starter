<template>
  <div class="PageGameplay">
    <div id="game"></div>
  </div>
</template>

<script>
import Phaser from "phaser";

let $audio = document.createElement('audio');

$audio.setAttribute('src','static/sounds/vv.mp3');
$audio.setAttribute('autoplay',true);


const config = {
  type: Phaser.AUTO,
  width: 455,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  parent: "game"
};

function preload() {
  this.load.image("ground", "images/grass_main_128x128_0.png");
  this.load.image("gutsy", "images/gutsy.png");
  this.load.image("skull", "images/skull.png");
  this.load.spritesheet("dude", "images/skull2.jpg", {
    frameWidth: 32,
    frameHeight: 48
  });
}

var platforms, skull;
function create() {
  
  this.add.image(0, 0, "gutsy");
	
	platforms = this.physics.add.staticGroup();

  platforms.create(0, 550, "ground");

  platforms.create(128, 550, "ground");
  platforms.create(256, 550, "ground");
  platforms.create(384, 550, "ground");
  platforms.create(456, 550, "ground");
  platforms.create(584, 550, "ground");
  platforms.create(676, 550, "ground");


  skull = this.physics.add.sprite(100, 0, "skull");
  skull.setBounce(0.7);
  skull.setCollideWorldBounds(true);
  this.physics.add.collider(skull, platforms);
}

function update() {}

export default {
  name: `PageGameplay`,
  components: {},

  created: function() {
    this.$nextTick(function() {
      var game = new Phaser.Game(config);
    });
  }
};
</script>

<style lang="scss" scoped>
.PageGameplay {
  margin-top: 1.5em;
  height: 100vh;
  width: 100vw;
}
</style>
