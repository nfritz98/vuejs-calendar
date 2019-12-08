<template>
    <div>
        <div>{{ formattedDate }}</div>
        <button @click="decrease">-</button>
        <button @click="increase">+</button>
    </div>
</template>
<script>
    export default {
        props: [ 'month' ],
        methods: {
            decrease(){
console.log('-');
            },
            increase(){
                console.log('+');

            },
        },
        computed: {
            formattedDate(){
                return this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D').format('MMMM YYYY');
            },
            month() {
                return this.$store.state.currentMonth;
            },
            year() {
                return this.$store.state.currentYear;
            }
        }
    }
</script>
