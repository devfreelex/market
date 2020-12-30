import { r9x } from 'r9x_js'
import appMain from './components/appMain'
import appLogin from './components/appLogin'
import appCategory from './components/pages/appCategory'
import appNotFound from './components/appNotFound.component'

console.log('Rodrigo asdf')


const routes = {
    firstRoute: { hash: '#/', component: appLogin },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appLogin },
        { hashExp: /^\#\/home$/, component: appCategory },
    ]
}

const app = r9x({
    appMain,
    routes,
})


app.init()