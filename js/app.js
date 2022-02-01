// jQuery => $(function() {
// 
// })

// 페이지가 로딩되면 자동으로 호출되는 함수
window.onload = function() {
    var app = new Vue({
        el : '#app',
        router : router,
        components : {
            'top-menu' : httpVueLoader('../components/common/top_menu.vue'),
            'bottom-info' : httpVueLoader("../components/common/bottom_info.vue")

            /**
             * components : {
             *    top-menu : {
             *      template : '<h1>top menu</h1>'
             *    }
             * }
             * 
             */

            // 'top-menu' : { template : '<h1>TOP MENU</h1>' } 
            // 상단에 코드가 긴 경우에 작성을 못한다.
            // 이런 경우에는 Single File Component를 이용한다.
            
            // Vue.js 는 확장자가 vue인 파일로서 템플릿으로 사용할
            // HTML 데이터를 갖고 있는 파일이다.

            // Component를 만들기 위한 HTML 코드를 문자열로 세팅하는
            // 것이 아닌 외부에 파일로 만들고 이를 이용해 Component를 만들 수 있다.

            // 여기에서는 'HttpVueLoader 라이브러리'를 사용한다.
            // Vue file은 3가지로 구성할 수 있다고 보면 된다.
            // <template></template>
            // <style></style>
            // <script></script>
        }
    })
}