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
                                <input type="text">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">
                                오토마 담당자
                            </td>
                            <td>
                                <input type="text">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">고객사</td>
                            <td>
                                <input type="text">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">프로젝트</td>
                            <td>
                                <input type="text">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">품목명</td>
                            <td>
                                <input type="text">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">밸브타입</td>
                            <td>
                                <select name="" id="">
                                    <option value="">-선택하세요-</option>
                                </select>
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
                    <button class="prebtn" @click="$router.push({path:'/register/2'})">다음</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    @import '@/assets/style/setting.scss';
    @import '@/assets/style/modal.scss';
    @import '@/assets/style/font.css';
</style>