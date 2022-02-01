<template>
<div>
    <table>
        <tbody>
            <tr>
                <!-- name 대신 v-model 을 사용 -->
                <td><input type="text" v-model="board_subject" ></td>
            </tr>
            <tr>
                <td>
                    <textarea v-model="board_content" id="" cols="30" rows="10"></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="file">
                </td>
            </tr>
            <tr>
                <td>
                    <button type="button" @click="check_input">저장</button>
                </td>
            </tr>
        </tbody>
    </table>

</div>
</template>
<script>
module.exports = {
    data : function () {
        return {
            board_subject : '',
            board_content : ''
        }
    },
    methods : {
        check_input : function() {
            if(this.board_subject.length == 0) 
            {
                alert("제목 입력")
                return
            }
            if(this.board_content.length == 0)
            {
                alert("write contnet ")
                return
            }
            alert("저장완료")
            this.$router.push("/board_main")
        }
    }
}
</script>
