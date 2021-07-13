const getSleepHours = day => {
    switch(day){
    case 'Monday':
     return 8;
     break;
    case 'Tuesday':
     return 6;
     break;
    case 'Wednesday':
    return 7;
    break;
    case 'Thursday':
    return 5;
    break;
    case 'Friday':
    return 9;
    break;
    case 'Saturday':
    return 5;
    break;
    case 'Sunday':
    return 10;
    break;
    default:
    return 0;
    break;
    } 
  }
  // console.log(getSleepHours('Saturday'))
  
  const getActualSleepHours = () => 
    getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') +
    getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
  
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  //console.log(getIdealSleepHours());
  //console.log(getActualSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
  
    if (actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep')
    }
     else if(actualSleepHours > idealSleepHours){
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours more sleep than you needed this week.')
     }
        else if (actualSleepHours < idealSleepHours){
          console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Please rest.')
        }
          else {
            console.log('There is an Error. Olease check your code')
          }
        }
      
      calculateSleepDebt();