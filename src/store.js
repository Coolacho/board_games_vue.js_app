import {defineStore} from "pinia";

export const hoveredStore = defineStore('hovered', {
    state: () => {
        return {
            hovered: null
        }
    },
    actions: {
        hover (itemId) {
            if (this.hovered === null) {
                this.hovered = itemId
            }
        },
        unhover () {
            this.hovered = null;
        }
    }
})