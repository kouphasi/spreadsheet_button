function Renew_calender() {
  const spreadsheet     = SpreadsheetApp.getActiveSpreadsheet();//現在アクティブなスプレッドシートを定義
  const sheet = spreadsheet.getSheetByName("calender");//calenderシートの呼び出し
  let cell_year = sheet.getRange(1,1).getValue();
  let cell_month = sheet.getRange(1,2).getValue();
  //数値がどうかテスト【エラー判別用】
  console.log(cell_year+1);
  console.log(cell_month+1);
  let array_of_days = cal_date(cell_year,cell_month);
  console.log(array_of_days);
  var cell_column = 1;
  var cell_row = 1;
  var cell_val = 0;
  for (var j = 0; j < array_of_days.length; j++){
    cell_val = array_of_days[j];
    
    if(cell_val > 0){
      sheet.getRange(cell_row+3,cell_column+1).setValue(cell_val);
    }else{
      sheet.getRange(cell_row+3,cell_column+1).clearContent();
    }


    if(cell_column === 7){
      cell_column = 1;
      cell_row += 6;
    }else{
      cell_column++ ;
    }
    
  }

}


function cal_date(year,month){
  var yearStr = year ;
  var monthStr = month ;
  var dayStr = 1;
  // Dateオブジェクトには実際の月ー１の値を指定するため
  var jsMonth = monthStr - 1 ;
  // Dateオブジェクトは曜日情報を0から6の数値で保持しているため、翻訳する
  var dayOfWeekStrJP = [ "日", "月", "火", "水", "木", "金", "土" ] ;
  // 指定日付で初期化したDateオブジェクトのインスタンスを生成する
  var date = new Date( yearStr, jsMonth , dayStr );
  var dayofweek = date.getDay();
  console.log(dayOfWeekStrJP[dayofweek] + '曜日');
  //最初の週の日曜日は何日か(負も考える)
  var first_monday = 1 - dayofweek;
  //何日まであるかを取得
  var next_month_year = yearStr;
  var next_month = monthStr;
  if(yearStr === 12){
    next_month_year += 1;
    next_month = 1;
  }
  var last_date = new Date( next_month_year, next_month, 0 );
  last_day = last_date.getDate();
  console.log( last_day );
  //月の日すべて取得
  var day_array = [];
  for(var i = first_monday; i <= last_day; i++){
    day_array.push(i);
  }
  console.log(day_array);
  
  return day_array;
}
