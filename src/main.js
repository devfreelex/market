import { r9x } from 'r9x_js'
import appMain from './components/appMain'
import appLogin from './components/appLogin'
import appHome from './components/pages/appHome'
import appNotFound from './components/appNotFound.component'
import appCategory from './components/pages/appCategory'

console.log('Rodrigo asdf')


const routes = {
    firstRoute: { hash: '#/', component: appLogin },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appLogin },
        { hashExp: /^\#\/home$/, component: appHome },
        { hashExp: /^\#\/category$/, component: appCategory },
    ]
}

const app = r9x({
    appMain,
    routes,
})


app.init()