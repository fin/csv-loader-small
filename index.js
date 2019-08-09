var Papa = require('papaparse');
var loaderUtils = require('loader-utils');


module.exports = function (text) {
  var config = loaderUtils.getOptions(this);
  var parsed = Papa.parse(text, config);

  if (this.cacheable) {
    this.cacheable();
  }
  var keys = [...new Set(parsed.data.map(d => Object.keys(d)).flat())];
  var valuelist = parsed.data.map(d => keys.map(k => d[k]));

  return `var ks = ${JSON.stringify(keys)};
          var vs = ${JSON.stringify(valuelist)}
          module.exports = vs.map(d => { var r = {}; d.map((ds,i) => r[ks[i]] = ds); return r;});`;
};
