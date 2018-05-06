(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJWdWUuY29tcG9uZW50KCdmaWxlJywge1xyXG4gIHByb3BzOiB7XHJcbiAgICBuYW1lOiBTdHJpbmcsXHJcbiAgICBvcmlnaW46e1xyXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gKHZhbHVlID09PSAnRHJvcGJveCcpIHx8ICh2YWx1ZSA9PT0gJ0dvb2dsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaWQ6e1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kcyA6e1xyXG4gICAgZ2V0SWNvbjpmdW5jdGlvbigpe1xyXG4gICAgICBzd2l0Y2godGhpcy5vcmlnaW4pe1xyXG4gICAgICAgIGNhc2UgJ0Ryb3Bib3gnOlxyXG4gICAgICAgICAgcmV0dXJuICdmYWIgZmEtZHJvcGJveCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdHb29nbGUnOlxyXG4gICAgICAgICAgcmV0dXJuICdmYWIgZmEtZ29vZ2xlLWRyaXZlJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gJ2ZhcyBmYS1xdWVzdGlvbic7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAsXHJcbiAgdGVtcGxhdGU6ICd0aGlzIGlzIGEgZmlsZSBjb21wb25lbnQnXHJcbn0pO1xyXG5cclxuLy8gVmlld1xyXG52YXIgbW9kZWwgPSBuZXcgVnVlKHtcclxuICBlbDogJyNtYWluJyxcclxuICBkYXRhOiB7XHJcbiAgICBtc2c6IFwiVnVlIGlzIHdvcmtpbmcgZmluZVwiLFxyXG4gICAgc3RlcDogMVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdXBsb2FkVGVzdHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnN0ZXAgPSAyO1xyXG4gICAgfSxcclxuICAgIGNoZWNrVGVzdFJ1bGVzOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5zdGVwID0gMztcclxuICAgIH0sXHJcbiAgICBjaGVja0V4Y2VwdGlvblJ1bGVzOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5zdGVwID0gNDtcclxuICAgIH0sXHJcbiAgICBnb1RvOiBmdW5jdGlvbihzdGVwKSB7XHJcbiAgICAgIGlmKHN0ZXAgPCB0aGlzLnN0ZXApIHtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaXNWaXNpdGFibGU6IGZ1bmN0aW9uKHN0ZXApIHtcclxuICAgICAgcmV0dXJuIHN0ZXAgPCB0aGlzLnN0ZXA7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5zZXRUaW1lb3V0KCAoKSA9PiB7ICQoJ3RpcC0tZ28tYmFjaycpLmFsZXJ0KCdjbG9zZScpIH0sIDUwMDApO1xyXG4iXX0=
