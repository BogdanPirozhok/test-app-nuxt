<template>
    <v-dialog
        v-if="quantity"
        v-model="show"
        width="300"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="ml-4"
                v-bind="attrs"
                v-on="on"
            >
                Show quantity
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                Number of users: {{ quantity }}
            </v-card-title>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    text
                    @click="show = false"
                >
                    Ok
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'CounterUsers',
    data() {
        return {
            show: false,
        }
    },
    computed: {
        ...mapGetters({
            quantity: 'users/GET_QUANTITY'
        })
    },
}
</script>
