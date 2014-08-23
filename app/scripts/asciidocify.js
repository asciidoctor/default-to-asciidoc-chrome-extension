'use strict';

(function (document) {
  var wikiFormatSelect = document.getElementById('wiki_format');
  if (wikiFormatSelect) {
    wikiFormatSelect.value = 'asciidoc';
    // Fire event!
    var event = document.createEvent('UIEvents');
    event.initUIEvent('change', true, true);
    wikiFormatSelect.dispatchEvent(event);
  }
}(document));