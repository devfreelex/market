import { r9x } from 'r9x_js'
import appMain from './components/appMain'
import appLogin from './components/appLogin'
import appNotFound from './components/appNotFound.component'


const routes = {
    firstRoute: { hash: '#/', component: appLogin },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appLogin },
    ]
}

const app = r9x({
    appMain,
    routes,
})


app.init()