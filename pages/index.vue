<template>
    <v-container>
        <users-head />
        <v-main>
            <v-container>
                <v-row justify="center" align="center">
                    <v-col cols="12" sm="8" md="6">
                        <user-list />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-container>
</template>

<script>
import UsersHead from '@/components/Users/Head.vue';
import UserList from '@/components/Users/List.vue';

export default {
    name: 'index',
    components: { UserList, UsersHead }
};
</script>
