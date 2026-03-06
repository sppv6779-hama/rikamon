/**
 * Google Apps Script Webアプリ エントリーポイント
 */
function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('りかモン - 理科モンスター育成計算ゲーム')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
