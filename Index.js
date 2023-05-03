let time = document.querySelector('.time');
    let dateTime = document.querySelector('.date-time');

    function updateClock() {
      // Get the current time, day , month and year
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      var day = now.getDay();
      var date = now.getDate();
      var month = now.getMonth();
      var year = now.getFullYear();

      // store day and month name in an array
      let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      // format date and time
      hours = hours % 12 || 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      date = date < 10 ? '0' + date : date;

      // display date and time
      let period = hours < 12 ? 'AM' : 'PM';
      time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + period;
      dateTime.innerHTML = dayNames[day] + ', ' + monthNames[month] + ' ' + date + ', ' + year;
    }

    updateClock();
    setInterval(updateClock, 1000);

    console.log(new Date);
    console.log(period);