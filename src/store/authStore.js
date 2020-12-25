import { observerFactory } from 'r9x_js'

const authStore = observerFactory({
    email: '',
    password:'',
    token:''
})

export default authStore