<template>
    <div :class="classObject" > {{ day.format('D') }}</div>
</template>

<script>
    export default {
        props: ['day'],
        computed: {
            //isBefore not offered by moment, therefore usw isSameOrBefore and do not apply on current day
            classObject(){
                let isToday = this.day.isSame(this.$moment(), 'day');
                return {
                    day: true,
                    today: isToday,
                    past: this.day.isSameOrBefore(this.$moment(), 'day') && !isToday
                }
            }
        }
    }
</script>