<template>
    <div>
        <div id="day-bar">
            <div>Mon</div>
            <div>Tue</div>
            <div>Web</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
        </div>
        <div id="calendar">
            <div v-for="week in weeks" class="calendar-week">
                <calendar-day v-for="day in week" v-bind:day="day"></calendar-day>
            </div>
        </div>
    </div>
</template>

<script>
    import CalendarDay from './CalendarDay.vue';
    export default {
       data(){
            return {
                //use vuex to avoid hardcoded values for day and month, instead use currentYear & currentMonth
               // month: 12, //2
                //year: 2019 //2017
            }
       },
       computed: {
           year(){
               return this.$store.state.currentMonth;
           },
           month(){
               return this.$store.state.currentYear;
           },
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
       },
       components: {
            CalendarDay
       }
   }

</script>