Vue.component('file', {
  props: {
    name: String,
    origin:{
      validator: function(value){
        return (value === 'Dropbox') || (value === 'Google');
      }
    },
    id:{
      type: String,
      required: false
    }
  },
  methods :{
    getIcon:function(){
      switch(this.origin){
        case 'Dropbox':
          return 'fab fa-dropbox';
          break;
        case 'Google':
          return 'fab fa-google-drive';
          break;
        default:
          return 'fas fa-question';
          break;
      }
    }
  }
  ,
  template: 'this is a file component'
});

// View
var model = new Vue({
  el: '#main',
  data: {
    msg: "Vue is working fine",
    step: 1
  },
  methods: {
    uploadTests: function() {
      this.step = 2;
    },
    checkTestRules: function() {
      this.step = 3;
    },
    checkExceptionRules: function() {
      this.step = 4;
    },
    goTo: function(step) {
      if(step < this.step) {
        this.step = step;
      }
    },
    isVisitable: function(step) {
      return step < this.step;
    }
  }
});


setTimeout( () => { $('tip--go-back').alert('close') }, 5000);
