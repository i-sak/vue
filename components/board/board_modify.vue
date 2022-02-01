<template>
    <div>
    <table>
        <tbody>
            <tr>
                <!-- name 대신 v-model 을 사용 -->
                <td><input type="text" v-model="board_writer_name" disabled></td>
            </tr>
            <tr>
                <td><input type="text" v-model="board_date" disabled></td>
            </tr>
            <tr>
                <td><input type="text" v-model="board_subject"></td>
            </tr>
            <tr>
                <td>
                    <textarea v-model="board_content" id="" cols="30" rows="10"></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    <img :src="board_image" alt="">
                    <input type="file" name="board_image">

                </td>
            </tr>
        </tbody>
    </table>

    <button type="button" @click="check_input">수정완료</button>
    <router-link to="/board_read">취소</router-link>
    </div>
</template>
<script>
module.exports = {
    data : function() {
        // 사용할 변수 나열
        return {
            board_writer_name : '새로운 작성자',
            board_date : '2022-01-01',
            board_subject : 'new vuejs subject',
            board_content : 'new vuejs contents',
            board_image : 'image/logo.png'
        }
    },
    methods : {
        check_input : function() {
            if(this.board_subject.length == 0) {
                alert("제목 입력")
                return
            }
            if (this.board_content.length == 0){
                alert("write content")
                return
            }

            alert("modify")
            this.$router.push("/board_read")
        }

    }
}
</script>
