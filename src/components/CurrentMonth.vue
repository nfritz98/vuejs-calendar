<template>
    <div>
        <div>{{ formattedDate }}</div>
        <button @click="decrease">-</button>
        <button @click="increase">+</button>
    </div>
</template>
<script>
    export default {
        methods: {
            decrease(){
                //Call mutation
                this.$store.commit('setCurrentMonth', this.month - 1);
            },
            increase(){
                this.$store.commit('setCurrentMonth', this.month + 1);
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
