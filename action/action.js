// timer
function addActionTimer(contId) {
  const el = document.getElementById(contId);
  const endtime = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);

  const timer = document.createElement('div');
  timer.classList.add('action');
  el.append(timer);

  setInterval(() => {
    const t = timeChange(endtime)
    timer.innerHTML = `
      <div class='action-col'> <span class='time'>${t.days}</span> <span class='str'>дн</span> </div>
      <div class='action-col'> <span class='time'>${t.hours}</span> <span class='str'>час</span> </div>
      <div class='action-col'> <span class='time'>${t.minutes}</span> <span class='str'>мин</span> </div>
      <div class='action-col'> <span class='time sec'>${t.seconds}</span> <span class='str'>сек</span> </div>`
  }, 1000)
}

function timeChange(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

addActionTimer('action');
addActionTimer('action2');
addActionTimer('action3');
addActionTimer('action4');
addActionTimer('action5');
