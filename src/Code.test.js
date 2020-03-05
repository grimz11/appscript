const getFormDataUI = require('./Code');

test('check getFormdata', () => {
  let name= 'Mark Andog';
  let email = 'andogreymark@gmail.com';
  let birthday = '10/08/1995';
  expect(getFormDataUI(name, email, birthday)).toBe('Mark Andog', 'andogreymark@gmail.com', '10/08/1995')
});