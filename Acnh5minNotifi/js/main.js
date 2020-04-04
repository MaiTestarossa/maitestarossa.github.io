var flag = true;
var audio = new Audio('when.mp3');
var count = 0;
var hasNotifiedMinute = 0;
var displayCountDown =  document.querySelector('#time');
var fiveMinutes = 60 * 5;
var timerId = 0;
function alert() {
  if (flag) {
    var date = new Date;
    var minute = date.getMinutes();
    if (minute % 5 == 0) {
      if (hasNotifiedMinute < 3){
        audio.play();
        hasNotifiedMinute++;
      }
    }else{
      hasNotifiedMinute = 0;
    }
    count++;
    console.log(count)
  } else {
    count = 0;
    console.log("stopped")
  }
}

function flagSwtich() {
  flag = flag ? false : true;
  if (flag){
    startTimer(fiveMinutes, displayCountDown)
    $('.btn').removeClass("btn-danger");
    $('.btn').addClass("btn-success");
    $('.btn').text("提醒打开中");
  }else{
    clearInterval(timerId);
    displayCountDown.textContent = "0";
    $('.btn').removeClass("btn-success");
    $('.btn').addClass("btn-danger");
    $('.btn').text("提醒关闭中");
  }
}

function startTimer(duration, display) {
  var date = new Date;
  var minute = 4 - date.getMinutes() % 5 ;
  var sec = 60 - date.getSeconds();
  duration = minute * 60;
  duration = duration + sec;
  console.log(date);
  console.log("duration:" + duration);
  console.log("min:" + minute);
  console.log("sec:" + sec);
  var timer = duration, minutes, seconds;
  timerId = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}


setInterval(alert, 3000);
startTimer(fiveMinutes, displayCountDown);
