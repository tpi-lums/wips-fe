Vue.component('event-card', {
    template: '#event-template',
    props: ['event'],
    methods: {
        isSameDay: function(d1, d2) {
            return moment(d1).isSame(moment(d2), 'day');
        },
        imgClick: function(url) {
            if (url) {
                this.$emit('img-click', url);
            }
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
});

const eventsList = new Vue({
    el: '#eventsList',
    data: {
        events: [],
        modalImageUrl: '',
        showModal: false
    },
    created: async function() {
        let resp = await fetch('{{apiUrl}}/getEventList');
        let res = await resp.json();
    
        if (resp.status == 200) {
            this.events = res;
        }    
    },
    computed: {
        pastEvents: function() {
            return this.events.filter(x => moment().isAfter(x.endsAt));
        },
        upcomingEvents: function() {
            return this.events.filter(x => moment().isBefore(x.endsAt));
        }
    },
    methods: {
        showModalImage: function(url) {
            this.modalImageUrl = url;
            this.showModal = true;
        }
    }
});


