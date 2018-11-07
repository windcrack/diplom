export function timer() {
    let deadLine = '2019-07-4';

    let getTimeRem = endtime => {
      let t = Date.parse(deadLine) - Date.parse(new Date()),
        sec = Math.floor(t / 1000 % 60),
        min = Math.floor(t / 1000 / 60 % 60),
        hou = Math.floor((t / 1000 / 60 / 60) % 24),
        day = Math.floor(t / (1000 * 60 * 60 * 24));
      let arr = [hou, min, sec];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
          arr[i] = "0" + arr[i];
        }
      }
      return {
        'total': t,
        'day': day,
        'hours': arr[0],
        'minutes': arr[1],
        'second': arr[2]
      };
    };

    let setClock = (id, endtime) => {
      let time = document.getElementById(id),
        days = time.querySelector('.days'),
        hours = time.querySelector('.hours'),
        minutes = time.querySelector('.minutes'),
        second = time.querySelector('.seconds');

      let updateClock = () => {
        let t = getTimeRem(endtime);
        days.textContent = t.day;
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        second.textContent = t.second;
        if (t.total <= 0) {
          clearInterval(timeInterval);
          day.textContent = "00";
          hours.textContent = "00";
          minutes.textContent = "00";
          second.textContent = "00";
        }
      };
      let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadLine);

}