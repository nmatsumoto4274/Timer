// 時刻を保持するクラス
class Time {
    constructor(date, time) {
        this.date = date
        this.showTime = time
    }
}

// 0埋め・mm:ss表示
// dt.getMinutes() or dt.getSeconds()
function makeShowTime(dt) {
    console.log(dt);
    return ("0" + dt.getMinutes()).slice(-2) + ":" + ("0" + dt.getSeconds()).slice(-2)
}

// ページ読み込み時に実行する処理
let time = null;
window.onload = function () {
    date = new Date("2021/02/16 00:02:00")
    time = new Time(date, makeShowTime(date))
    console.log(time);
    document.getElementById("time_text").innerHTML = time.showTime;
}

//インターバルのID
var intervalId = null;

// 時間の更新
function count() {
    time.date = new Date(time.date.getTime() - 1 * 1000);
    time.showTime = makeShowTime(time.date);
    console.log(time);
    document.getElementById("time_text").innerHTML = time.showTime;

    // 00:00になったら停止
    if (time.showTime == "00:00") {
        clearInterval(intervalId);
        let audio = new Audio("alerm.mp3");
        audio.play();
        document.getElementById("alert").innerHTML = "It's time!";
    }
}

// startボタンを押下した時の処理
function start() {
    // ボタンを非活性
    var start_buttoon = document.getElementById("start_button");
    start_buttoon.disabled = "disabled";

    // タイマースタート
    intervalId = setInterval("count()", 1000);

}