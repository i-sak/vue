// router 기본 세팅
// components
var router = new VueRouter({
    routes : [
        {
            path : '/',
            component : httpVueLoader('../components/main/main.vue')
        },
        {
            path : '/board_main',
            component : httpVueLoader("../components/board/board_main.vue")
        },
        {
            path:'/login',
            component : httpVueLoader("../components/user/login.vue")
        },
        {
            path:'/join',
            component : httpVueLoader("../components/user/join.vue")
        },
        {
            path : '/modify_user',
            component : httpVueLoader("../components/user/modify_user.vue")
        },
        {
            path : '/board_read',
            component : httpVueLoader("../components/board/board_read.vue")
        },
        {
            path:'/board_modify',
            component : httpVueLoader("../components/board/board_modify.vue")
        },
        {
            // 이곳에서 비동기 처리 후 페이지 이동
            path : '/board_delete',
            beforeEnter(to, from, next) {
                alert("삭제되었습니다.")
                next("/board_main")
            }
        },
        {
            path:'/board_write',
            component : httpVueLoader("../components/board/board_write.vue")
        },
        {
             // 이곳에서 비동기 처리 후 페이지 이동
             path : '/logout',
             beforeEnter(to, from, next) {
                 alert("로그아웃되었습니다.")
                 next("/")  // 첫페이지로 이동
             }
        }

    ],
    scrollBehavior(to, from, savePosition) { // 매개변수 무시하면 됨
        return {
            x : 0,
            y : 0
        }
    }
})