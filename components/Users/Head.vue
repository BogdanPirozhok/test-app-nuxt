<template>
    <v-app-bar app>
        <v-col class="text-left">
            <v-toolbar-title v-text="title" />
        </v-col>
        <v-col class="text-right">
            <create-user />
            <counter-users />
        </v-col>
    </v-app-bar>
</template>

<script>
import CreateUser from '@/components/Users/Modals/Create.vue';
import CounterUsers from '@/components/Users/Modals/Counter.vue';

export default {
    name: 'UsersHead',
    components: { CreateUser, CounterUsers },
    data() {
        return {
            title: 'User List'
        }
    }
};
</script>
