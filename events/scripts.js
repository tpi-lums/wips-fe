const eventsList = new Vue({
    el: '#eventsList',
    data: {
        events: []
    },
    created: async function() {
        let resp = await fetch('https://wips-be.herokuapp.com/getEventList');
        let res = await resp.json();
    
        if (resp.status == 200) {
            this.events = res;
            console.log(res);
        }    
    },
    filters: {
        formatDay: function(d) {
            return moment(d).format('ddd, MMM D, YYYY');
        },
        formatTime: function(d) {
            return moment(d).format('h:mm A');
        },
        day: function(d) {
            return moment(d).format('D');
        },
        month: function(d) {
            return moment(d).format('MMM');
        }
    },
    methods: {
        isSameDay: function(d1, d2) {
            return moment(d1).isSame(moment(d2), 'day');
        }
    }
});
