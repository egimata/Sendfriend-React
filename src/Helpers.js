export const hideOverlay = (overlayName, animationName) => {
    overlayName = "overlay-" + overlayName;
    var cssClasses = document.getElementById(overlayName).className.split(" ");
    var last = cssClasses.slice(-1)[0];
    if (last.lastIndexOf("animate") != -1) {
      cssClasses.splice(-1);
      cssClasses.push(animationName);
      document.getElementById(overlayName).className = cssClasses.join(" ");

      cssClasses.splice(-1);
      setTimeout(function () {
        document.getElementById(overlayName).className = cssClasses.join(" ");
      }, 1100);
    }
    var vids = document.getElementsByTagName("video");
    if (vids) {
      for (var i = 0; i < vids.length; i++) {
        var video = vids.item(i);
        video.pause();
      }
    }
  }

export const showOverlay = (overlayName, animationName) => {
  overlayName = "overlay-" + overlayName;
  var cssClasses = document.getElementById(overlayName).className.split(" ");
  var last = cssClasses.slice(-1)[0];
  if (last.lastIndexOf("animate") == -1) {
    document.getElementById(overlayName).className =
      document.getElementById(overlayName).className + " " + animationName;
  }
  
  var overlay_id = "overlay-frame-6";
document.getElementById(overlay_id).addEventListener(
  "click",
  function (event) {
    var overlay_id = "overlay-frame-6";
    var e = event || window.event;
    var overlayElement = document.getElementById(overlay_id);
    var overlayContainer = overlayElement.getElementsByClassName("frame-6");
    var clickedDiv = e.toElement || e.target;
    var dismissButton = clickedDiv.parentElement.id == overlay_id;
    var clickOutsideOverlay = false;
    if (overlayContainer.length > 0) {
      clickOutsideOverlay = !overlayContainer[0].contains(clickedDiv) || overlayContainer[0] == clickedDiv;
    }
    if (dismissButton || clickOutsideOverlay) {
      hideOverlay("frame-6", "animate-disappear");
    }
  },
  false
);
};

