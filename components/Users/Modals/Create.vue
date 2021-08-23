<template>
    <v-dialog
        v-model="show"
        persistent
        max-width="600px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-bind="attrs"
                v-on="on"
            >
                <v-icon>
                    {{ icons.mdiPlus }}
                </v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5 mt-2">Create new user</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form
                        ref="form"
                        v-model="model.valid"
                        lazy-validation
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                v-for="field in model.fields"
                                :key="field.name"
                            >
                                <v-text-field
                                    :label="field.placeholder"
                                    v-model="field.value"
                                    :rules="field.rules"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-card-actions class="pa-0 mt-4">
                            <v-spacer></v-spacer>
                            <v-btn
                                @click="show = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                @click="save"
                            >
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mdiPlus } from '@mdi/js';
import { mapActions } from 'vuex';

const urlReg = /^(http[s]*:\/\/)([a-z\-_0-9/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_/._~:?#[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;

export default {
    name: 'CreateUser',
    data() {
        return {
            show: false,
            icons: {
                mdiPlus
            },
            model: {
                valid: true,
                fields: [
                    {
                        value: '',
                        placeholder: 'Name *',
                        name: 'name',
                        rules: [
                            (val) => !!val || 'Name is required'
                        ]
                    },
                    {
                        value: '',
                        placeholder: 'Position *',
                        name: 'position',
                        rules: [
                            (val) => !!val || 'Position is required'
                        ]
                    },
                    {
                        value: '',
                        name: 'avatar',
                        placeholder: 'Avatar',
                        rules: [
                            (val) => ((val && val.length > 0 && !urlReg.test(val)) ? 'Avatar url must be valid' : true)
                        ]
                    }
                ]
            }
        }
    },
    watch: {
        show(val) {
            if (!val) {
                this.$refs.form.reset();
            }
        }
    },
    methods: {
        ...mapActions({
            createUser: 'users/CREATE'
        }),
        save() {
            const valid = this.$refs.form.validate();
            if (valid) {
                const data = [ ...this.model.fields ].reduce((acc, current) => {
                    acc[current.name] = current.value;
                    return acc;
                }, {});

                this.createUser(data);
                this.show = false;
            }
        }
    }
}
</script>
