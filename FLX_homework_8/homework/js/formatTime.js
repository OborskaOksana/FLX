function formatTime(x) {
  var day = Math.floor(x * 60 / 86400);
  var hour = Math.floor(((x * 60 / 86400) % 1) * 24);
  var minute = Math.floor(((x * 60 / 3600) % 1) * 60);
  return (day + " day(s) " + hour + " hour(s) " + minute + " minute(s).");
}

formatTime(120);
formatTime(59);
formatTime(3601);