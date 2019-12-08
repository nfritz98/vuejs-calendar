<template>
    <div :class="classObject" @click="captureClick">{{ day.format('D') }}</div>
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
