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
                <td><input type="text" v-model="board_subject" disabled></td>
            </tr>
            <tr>
                <td>
                    <textarea v-model="board_content" id="" cols="30" rows="10" disabled></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    <img :src="board_image" alt="">
                </td>
            </tr>
        </tbody>
    </table>

        <router-link to="/board_main">목록보기</router-link>
        <router-link to="/board_modify">수정하기</router-link>
        <router-link to="/board_delete">삭제하기</router-link>
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
    }
}
</script>
