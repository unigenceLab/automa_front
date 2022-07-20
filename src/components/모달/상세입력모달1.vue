<template>
    <div class="modal">
        <div class="modalall">
            <div style="width: 100%; height: 100%;">
        
                <!-- 상단 테이블 div -->
                <div 
                style="
                    width: 100%;
                    padding: 10px 0;
                    border-bottom: 1px dashed #d9d9d9;
                ">
                    <!-- 좌측 테이블 -->
                    <table style="width: 100%; height: auto;">
                        <tr>
                            <td class="center">
                                견적번호
                            </td>
                            <td>
                                <input type="text" v-model="param.견적번호" disabled>
                            </td>
                        </tr>
                        <tr>
                            <td class="center">
                                오토마 담당자
                            </td>
                            <td>
                                <input type="text" id="chk" v-model="param.담당자" @input="insert()">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">고객사</td>
                            <td>
                                <input type="text" id="chk" v-model="param.고객사" @input="insert()">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">프로젝트</td>
                            <td>
                                <input type="text" id="chk" v-model="param.프로젝트" @input="insert()">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">품목명</td>
                            <td>
                                <input type="text" id="chk" v-model="param.품목명" @input="insert()">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">밸브타입</td>
                            <td>
                                <input type="text" v-model="param.밸브타입" disabled>
                            </td>
                        </tr>
                    </table>
                </div>

                <!-- 이미지 단 -->
                <div
                style="
                    padding: 10px 0;
                    border-bottom: 1px dashed #d9d9d9;
                ">
                    <div class="imgwrap">
                        <img src="@/assets/testimage/테스트이미지4.png" alt="">
                    </div>
                </div>

                
                
                <!-- 이전/다음 버튼 -->
                <div style="display: flex; justify-content: flex-end; padding: 10px 0;">
                    <button class="prebtn" @click="nullCheck">다음</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {


    data() {
        return {
            param:{견적번호:"",},
        }
    },
    methods: {
        async insert(){
            await this.axios.post(this.$uri + "/insert",this.param);
        },
        nullCheck(){
            var val = false
            var nullchk =  document.querySelectorAll('#chk')
            for(var i=0; i<nullchk.length; i++){
                if(nullchk[i].value != ""){
                    val = true
                    break;
                }
             }

             if(val != true){
                alert("입력 값이 없습니다")
             }else{
                this.$router.push({path:`/register/${this.$route.params.state}/2`, query: {num: this.param.견적번호}})
                
             }
        }
    },
    async activated() {
       // if(this.$route.params.state == 'add'){
            this.param =  this.$route.params.data
            var query = this.$route.params.sort
            if(query == 'AOV'){
                this.param.밸브타입 = 'AOV자동밸브'
            }else{
                this.param.밸브타입 = 'ACV컨트롤밸브'
            }
            const res = await this.axios.get(this.$uri + "/getOrderNum")
            this.param.견적번호 = res.data.toString()
            await this.axios.post(this.$uri + "/insert",this.param);
       // }
        // else if(this.$route.params.state == 'edit'){
        //     const res = await this.axios.get(this.$uri + "/select/estimate?num="+this.$route.query.num)
        //     this.param=res.data[0]
        // }
    },
    
}
</script>
<style scoped lang="scss">
    @import '@/assets/style/setting.scss';
    @import '@/assets/style/modal.scss';
    @import '@/assets/style/font.css';
</style>