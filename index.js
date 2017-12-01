module.exports = function dedash (str) {
  return str.replace( /[\u2012\u2013\u2014\u2015\u2053]/g, '' )
}
