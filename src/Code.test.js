// const exportedFunc = require('./Code');
if ((typeof GasTap)==='undefined') { // GasT Initialization. (only if not initialized yet.)
    eval(UrlFetchApp.fetch('https://raw.githubusercontent.com/zixia/gast/master/src/gas-tap-lib.js').getContentText())
} 
var test = new GasTap();
  


function gastTestRunner() {
  test('Docs exist', function (t) {
    var url = 'https://docs.google.com/document/d/1VdfKbJpwMlfvQjN3whqLfq6Y7PqzOn0dZE2dr0SHMKo/edit';
    var doc = DocumentApp.openByUrl(url);
    t.ok(doc, 'Doc is Active');
  });

  test.finish()
}
