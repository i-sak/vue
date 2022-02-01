<template>
<div>
    <table>
        <tbody>
            <tr v-for='a1 in temp_list' @click="go_board_read">
                <td>{{a1}} </td>
                <td>
                    <!--<router-link to="/board_read">HELLO WORLD</router-link>-->
                    <p>HELLO WORLD</p>
                </td>
            </tr>
        </tbody>
    </table>
    <ul class="pageNumberList">
        <li v-for="a1 in temp_list">
            <router-link to="/board_main"> {{a1 }}</router-link>
        </li>
    </ul>
    <div>
        <router-link to="/board_write">글쓰기</router-link>
    </div>

</div>
</template>
<script>
// module.exports에 세팅한 값은 template 태그에서 사용할 수 있다.
module.exports = {
    data : function() {
        return {
            // template 에서 사용 가능한 변수
            // 나중에 서버로 부터 받아올 것
            temp_list : [ 1,2,3,4,5,6,7,8,9,10 ]
        }
    },
    methods : {
        go_board_read : function() {
            this.$router.push('/board_read')
        }
    }
}
</script>