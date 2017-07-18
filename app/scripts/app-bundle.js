define('../app/src/app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define("app", [],function(){});

define('../app/src/environment', [], function () {
  'use strict';

  (function () {
    try {
      var i = void 0,
          environmentVars = '',
          e = document.createEvent('Events');

      e.initEvent('zappalyzerEvent', true, false);

      for (i in window) {
        environmentVars += i + ' ';
      }

      document.getElementById('zappalyzerData').appendChild(document.createComment(environmentVars));
      document.getElementById('zappalyzerData').dispatchEvent(e);
    } catch (_e) {}
  })();
});
define("environment", [],function(){});

define('../app/src/main', ['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define("main", [],function(){});

define("../app/src/resources/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define("resources/index", [],function(){});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map