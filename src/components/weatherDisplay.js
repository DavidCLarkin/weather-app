import React from 'react'
import styles from './scss/weather.module.scss'
import helpers from '../helpers/helpers.js'
import _ from 'lodash';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

const WeatherDisplay = props => {
    const date = new Date();
    let timestamp = date.getTime() / 1000 // today's date

    function convertUNIX(unixTime) {
        return new Date(unixTime * 1000);
    }

    function kelvinToCelsius(kelvinTemp) {
        return Math.round(kelvinTemp - 273);
    }

    function kelvinToFahrenheit(kelvinTemp) {
        return Math.round((kelvinTemp - 273) * 9 / 5 + 32)
    }

    function convertToDate(inputDate) {
        var date = convertUNIX(inputDate)
        var month = helpers.convertMonthToString(date.getUTCMonth())
        var day = helpers.convertDateToString(date.getUTCDay())
        var dateString = '' + day + ', ' + month + ' ' + date.getUTCDate();

        return dateString;
    }

    function convertToTime(inputDate) {
        var date = convertUNIX(inputDate)
        return convertMilitaryTime(date.getUTCHours())
    }

    function convertMilitaryTime(time) {
        if (time == 0) return '12 am'
        else if (time < 12) return time + ' am'
        else if (time == 12) return '12 pm'
        else if (time > 12) return time - 12 + ' pm'
    }

    function filterByTime(time) {
        var date = convertUNIX(time)
        return date.getUTCHours()

    }

    return (
        <div>
            {props.data &&
                <Fade>
                    <h1 className={styles.headers}>{props.city}, {props.country} </h1>
                </Fade>
            }
            {props.todaysIcon &&
                <Fade>
                    <div className={styles.wrapper}>

                        <div className={styles.todaySection}>
                            <div className={styles.iconArea}>
                                <img src={helpers.convertIdToSVG(props.todaysIcon)}
                                    alt="Today's weather icon"
                                    height='100'
                                    wdith='100' />
                            </div>
                            <div className={styles.dayArea}>
                                <p>{convertToDate(timestamp)}</p>
                            </div>
                            <div className={styles.descArea}>
                                <p>{_.capitalize(props.todaysDesc)}</p>
                            </div>
                            <div className={styles.tempArea}>
                                <p className={styles.fahrenheit}>{kelvinToFahrenheit(props.todaysTemp)}º F</p>
                                <p className={styles.degrees}>{kelvinToCelsius(props.todaysTemp)}º C</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            }

            <Fade>
                <div className={styles.container}>
                    {/* Filter so that only 3pm on each day is shown (estimate the weather)*/}
                    {props.data && props.data
                        .filter(e => filterByTime(e.dt) == 15)
                        .map(e => {
                            return (

                                <div className={styles.section}>
                                    <p className={styles.date}>{convertToDate(e.dt)}</p>
                                    <img src={helpers.convertIdToSVG(e.weather[0].icon)}
                                        alt={e.weather[0].main}
                                        height='100'
                                        width='100' />
                                    <p>{_.capitalize(e.weather[0].description)}</p>
                                    <p className={styles.fahrenheit}>{kelvinToFahrenheit(e.main.temp)}º F</p>
                                    <p className={styles.degrees}>{kelvinToCelsius(e.main.temp)}º C</p>
                                </div>
                            )
                        })}
                </div>
            </Fade>

        </div>
    )
}

export default WeatherDisplay