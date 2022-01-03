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