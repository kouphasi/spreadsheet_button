function Commit_date() {
  const now = get_date();
  console.log(now);
  const spreadsheet1 = SpreadsheetApp.getActiveSpreadsheet();//現在アクティブなスプレッドシートを定義
  const sheet1 = spreadsheet1.getSheetByName("commited");//commitedシートの呼び出し
  const numColumn = sheet1.getLastColumn();//最終列の列番号を取得
  const numRow = sheet1.getLastRow();//最終行の行番号を取得
  console.log(numColumn);
  console.log(numRow);
  sheet1.getRange(numRow+1,1).setValue(now);
}

function get_date(){//現在の時刻を取得
  var now = new Date();
  console.log(now);
  return now;
}
