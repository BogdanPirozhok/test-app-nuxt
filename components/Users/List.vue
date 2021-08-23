<template>
    <v-card>
        <v-card-text>
            <v-list three-line>
                <template v-for="(item, index) in items">
                    <v-divider
                        v-if="index !== 0 && index !== items.length"
                        :key="index"
                        inset
                    ></v-divider>
                    <v-list-item
                        :key="item.name + index"
                    >
                        <v-list-item-group>
                            <v-img class="rounded-circle mr-6" width="50" :src="item.avatar || avatarPlaceholder"></v-img>
                        </v-list-item-group>

                        <v-list-item-content>
                            <v-list-item-title v-html="item.name"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.position"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-group>
                            <v-btn @click="remove(index)">
                                <v-icon>
                                    {{ icons.mdiDelete }}
                                </v-icon>
                            </v-btn>
                        </v-list-item-group>
                    </v-list-item>
                </template>
                <template v-if="!quantity">
                    <v-col class="text-center">
                        <span>The list is empty. Add a user.</span>
                    </v-col>
                </template>
            </v-list>
        </v-card-text>
        <confirm ref="confirm" />
    </v-card>
</template>

<script>
import Confirm from '../Common/Confirm.vue';
import { mdiDelete } from '@mdi/js';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'UserList',
    components: { Confirm },
    data() {
        return {
            avatarPlaceholder: 'https://petsworlds.ru/images/sampledata/Profile_avatar_placeholder_large.png',
            icons: {
                mdiDelete
            }
        }
    },
    computed: {
        ...mapGetters({
            quantity: 'users/GET_QUANTITY',
            items: 'users/GET_ITEMS',
        })
    },
    methods: {
        ...mapActions({
            deleteUser: 'users/DELETE'
        }),
        remove(index) {
            this.$refs.confirm.open('Delete', 'Are you sure?', {
                done: () => {
                    this.deleteUser(index);
                }
            });
        },
    }
};
</script>
