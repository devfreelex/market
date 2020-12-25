// import add from 'date-fns/add'
import { add, toDate, compareAsc } from 'date-fns/esm'

const authFactory = () => {
    let _token = null
    const validations = {
        email: false,
        password: false
    }

    const _createToken = () => {
        const randomString = Math.random().toString(13).replace('0.', '') 
        const creationTime = new Date().getTime()
        const expirationTime = add(creationTime, { minutes: 60 }).getTime()

        _token = `${creationTime}-${expirationTime}-${randomString}`
        return _token
    }    

    const _validate = (data) => {
        const dataKeys = Object.keys(data)
        const isValid = dataKeys.every( key => {
            return !!data[key]
        })
        
        return isValid ? _createToken() : null
    }

    const validateToken = (token) => {
        if(!token) return false

        const [, expiration ] = token.split('-')
        const now = new Date().getTime()
        const invalid = -1

        return compareAsc(+expiration, now) !== invalid

    }

    const authenticate = ( data ) => _validate(data)

    return {
        authenticate,
        validateToken
    }


}

const authService = authFactory()
export default authService