$(document).ready(function() {
  $('#file-input').change(function() {
    readimg(this);
  });

  function readimg(file) {
    if (file.files && file.files[0]) {
      let reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('image-hidden').style.display = "block";
        $('#image-hidden').attr('src', e.target.result);
      }
      reader.readAsDataURL(file.files[0]);
    }
  }
});