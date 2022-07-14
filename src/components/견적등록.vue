<template>
    <div>
        <!-- ↓↓↓↓ 입력 버튼을 누르면 뜨는 모달창 ↓↓↓↓ -->
        <!-- <DetailModal1></DetailModal1> -->
        <!-- <DetailModal2></DetailModal2> -->
        <!-- <DetailModal3></DetailModal3> -->
        <!-- <DetailModal4></DetailModal4> -->
        
        <h2>프로젝트명 견적서</h2>
        <!-- 전체 wrap -->
        <div class="all-wrap">
            
            <!-- 상단 테이블 좌우 정렬용 div -->
            <div 
            style="
                overflow: hidden;
                width: 100%;
                padding: 10px 0;
            ">
                <!-- 좌측 테이블 -->
                <div style="float: left; width: calc(50% - 15px); height: auto;">
                    <!-- 테이블 -->
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
                    </table>
                    <!-- 버튼 -->
                    <div class="btnwrap">
                        <button class="bigbtn" style="margin-right: 5px;">AOV추가</button>
                        <button class="bigbtn" style="margin-left: 5px;">ACV추가</button>
                    </div>
                </div>

                <!-- 우측 테이블 -->
                <table style="float: right; width: calc(50% - 15px); margin-left: 30px;">
                    <tr>
                        <td class="center">
                            견적유효기간
                        </td>
                        <td>
                            <input type="text" value="30일">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">
                            납품장소
                        </td>
                        <td>
                            <input type="text" value="추후협의">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">지불조건</td>
                        <td>
                            <input type="text" value="정기결제">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">검사</td>
                        <td>
                            <input type="text" value="제외">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">도장</td>
                        <td>
                            <input type="text" value="Maker STD.">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">포장</td>
                        <td>
                            <input type="text" value="Box or Pallet">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">취소수수료</td>
                        <td>
                            <textarea name="" id="">설계중 : 발주금액의 20%, 자재 발주 후 : 50%, 자재 가공완료 후 : 70%, 제품 조립 완료 후: 100%</textarea>
                        </td>
                    </tr>
                </table>
            </div>

            <!-- 2번째 테이블 단 -->
            <div
            style="
                padding: 10px 0;
            ">
                <table style="width: 100%; font-weight: bold;">
                    <tr>
                        <th></th>
                        <th>견적번호</th>
                        <th>오토마담당자</th>
                        <th>고객사</th>
                        <th>프로젝트</th>
                        <th>품목명</th>
                        <th>밸브타입</th>
                        <th>입력</th>
                    </tr>
                    <tr>
                        <td class="throle">
                            ACV컨트롤밸브
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="tdbtn">
                            <button class="prebtn">
                                입력
                            </button>
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="throle">
                            AOV자동밸브
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="tdbtn">
                            <button class="prebtn">
                                입력
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    </div>
</template>
<script>
import DetailModal1 from './모달/상세입력모달1.vue'
import DetailModal2 from './모달/상세입력모달2.vue'
import DetailModal3 from './모달/상세입력모달3.vue'
import DetailModal4 from './모달/상세입력모달4.vue'
export default {
    components: {
        DetailModal1,
        DetailModal2,
        DetailModal3,
        DetailModal4,
    },
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>
<style scoped lang="scss">
    @import '@/assets/style/setting.scss';
    @import '@/assets/style/font.css';

    .tdbtn {
        width: 120px;
        text-align: center;
    }
</style>