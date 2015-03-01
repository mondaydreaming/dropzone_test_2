$(function() {
  var mediaDropzone;
  mediaDropzone = new Dropzone("#media-dropzone");
  return mediaDropzone.on("success", function(file, responseText) {
    var imageUrl;
    imageUrl = responseText.file_name.url;
  });
});

var appendContent = function(imageUrl, mediaId) {
  $("#media-contents").append('<div class="col-lg-4">' + 
    '<div class="thumbnail"><img src="' + imageUrl + '"/>' +
    '<div class="caption">' +
    '<input id="media_contents_" name="media_contents[]" value="' + mediaId +'" type="checkbox">' + 
    '</div>' +
    '</div></div>');
  $("#delete").removeAttr('disabled');
  $("#no-media").html("");
};