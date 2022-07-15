<template>
    <div class="modal">
        <div class="modalall">
            <div style="width: 100%; height: 100%;">
                
                <table style="width: 100%; font-weight: bold;">
                    <colgroup>
                        <col width="30%">
                        <col width="70%">
                    </colgroup>
                    <tr>
                        <th>모델명</th>
                        <th>
                            <input type="text">
                        </th>
                    </tr>
                    <tr>
                        <td>밸브 Body</td>
                        <td>
                            <select name="" id="" class="half">
                                <option value="">-선택하세요-</option>
                            </select>
                            <p class="half">
                                4,000,000원
                            </p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>구동기</td>
                        <td>
                            <select name="" id="" class="half">
                                <option value="">-선택하세요-</option>
                            </select>
                            <p class="half">
                                4,000,000원
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td>브라켓 및 마운팅</td>
                        <td>
                            <select name="" id="" class="half">
                                <option value="">-선택하세요-</option>
                            </select>
                            <p class="half">
                                4,000,000원
                            </p>
                        </td>
                    </tr>
                </table>



                <!-- 악세사리 테이블 -->
                <table style="width: 100%; font-weight: bold;">
                    <colgroup>
                        <col width="30%">
                        <col width="70%">
                    </colgroup>
                    <tr>
                        <th colspan="2">악세사리</th>
                    </tr>
                    <tr>
                        <td>Solenoid valve</td>
                        <td>
                            <p>
                                4,000,000원
                            </p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Limit switch</td>
                        <td>
                            <p>
                                4,000,000원
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Filter Requlator</td>
                        <td>
                            <p>
                                4,000,000원
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Manual handle</td>
                        <td>
                            <p>
                                4,000,000원
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Quick Valve</td>
                        <td>
                            <p>
                                4,000,000원
                            </p>
                        </td>
                    </tr>
                </table>



                <!-- 합계 테이블 -->
                <table style="width: 100%; font-weight: bold;">
                    <colgroup>
                        <col width="30%">
                        <col width="70%">
                    </colgroup>
                    <tr>
                        <td>원가</td>
                        <td>
                            <p>
                                4,000,000원
                            </p>
                        </td>
                    </tr>
                    
                    <tr class="gray">
                        <td>적용 마진율 (업체별)</td>
                        <td style="text-align: right;">
                            <input type="text" class="half textright" value="0원">
                        </td>
                    </tr>
                    
                    <tr class="yellow">
                        <td>견적가</td>
                        <td>
                            <p>
                                5,000,000원
                            </p>
                        </td>
                    </tr>
                </table>


                <!-- 이전/다음 버튼 -->
                <div style="display: flex; justify-content: space-between; padding: 10px 0;">
                    <button class="prebtn" @click="$router.push({path:'/register/3'})">이전</button>
                    <button class="prebtn">저장</button>
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

    table td.throle {
        width: 150px;
    }
</style>