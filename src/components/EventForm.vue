<template>
    <div id="event-form" :class="{ active: active }" :style="{ top: top, left: left }">
        <h4>Add an event</h4>
        <div class="text">
            <input type="text" placeholder="Enter description here" v-model="description">
        </div>
        <div class="buttons">
            <button @click="create">Create</button>
        </div>
        <button id="close-button" @click="close">&#10005;</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                description: ''
            }
        },
        methods: {
            close() {
                this.$store.commit('eventFormActive', false);
            },
            create() {
                if(this.description.length > 0){
                    this.$store.commit('addEvent', this.description);
                    //close form and clear input on event-create
                    this.description = '';
                    this.$store.commit('eventFormActive' , false);
                }
            }
        },
        computed: {
            top() {
                return `${this.$store.state.eventFormPositionY}px`;
            },
            left() {
                return `${this.$store.state.eventFormPositionX}px`;
            },
            active() {
                return this.$store.state.eventFormActive;
            }
        }
    }

</script>