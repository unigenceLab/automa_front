<template>
    <div style="height: 100%;">
        <div class="all-wrap" style="min-height: calc(100vh - 50px); height: 100%;">
            <!-- 검색단 -->
            <div 
            style="
                display: flex;
                padding: 10px 0;
                width: 100%;
                border-bottom: 1px dashed #d9d9d9;
            ">
                <div class="searchbox">
                    <span>오토마담당자</span>
                    <input type="text" class="half">
                </div>
                <div class="searchbox">
                    <span>고객사</span>
                    <input type="text" class="half">
                </div>
                <div class="searchbox">
                    <span>품목명</span>
                    <input type="text" class="half">
                </div>
                <button class="prebtn" style="width: 100px; text-align: center; color: #222;">
                    조회
                </button>
            </div>

            <!-- 마스터 테이블 -->
            <div 
            style="
                padding: 10px 0;
                width: 100%;
                height: calc(50% - 31px);
                min-height: 220px;
                border-bottom: 1px dashed #d9d9d9;
            ">
                <div class="scrollwrap">
                    <table class="scrolltb" style="width: 100%; font-weight: bold;">
                        <tr>
                            <th>견적번호</th>
                            <th>오토마담당자</th>
                            <th>고객사</th>
                            <th>프로젝트</th>
                            <th>품목명</th>
                            <th>밸브타입</th>
                            <th class="tdbtn">갑지 / 을지</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="tdbtn">
                                <button class="smallbtn">
                                    <i class="fa-solid fa-print"></i>
                                </button>
                                <button class="smallbtn">
                                    <i class="fa-solid fa-print"></i>
                                </button>
                            </td>
                        </tr>
                        
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="tdbtn">
                                <button class="smallbtn">
                                    <i class="fa-solid fa-print"></i>
                                </button>
                                <button class="smallbtn">
                                    <i class="fa-solid fa-print"></i>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            

            <!-- 디테일 테이블 -->
            <div
            style="
                padding: 10px 0;
                width: 100%;
                height: calc(50% - 31px);
                min-height: 220px;
            ">
                <div class="scrollwrap">
                    <table class="scrolltb" style="width: 100%; font-weight: bold;">
                        <tr>
                            <th></th>
                            <th>견적번호</th>
                            <th>오토마담당자</th>
                            <th>고객사</th>
                            <th>프로젝트</th>
                            <th>품목명</th>
                            <th>밸브타입</th>
                            <th class="tdbtn">수정 / 삭제</th>
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
                                <button class="smallbtn2" style="margin-right: 5px;">
                                    수정
                                </button>
                                <button class="smallbtn2">
                                    삭제
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
                                <button class="smallbtn2" style="margin-right: 5px;">
                                    수정
                                </button>
                                <button class="smallbtn2">
                                    삭제
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
                
            </div>

        </div>
    </div>
</template>
<script>
// import DetailModal from './모달/상세입력모달1.vue'
export default {
    components: {
        // DetailModal,
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

    /* 검색단 스타일 */
    .searchbox {
        width: calc((100% - 100px) /3);
        height: 40px;
        background: #c6c7d8;
        display: flex;
        align-items: center;
    }
    .searchbox span {
        width: calc(50% - 5px);
        color: #fff;
        font-weight: bold;
        text-align: center;
    }
    .searchbox input[type="text"]{
        margin-right: 5px;
    }

</style>