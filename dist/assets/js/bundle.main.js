(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// View
var model = new Vue({
  el: '#main',
  data: {
    msg: "Vue is working fine",
    step: 1,

    fileReadyForUpload: false,
    uploadProcessing: false,
    fileToUpload: null,

    testDescriptions: null
  },
  methods: {
    uploadTests: function() {

      this.uploadProcessing = true;

      let formData = new FormData(document.getElementById('uploadForm'));
      let uploadRequest = new XMLHttpRequest();
      uploadRequest.open('POST', 'http://localhost:3000/uploadTests', false); // synchronous for ease of use
      uploadRequest.send(formData);

      this.testDescriptions = JSON.parse(uploadRequest.responseText);
      console.log(this.testDescriptions);

      setTimeout(() => {
        this.step = 2;

        this.fileReadyForUpload = false;
        this.uploadProcessing = false;
      }, 1000);

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
    },

    codeToHtml: function(text) {
      let html = text.replace(/\n/g, '<br/>');
      html = html.replace(/\ /g, '&ensp;');
      return html;
    },

    selectFileForUpload: function(event) {
      console.log(event);
      this.fileReadyForUpload = true;
      this.fileToUpload = event.target.files[0];
    }
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBWaWV3XHJcbnZhciBtb2RlbCA9IG5ldyBWdWUoe1xyXG4gIGVsOiAnI21haW4nLFxyXG4gIGRhdGE6IHtcclxuICAgIG1zZzogXCJWdWUgaXMgd29ya2luZyBmaW5lXCIsXHJcbiAgICBzdGVwOiAxLFxyXG5cclxuICAgIGZpbGVSZWFkeUZvclVwbG9hZDogZmFsc2UsXHJcbiAgICB1cGxvYWRQcm9jZXNzaW5nOiBmYWxzZSxcclxuICAgIGZpbGVUb1VwbG9hZDogbnVsbCxcclxuXHJcbiAgICB0ZXN0RGVzY3JpcHRpb25zOiBudWxsXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICB1cGxvYWRUZXN0czogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICB0aGlzLnVwbG9hZFByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWRGb3JtJykpO1xyXG4gICAgICBsZXQgdXBsb2FkUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICB1cGxvYWRSZXF1ZXN0Lm9wZW4oJ1BPU1QnLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VwbG9hZFRlc3RzJywgZmFsc2UpOyAvLyBzeW5jaHJvbm91cyBmb3IgZWFzZSBvZiB1c2VcclxuICAgICAgdXBsb2FkUmVxdWVzdC5zZW5kKGZvcm1EYXRhKTtcclxuXHJcbiAgICAgIHRoaXMudGVzdERlc2NyaXB0aW9ucyA9IEpTT04ucGFyc2UodXBsb2FkUmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRlc3REZXNjcmlwdGlvbnMpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGVwID0gMjtcclxuXHJcbiAgICAgICAgdGhpcy5maWxlUmVhZHlGb3JVcGxvYWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwbG9hZFByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgfSxcclxuICAgIGNoZWNrVGVzdFJ1bGVzOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5zdGVwID0gMztcclxuICAgIH0sXHJcbiAgICBjaGVja0V4Y2VwdGlvblJ1bGVzOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5zdGVwID0gNDtcclxuICAgIH0sXHJcbiAgICBnb1RvOiBmdW5jdGlvbihzdGVwKSB7XHJcbiAgICAgIGlmKHN0ZXAgPCB0aGlzLnN0ZXApIHtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaXNWaXNpdGFibGU6IGZ1bmN0aW9uKHN0ZXApIHtcclxuICAgICAgcmV0dXJuIHN0ZXAgPCB0aGlzLnN0ZXA7XHJcbiAgICB9LFxyXG5cclxuICAgIGNvZGVUb0h0bWw6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgbGV0IGh0bWwgPSB0ZXh0LnJlcGxhY2UoL1xcbi9nLCAnPGJyLz4nKTtcclxuICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFwgL2csICcmZW5zcDsnKTtcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9LFxyXG5cclxuICAgIHNlbGVjdEZpbGVGb3JVcGxvYWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgdGhpcy5maWxlUmVhZHlGb3JVcGxvYWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmZpbGVUb1VwbG9hZCA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=
