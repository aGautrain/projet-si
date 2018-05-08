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
