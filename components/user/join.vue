<template>
    <!-- name 속성을 v-model 속성으로 변경 
        속성을 관리할 변수를 vue 변수로 세팅
    -->
    <div>
        <h1>join</h1>
        <div>
            <label for="user_name">이름</label>
            <input type="text" id="user_name" v-model="user_name" class="form-control"/>
        </div>
        <div class="form-group">
            <label for="user_id">아이디</label>
            <div class="input-group">
                <input type="text" id="user_id" v-model="user_id" class="form-control"/>
                <div class="input-group-append">
                    <button type="button" @click='check_user_id_exist' class="btn btn-primary">중복확인</button>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="user_pw">비밀번호</label>
            <input type="password" id="user_pw" v-model="user_pw" class="form-control"/>
        </div>
        <div class="form-group">
            <label for="user_pw2">비밀번호 확인</label>
            <input type="password" id="user_pw2" v-model="user_pw2" class="form-control"/>
        </div>
        <div class="form-group">
            <div class="text-right">
                <!-- type submit을 사용하지 않음, vue에서는 form 태그를 사용하지 않음 그래서 submit 버튼도 함께 사용하지 않음 -->
                <button type="button" @click='check_input' class="btn btn-primary">회원가입</button>
            </div>
        </div>
    </div>

</template>
<script>
module.exports = {
    data : function () {
        return {
            // v-model 하고 이름이 같으면 연결됨
            user_name : '',
            user_id : '',
            user_pw : '',
            user_pw2 : '',
            check_user_id : false // false면 중복확인을 안 한것이고, true이면 중복확인을 한 것으로 봄
        }
    },
    methods : {
        check_input : function() {
            if(this.user_name.length < 2){
                alert("이름은 두 글자 이상 입니다")
                this.user_name = ''
                //$("#user_name").focus()
                document.querySelector("#user_name").focus()
                return
            }
            if(this.user_id.length < 4){
                alert("아이디는 4글자 이상입니다")
                this.user_id = ''
                //$("#user_id").focus()
                document.querySelector("#user_id").focus()
                return
            }
            if(this.user_pw.length < 4){
                alert("비밀번호는 4글자 이상입니다")
                this.user_pw = ''
                //$("#user_pw").focus()
                document.querySelector("#user_pw").focus()
                return
            }
            if(this.user_pw2.length < 4){
                alert("비밀번호는 4글자 이상입니다")
                this.user_pw2 = ''
                // $("#user_pw2").focus()
                document.querySelector("#user_pw2").focus()
                return
            }
            if(this.user_pw != this.user_pw2){
                alert("비밀번호가 일치하지 않습니다")
                this.user_pw = ''
                this.user_pw2 = ''
                // $("#user_pw").focus()
                document.querySelector("#user_pw").focus()
                return
            }
            if (this.check_user_id == false) {
                alert('아이디 중복 확인을 해주세요')
				// $("#user_id").focus()
                document.querySelector("#user_id").focus()
                return
            }

            alert('가입이 완료되었습니다')
            this.$router.push('/login')
        },
        // 중복확인 메서드
        check_user_id_exist : function() {
            alert('사용가능한 아이디 입니다')
            this.check_user_id = true
        }
        
    }
}
</script>
