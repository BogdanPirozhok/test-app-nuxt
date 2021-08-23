<template>
    <v-dialog
        v-model="show"
        :max-width="options.width"
        :style="{ zIndex: options.zIndex }"
        @keydown.esc="cancel"
    >
        <v-card>
            <v-toolbar
                dark
                :color="options.color"
                dense
                flat
            >
                <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text v-show="!!message" class="pa-4">{{ message }}</v-card-text>
            <v-card-actions class="pt-0">
                <v-spacer></v-spacer>
                <v-btn color="primary darken-1"
                       text
                       @click.native="agree"
                >
                    Yes
                </v-btn>
                <v-btn color="grey"
                       text
                       @click.native="show = false"
                >
                    Cancel
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data: () => ({
        show: false,
        title: null,
        message: null,
        action: null,
        options: {
            color: 'primary',
            width: 290,
            zIndex: 200
        }
    }),
    methods: {
        open(title, message, action) {
            this.show = true;
            this.title = title;
            this.message = message;
            this.action = action;
        },
        agree() {
            this.show = false;
            this.action.done();
        }
    }
};
</script>
