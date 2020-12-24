import { reactive } from 'vue'

const userStore = reactive({
    email: "",
    password: "",
    password_confirmation: ""
})
/*
    Если хотим делать объект общий (shared, store), пишем объект тут
    Если хотим чтобы объект юзался только на компонент, то создаем его в export
*/


export default function() {
    /* Вот так
    
    const userStore = reactive({
        email: "",
        password: "",
        password_confirmation: ""
    })
    
    */
    return {
        userStore
    }
}