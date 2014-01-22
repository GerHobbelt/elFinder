// jQuery no-double-tap-zoom plugin

// Triple-licensed: Public Domain, MIT and WTFPL license - share and enjoy!

(function($) {
  var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
  $.fn.nodoubletapzoom = function(onDbTapCallback) {
    // if (IS_IOS)
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) { 
          return; // not double-tap
        } 

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        //$(this).trigger('click').trigger('click');
        
        onDbTapCallback(e, $(this));
      });
  };
  
/*
  $.fn.draggable = function() {
  if (IS_IOS) {
    var offset = null;
    var start = function(e) {
      var orig = e.originalEvent;
      var pos = $(this).position();
      offset = {
        x: orig.changedTouches[0].pageX - pos.left,
        y: orig.changedTouches[0].pageY - pos.top
      };
    };
    var moveMe = function(e) {
      e.preventDefault();
      var orig = e.originalEvent;
      $(this).css({
        top: orig.changedTouches[0].pageY - offset.y,
        left: orig.changedTouches[0].pageX - offset.x
      });
    };
    this.bind("touchstart", start);
    this.bind("touchmove", moveMe);
  }
};

$(".ui-droppable").draggable();
*/
})(jQuery);
