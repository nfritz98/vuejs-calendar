<template>
    <div :class="classObject" @click="captureClick">
        {{ day.format('D') }}
        <ul class="event-list">
            <li v-for="event in events">{{ event.description }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: [ 'day' ],
        computed: {
            classObject() {
                let isToday = this.day.isSame(this.$moment(), 'day');
                return {
                    day: true,
                    today: isToday,
                    past: this.day.isSameOrBefore(this.$moment(), 'day') && !isToday
                }
            },
            events(){
                let mockData = [
                    {
                        description: '111',
                        date: this.$moment('2019-12-06', 'YYYY-MM-DD')
                    },
                    {
                        description: '222',
                        date: this.$moment('2019-12-16', 'YYYY-MM-DD')
                    },
                    {
                        description: '333',
                        date: this.$moment('2019-11-26', 'YYYY-MM-DD')
                    }
                ];

                return mockData.filter(event => event.date.isSame(this.day, 'day'));
            }
        },
        methods: {
            captureClick(event){
                this.$store.commit('eventFormPosition', { x: event.clientX, y: event.clientY});
                this.$store.commit('eventFormActive', true);
            }
        }
    }
</script>
