<template>
  <div :class="$options.name">
    <app-hero :action="{ to: { name: `article` }, label: `Click me!` }">
      <template slot="headline">Welcome!
        <div class="carousel">
        
		<a class="carousel-item" href="#five!">
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/naDIpMxtwvg?autoplay=1&loop=1&playlist=naDIpMxtwvg" frameborder="0" allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            
          </a>
		
		<a class="carousel-item" href="#one!">
            <img src="https://loremflickr.com/250/250">
          </a>
         
         
          <a class="carousel-item" href="#two!">
            <img src="https://images.unsplash.com/photo-1517533574866-2d1134aa2185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
          </a>
          <a class="carousel-item" href="#three!">
            <img src="https://loremflickr.com/250/250">
          </a>
          <a class="carousel-item" href="#four!">
            <img src="https://loremflickr.com/250/250">
          </a>
          
        </div>
      </template>
    </app-hero>

    <app-teaser-list :class="`${$options.name}__teaserList`">
      <app-teaser-list-item>
        <app-teaser :action="{ to: { name: `article` }, label: `Read more` }">
          <template slot="headline">Long, long time ago ...</template>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.
          </p>
          <p>
            Diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est.
          </p>
        </app-teaser>
      </app-teaser-list-item>
      <app-teaser-list-item>
        <app-teaser :action="{ to: { name: `list` }, label: `Read more` }">
          <template slot="headline">Contact with developers</template>

          <p>
            The main developer in Szymon Frankowski. I am in touch with a very talented 
            designer who promised me to make this interface beautiful. I do not have permission
            to put her personal data here yet (I have not asked her so far), so let she remain anonymous.
          </p>
          <p>
            Diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est.
          </p>
        </app-teaser>
      </app-teaser-list-item>
    </app-teaser-list>
  </div>
</template>

<script>
import AppHero from "../app/AppHero.vue";
// import AppLink from "../app/AppLink.vue";
import AppTeaser from "../app/AppTeaser.vue";
import AppTeaserList from "../app/AppTeaserList.vue";
import AppTeaserListItem from "../app/AppTeaserListItem.vue";

export default {
  name: `PageHome`,
  components: {
    AppHero,
   // AppLink,
    AppTeaser,
    AppTeaserList,
    AppTeaserListItem
  }
};

window.onload = () => {
  
  
  /////////// corousel
  let carousels = document.querySelectorAll(".carousel");

  let carouselsInstance = M.Carousel.init(carousels, {
    fullWidth: false,
    dist: -5000,
    shift: 600
  });

  let instance = M.Carousel.getInstance(document.querySelector(".carousel"));
  
  let previous = new Date().getTime();
  function repeatOften() {
    let now = new Date().getTime();
    if (now - previous > 11000) {
      previous = now;
      instance.next();
    }

    requestAnimationFrame(repeatOften);
  }
  requestAnimationFrame(repeatOften);

  let elems = document.querySelectorAll(".collapsible");
  let instances = M.Collapsible.init(elems, {});
  const $live_help = document.getElementById("live_help");

  $live_help.addEventListener(
    "click",
    () => {
      document.getElementById("live_help_modal").classList.remove("hidden");
    },
    false
  );

  document.getElementById('grade').addEventListener(
    "click",
    () => {
      document.getElementById('hall_of_fame_modal').classList.remove("hidden");
    },
    false
  );

 var $tooltipped= document.querySelectorAll('.tooltipped');
	let tooltipped= M.Tooltip.init($tooltipped, {});

	for(let i=0, max=tooltipped.length; i<max;i++){
		setTimeout(()=>{
			tooltipped[i].open();
		},i*1000);
	}



	setTimeout(()=>{
	
		for(let i=0, max=tooltipped.length; i<max;i++){
		setTimeout(()=>{
			tooltipped[i].destroy();
		},i*50);
	}
	
	
	
	},10000);
	




	console.log(tooltipped);
document.querySelector('#live_help_modal > a > i').addEventListener('click',()=>{
        document.getElementById("live_help_modal").classList.add("hidden");
},false);

  document.querySelector('#hall_of_fame_modal > a > i').addEventListener('click',()=>{
     document.getElementById('hall_of_fame_modal').classList.add("hidden");
    
  },false);
  //  let $hallOfFameParalax = document.querySelector('.paralax');
    // var hallOfFameParalaxInstances = M.Parallax.init($hallOfFameParalax, {});
  
  
  
};
</script>

<style lang="scss" scoped>
.PageHome {
  $section-spacing: 3em;
  .carousel {
    a {
      width: 500px;
    }
  }
  &__teaserList {
    margin-top: $section-spacing;
  }
}
</style>
