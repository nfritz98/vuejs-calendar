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
               let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'D-M-YYYY');
               days.push(currentDay);
               return days;
            /*   do{


               }while();*/
           }
       }
   }

</script>