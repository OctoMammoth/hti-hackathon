import router from '@/router/index'
//чтобы делать программную навигацию импортим router
/* 
    https://next.router.vuejs.org/introduction.html
*/
export default function() {

    function login() {
        console.log("login")

        router.push({
            path: "/signin",
        })
    }

    function reg(mail) {
        console.log(mail)
    }

    return {
        reg,
        login,
    }
}