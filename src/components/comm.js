import Vue from "vue/dist/vue.esm";

const vm = new Vue({
    el: "#app",
    data: {},
    template: `<div><com /></div>`,

    components: {
        com: {
            data() {
                return { message: '我是 Nyya' }
            },
            template: `<div><h1>{{message}}</h1></div>`
        }
    }
});
