import PraiseButton from './thumb.es';
const cc = new PraiseButton();
let t = "";
xtag.register('x-praise', {
  content: "<div id='thumb' class='hand'>" + 
                    "<div class='finger'></div>" + 
                    "<div class='finger'></div>" + 
                    "<div class='finger'></div>" + 
                    "<div class='finger'></div>" + 
                    "<div class='finger thumb'></div>" + 
                    "<div class='arm'></div>" + 
                  "</div>" + 
                  "<span id='animation' class='hide'>+1</span>",
  methods: {
    praise: function() {
      let _this = this;
      cc.thumbClickAction();
      let animation = _this.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function(){
        animation.className = "hide";
      }, 800);
    }
  },
  events: {
    click: function(e) {
      let _this = this;
      if(e.target.id == "thumb"){
        if(t){
          clearTimeout(t);
        }
        t = setTimeout(() => {
          _this.praise();
        }, 500);
      }
    },
    focus: function() {}
  }
});