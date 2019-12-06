<template>
    <div>
        <div v-for="day in days">{{ day }}</div>
    </div>
</template>

<script>
   export default {
       data(){
            return {
                month: 12,
                year: 2020
            }
       },
       computed: {
           days(){
               let days = [];
               let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
               do{
                   days.push(currentDay);
                   //need to create fresh instance, otherwise reference would be used
                   currentDay = this.$moment(currentDay.add( 1, 'days'));
                   //month + 1 needed, because january = 0
               }while((currentDay.month() + 1)  === this.month);
               return days;
           }
       }
   }

</script>