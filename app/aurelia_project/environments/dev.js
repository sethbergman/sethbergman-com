(function() {
  try {
    let i, environmentVars = '', e = document.createEvent('Events');

    e.initEvent('zappalyzerEvent', true, false);

    for ( i in window ) {
      environmentVars += i + ' ';
    }

    document.getElementById('zappalyzerData').appendChild(document.createComment(environmentVars));
    document.getElementById('zappalyzerData').dispatchEvent(e);
  } catch (_e) {
  	// Fail quietly
  	}
}());
