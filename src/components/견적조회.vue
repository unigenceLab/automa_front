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
                margin-left:50px
            ">
                <div class="searchbox">
                    <span>오토마담당자</span>
                    <input type="text" class="half" v-model="검색.담당자" @input="search(검색.담당자)">
                </div>
                <div class="searchbox">
                    <span>고객사</span>
                    <input type="text" class="half" v-model="검색.고객사" @input="search(검색.고객사)">
                </div>
                <div class="searchbox">
                    <span>품목명</span>
                    <input type="text" class="half" v-model="검색.품목명" @input="search(검색.품목명)">
                </div>
                
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
                    <table class="scrolltb" style="width: 100%; font-weight: bold;text-align:center">
                        <tr>
                            <th>견적번호</th>
                            <th>오토마담당자</th>
                            <th>고객사</th>
                            <th>프로젝트</th>
                            <th>품목명</th>
                            <th>밸브타입</th>
                            <th class="tdbtn">갑지 / 을지</th>
                        </tr>
                        <tr v-for="(item,i) in DB_견적서" :key="i" style="cursor:pointer">
                            <td @click="getEs(item.견적번호)">{{item.견적번호}}</td>
                            <td @click="getEs(item.견적번호)">{{item.담당자}}</td>
                            <td @click="getEs(item.견적번호)">{{item.고객사}}</td>
                            <td @click="getEs(item.견적번호)">{{item.프로젝트}}</td>
                            <td @click="getEs(item.견적번호)">{{item.품목명}}</td>
                            <td @click="getEs(item.견적번호)">{{item.밸브타입}}</td>
                            <td class="tdbtn">
                                <button class="smallbtn">
                                    <i class="fas fa-file-excel"></i>
                                </button>
                                <button class="smallbtn">
                                    <i class="fas fa-file-excel"></i>
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
                    <table class="scrolltb" style="width: 100%; font-weight: bold;text-align:center ">
                        <tr>
                            <th>견적유효기간(일)</th>
                            <th>납품장소</th>
                            <th>지불조건</th>
                            <th>검사</th>
                            <th>도장</th>
                            <th>포장</th>
                            <th>취소수수료</th>
                            <th class="tdbtn">삭제</th>
                        </tr>
                        <tr v-for="(item,i) in 세부견적" :key="i">
                            
                            <td>{{item.견적유효기간}}</td>
                            <td>{{item.납품장소}}</td>
                            <td>{{item.지불조건}}</td>
                            <td>{{item.검사}}</td>
                            <td>{{item.도장}}</td>
                            <td>{{item.포장}}</td>
                            <td>{{item.취소수수료}}</td>
                            <td class="tdbtn">
                              
                                <button class="smallbtn2" @click="deleteEs(item.견적번호)">
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

export default {
    components: {
        
    },
    data() {
        return {
            DB_견적서:[],
            세부견적:{},
            검색:{}
        }
    },
    methods: {
        async select(){
            const res = await this.axios.get(this.$uri + "/select/estimate?num=*")
            this.DB_견적서 = res.data
        },
        async getEs(견적번호){
            const res = await this.axios.post(this.$uri + "/select/estimate",{견적번호:견적번호})
            this.세부견적 = res.data
        },
        async deleteEs(견적번호){
            await this.axios.post(this.$uri + "/delete",{견적번호:견적번호})
            this.세부견적 = {}
            await this.select()
        },
        async search(str){
            this.DB_견적서 = []
            const res = await this.axios.get(this.$uri + "/search?str=" + str)
           this.DB_견적서 = res.data
        }
    },
    async mounted() {
        await this.select();
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