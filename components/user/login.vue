<template>

    <div>
        <div v-if="is_login_fail == true">
            <h3>로그인 실패</h3>
        </div>
        <!-- vue.js에선 form tag는 사용하지 않음 : form tag 지운다. -->
        <h1>login</h1>

        <!-- name 대신에 v-model을 설정한다.  -->
        <input type="text" id="user_id" v-model="user_id"><br>
        <input type="password" id="user_pw" v-model="user_pw"><br>
        <button type="button" @click="check_input">로그인</button>
        <router-link to="/join">회원가입</router-link>
    </div>
</template>
<script>
module.exports = {
    data : function () {
        return {
            is_login_fail : false, // 로그인 실패가 되었을 경우에 true 를 세팅할 것
            // v-model로 data와 연결 시킴
            user_id : '',
            user_pw : ''
        }
    },
    methods : {
        check_input : function() {
            // 유효성 검사
            if ( this.user_id.length < 4) {
                alert("아이디는 4글자 이상입니다.")
                this.user_id = ''
                document.querySelector("#user_id").focus()
                return
            }
            if( this.user_pw < 4) {
                alert("비밀번호는 4글자 이상입니다.")
                this.user_pw = ''
                document.querySelector("#user_pw").focus()
                return
            }
            alert("로그인되었습니디.")
            this.$router.push("/")
        }

    }

}
</script>
