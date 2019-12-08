<template>
    <div id="event-form" :class="{ active: active }" :style="{ top: top, left: left }">
        <h4>Add an event</h4>
        <p> {{ date.format('dddd, MMM Do') }}</p>
        <div class="text">
            <input v-focus type="text" placeholder="Enter description here" v-model="description" @keyup.enter="create">
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
                    //then uses promise created in index.js addEvent-action
                    this.$store.dispatch('addEvent', this.description).then(_ => {
                        //close form and clear input on event-create, only when promise resolves
                        this.description = '';
                        this.$store.commit('eventFormActive' , false);
                    });
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
            },
            date() {
                return this.$store.state.eventFormDate;
            }
        },
        directives: {
            focus: {
                update(el){
                    el.focus();
                }
            }
        }
    }

</script>