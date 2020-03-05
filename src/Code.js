function onInstall(e) {
  onOpen(e);
}
function onOpen(e) {
  const menu = DocumentApp.getUi().createAddonMenu();
  // Note: Cannot add user-specific menu items here, because user id is not available at this stage.
  // menu.addItem('Launch', 'showMarkup');
  // menu.addSeparator();
  menu.addItem('Launch', 'showSidebarUI');
  menu.addToUi();
}
function showSidebarUI() {
  const FILENAME = 'UI';
  const TITLE = 'Personal Details'
  var ui = HtmlService.createTemplateFromFile(FILENAME)
  .evaluate()
  .setTitle(TITLE)
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showSidebar(ui);
}
function include(param) {
  return HtmlService.createHtmlOutputFromFile(param).getContent();
}

function getFormDataUI(formObject) {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  // const {name,email,birthday} = formObject;

  body.appendParagraph(formObject.name + formObject.email + formObject.birthday);
  
  // body.appendPageBreak();
}
