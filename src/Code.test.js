const exportedFunc = require('./Code');

if ((typeof GasTap)==='undefined') { // GasT Initialization. (only if not initialized yet.)
  
  eval(UrlFetchApp.fetch('https://raw.githubusercontent.com/kevincar/gast/master/index.js').getContentText());
} 
let tap = new GasTap({logger: loggerFunc});

tap.logger('testsing gastap');

// test('check getFormdata', () => {
//   let name= 'Mark Andog';
//   let email = 'andogreymark@gmail.com';
//   let birthday = '10/08/1995';
//   expect(exportedFunc.getFormDataUI(name, email, birthday)).toBe('Mark Andog', 'andogreymark@gmail.com', '10/08/1995')
// });

// test('check showSidebarUI', () => {
//   expect(exportedFunc.showSidebarUI()).toBe('UI');
// });