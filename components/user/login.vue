<template>

    <div>
        <div v-if="is_login_fail == true">
            <h3>로그인 실패</h3>
        </div>
        <!-- vue.js에선 form tag는 사용하지 않음 -->
        <h1>login</h1>
        <input type="text" v-model="user_Id"><br>
        <input type="password" v-model="user_pw"><br>
        <button type="button" @click="check_input">로그인</button>

    </div>
</template>
<script>
module.exports = {
    data : function () {
        return {
            is_login_fail : false,
            // v-model로 data와 연결 시킴
            user_id : '',
            user_pw : ''
        }
    },
    methods : {
        check_input : function() {

        }

    }

}
</script>
