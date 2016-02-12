'use strict';

$(document).ready(function() {
  function js_audioPlayer(location) {
    $('#jquery_jplayer_' + location).jPlayer({
      ready: function() {
        $(this).jPlayer('setMedia', {
          mp3: './audio/' + location + '.mp3'
        });
      },
      cssSelectorAncestor: '#jp_container_' + location,
      swfPath: '/js',
      supplied: 'mp3'
    });

    return;
  };

  for (var i = 1; i <= 9; i++) {
    js_audioPlayer(i);
  };
});
