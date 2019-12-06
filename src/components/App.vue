<template>
    <div>
        <div v-for="week in weeks">
            Week
            <div v-for="day in week">{{ day }}</div>
        </div>
    </div>
</template>

<script>
   export default {
       data(){
            return {
           //     month: 2,
           //     year: 2017
                month: 12,
                year: 2019
            }
       },
       computed: {
           days(){
               //generating all days in current month
               let days = [];
               let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
               do{
                   days.push(currentDay);
                   //need to create fresh instance, otherwise reference would be used
                   currentDay = this.$moment(currentDay.add( 1, 'days'));
                   //month + 1 needed, because january = 0
               }while((currentDay.month() + 1)  === this.month);


               const SUNDAY = 0;
               const MONDAY = 1;

               //first day of month
               currentDay = this.$moment(days[0]);
               //add previous days to start of array, but only if current day is not first day to display
               if(currentDay.day() !== MONDAY){
                   do{
                       currentDay = this.$moment(currentDay).subtract(1, 'days');
                       //unshift adds add start of array
                       days.unshift(currentDay);

                   }while(currentDay.day() !== MONDAY);
               }


               //last day of month
               currentDay = this.$moment(days[days.length -1]);
               //add following days to end of array, but only if current day is not last day to display
               if(currentDay.day() !== SUNDAY){
                   do{
                       currentDay = this.$moment(currentDay).add(1, 'days');
                       //push adds add end of array
                       days.push(currentDay);

                   }while(currentDay.day() !== SUNDAY);
               }

               return days;
           },
           weeks(){
               //multidimensional array
               let weeks = [];
               let week = [];

               //group all days in separate weeks
               for( let day of this.days){
                   week.push(day);
                   if(week.length === 7){
                       weeks.push(week);
                       week =[];
                   }
               }

               return weeks;
           }
       }
   }

</script>