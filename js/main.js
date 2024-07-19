// $(document).ready(function () 
// {
//     let day_time = new Date('6/12/2024')
//     let  da = new Date()
//     let A= Math.abs(day_time-da)
//     day = A/(1000 * 3600 * 24)
//     days = Math.round(day)+1
//     console.log(day)
//     if (days >0)
//     {
//         $("#day").html(days+"天");
//     }
//     else
//     {
//         $(h1).html('');
//     }
  
//     if (days<=10) 
//     {
//         $("#day").css('font-size', '23vh');
//         $("#day").css('color', 'red');
//         $('.public').css('top', '-5%');
//     }
//     }
// );
$(document).ready(function () {
    let targetDate = new Date('6/12/2024');
    let currentDate = new Date();
  
    // Calculate the difference in days (consider negative values)
    let timeDiff = targetDate - currentDate;
    let days = Math.floor(timeDiff / (1000 * 3600 * 24)); // Use Math.floor for whole days
  
    console.log(days);
  
    // Hide the element and clear content if days are less than 0
    if (days < 0) {
      $("#day").hide().html(''); // Chain hide() and html('') for efficiency
    } else {
      // Only display and style if days are 0 or positive
      $("#day").html(days + "天");
      if (days <= 10) {
        $("#day").css({
          'font-size': '23vh',
          'color': 'red',
        });
        $('.public').css('top', '-5%');
      }
    }
  });
  