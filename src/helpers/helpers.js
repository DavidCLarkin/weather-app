import cloudy from '../images/weatherIcons/wi-cloudy.svg'
import clouds from '../images/weatherIcons/wi-cloud.svg'
import sunny from '../images/weatherIcons/wi-day-sunny.svg'
import littleCloudy from '../images/weatherIcons/wi-day-cloudy.svg'
import shower from '../images/weatherIcons/wi-showers.svg'
import rain from '../images/weatherIcons/wi-rain.svg'
import thunder from '../images/weatherIcons/wi-day-thunderstorm.svg'
import snow from '../images/weatherIcons/wi-day-snow.svg'
import mist from '../images/weatherIcons/wi-windy.svg'

export default {

    convertMonthToString(month) 
    {
        switch(month) 
        {
            case 0: return 'Jan'
            case 1: return 'Feb'
            case 2: return 'March'
            case 3: return 'April'
            case 4: return 'May'
            case 5: return 'June'
            case 6: return 'July'
            case 7: return 'August'
            case 8: return 'Sept'
            case 9: return 'Oct'
            case 10: return 'Nov'
            case 11: return 'Dec'
            default: return 'Not a Month'
        }
    },
    
    convertDateToString(day) 
    {
        switch(day) 
        {
            case 0: return 'Sunday'
            case 1: return 'Monday'
            case 2: return 'Tuesday'
            case 3: return 'Wednesday'
            case 4: return 'Thursday'
            case 5: return 'Friday'
            case 6: return 'Saturday'
            default: return 'Not a Day'
        }
    },

    convertIdToSVG(id)
    {
        switch(id)
        {
            case "01d":
            case "01n": return sunny   
            case "02d":
            case "02n": return littleCloudy
            case "03d":
            case "03n": return clouds
            case "04d":
            case "04n": return cloudy
            case "09d":
            case "09n": return shower
            case "10d":
            case "10n": return rain
            case "11d":
            case "11n": return thunder
            case "13d":
            case "13n": return snow
            case "50d":
            case "50n": return mist
            default: return 'error'
        }
    }
}