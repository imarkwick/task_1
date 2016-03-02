$(document).ready(function() {

  var date = new Date();

  var min = minDate(date);
  console.log(min);

  var form = document.getElementById('form');

  form.onsubmit = function() {return checkAge(min)};
});

var minDate = function(min) {

  var year = min.getFullYear() - 14;

  min.setFullYear(year, min.getMonth(), min.getDate());

  return min;
};

var checkAge = function(minimumAge) {

  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var yr = document.getElementById('yr').value;
  var newDate = new Date(yr, month, day)

  if (newDate > minimumAge) {
    alert('You cannot submit this form. You are younger than 14 years old');
    return false;
  } else if (newDate < minimumAge) {
    alert('Thank you for completig the form');
  };
};