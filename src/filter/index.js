import Vue from 'vue'
import moment from 'moment';

export function filters() {
    Vue.filter('formatDate', function (value) {
        if (value) {
            if (moment.unix(value).isValid())
                return moment.unix(value).format('DD-MM-YYYY')
            if (moment(value).isValid())
                return moment(value).format('DD-MM-YYYY')
            return ''
        }
    });
    Vue.filter('formatDateTime', function (value) {
        if (value) {
            if (value == "2001-01-01T00:00:00Z" || value == "0001-01-01T00:00:00Z") {
                return null;
            }
            else {
                return moment(value).utcOffset(7).format("DD/MM/YYYY HH:mm");
            }
        }
        return "";
    });
    Vue.filter('formatDateTimeNotify', function (value) {
        if (value) {
            let values = value.split('T');
            let times = values[1].split('.')
            let today = values[0].split('-')
            let time = times[0].split(':')
            return today[2] + "-" + today[1] + "-" + today[0] + " " + time[0] + ":" + time[1] + ":" + time[2]
        }
    });
    Vue.filter('capitalize', function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    });
    Vue.filter('capitalising', function (data) {
        var capitalized = []
        data.split(' ').forEach(word => {
            capitalized.push(
                word.charAt(0).toUpperCase() +
                word.slice(1).toLowerCase()
            )
        })
        return capitalized.join(' ')
    })
}