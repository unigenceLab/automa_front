<template>
    <div>

        
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
                        <!-- <tr>
                            <td class="center">
                                견적번호
                            </td>
                            <td>
                                <input type="text" v-model="등록데이터.견적번호">
                            </td>
                        </tr> -->
                        <tr>
                            <td class="center">
                                오토마 담당자*
                            </td>
                            <td>
                                <input type="text" id="chk" v-model="등록데이터.담당자">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">고객사*</td>
                            <td>
                                <input type="text" id="chk"  v-model="등록데이터.고객사">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">프로젝트*</td>
                            <td>
                                <input type="text" id="chk"  v-model="등록데이터.프로젝트">
                            </td>
                        </tr>
                        <tr>
                            <td class="center">품목명*</td>
                            <td>
                                <input type="text"  id="chk" v-model="등록데이터.품목명">
                            </td>
                        </tr>
                    </table>
                    <!-- 추가 버튼 -->
                    <div class="btnwrap" v-show="!수정모드">
                        <button class="bigbtn" style="margin-right: 5px;" 
                        @click="add('AOV')">
                        AOV추가
                        </button>

                        <button class="bigbtn" style="margin-left: 5px;" 
                         @click="add('ACV')">
                         ACV추가
                        </button>
                    </div>
                    <!-- 수정 버튼 -->
                    <div class="btnwrap" style="display: none;" v-show="수정모드">
                        <button class="bigbtn" style="width: 100%; letter-spacing: 20px;"
                        @click="update()"
                        >수정</button>
                    </div>
                </div>

                <!-- 우측 테이블 -->
                <table style="float: right; width: calc(50% - 15px); margin-left: 30px;">
                    <tr>
                        <td class="center">
                            견적유효기간(일)
                        </td>
                        <td>
                            <input type="text"  v-model="등록데이터.견적유효기간">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">
                            납품장소
                        </td>
                        <td>
                            <input type="text"  v-model="등록데이터.납품장소">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">지불조건</td>
                        <td>
                            <input type="text"  v-model="등록데이터.지불조건">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">검사</td>
                        <td>
                            <input type="text"  v-model="등록데이터.검사">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">도장</td>
                        <td>
                            <input type="text"  v-model="등록데이터.도장">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">포장</td>
                        <td>
                            <input type="text"  v-model="등록데이터.포장">
                        </td>
                    </tr>
                    <tr>
                        <td class="center">취소수수료</td>
                        <td>
                            <textarea  v-model="등록데이터.취소수수료"></textarea>
                        </td>
                    </tr>
                </table>
            </div>

            <!-- 2번째 테이블 단 -->
            <div
            style="
                padding: 10px 0;
            ">
                <table style="width: 100%; font-weight: bold;text-align:center">
                    <tr>
                        <th>견적번호</th>
                        <th>오토마담당자</th>
                        <th>고객사</th>
                        <th>프로젝트</th>
                        <th>품목명</th>
                        <th>밸브타입</th>
                        <th>입력</th>
                    </tr>
                   <tr v-for="(item,i) in DB_견적서" :key="i" style="cursor:pointer">
                        <td @click="editEs(item.견적번호)">{{item.견적번호}}</td>
                        <td @click="editEs(item.견적번호)">{{item.담당자}}</td>
                        <td @click="editEs(item.견적번호)">{{item.고객사}}</td>
                        <td @click="editEs(item.견적번호)">{{item.프로젝트}}</td>
                        <td @click="editEs(item.견적번호)">{{item.품목명}}</td>
                        <td @click="editEs(item.견적번호)">{{item.밸브타입}}</td>
                        <td class="tdbtn">
                            <button class="prebtn"
                                    @click="showModal=!showModal,
                                    $router.push({path:'/register/edit/2?num='+item.견적번호}).catch(()=>{})">
                               세부 수정
                            </button>
                           
                        </td>
                    </tr>
                    
                   
                </table>
            </div>

        </div>

        <!-- 모달창 -->
        <div class="btn-close" v-show="showModal">
            <button>
                <i class="fas fa-window-close fa-3x" 
                @click="showModal=!showModal,
                $router.push({path:'/register'}).catch(()=>{}),select()">
                </i>
            </button>
        </div>
        <div class="modalView" v-show="showModal">
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>

export default {
    components: {
       
    },
    data() {
        return {
            showModal:false,
            등록데이터:{
                견적유효기간:'30',
                납품장소:'추후협의',
                지불조건:'정기결제',
                검사:'제외',
                도장:'Maker STD.',
                포장:'Box Or Pallet',
                취소수수료:'설계중 : 발주금액의 20%, 자재 발주 후 : 50%, 자재 가공완료 후 : 70%, 제품 조립 완료 후: 100%'
            
            },
            DB_견적서:[],
            수정모드:false,
           
        }
    },
    methods: {
       async select(){
            const res = await this.axios.get(this.$uri + "/select/estimate?num=*")
            this.DB_견적서 = res.data
        },
        add(str){
            var val = true
            var nullchk =  document.querySelectorAll('#chk')
            for(var i=0; i<nullchk.length; i++){
                if(nullchk[i].value == ""){
                    val = false
                }
            }

            if(val != true){
                alert("* 표시된 곳은 필수 입력사항입니다")
            }else{
                
                this.showModal=!this.showModal
                if(str == 'AOV'){
                    this.$router.push({name:'modal1',path:'/register/1',params:{state:'add',sort:"AOV",data:this.등록데이터}}).catch(()=>{})
                }else{
                    this.$router.push({name:'modal1',path:'/register/1',params:{state:'add',sort:"ACV",data:this.등록데이터}}).catch(()=>{})

                }
            }
        },
       async editEs(견적번호){
            this.수정모드 = true
            const res = await this.axios.post(this.$uri + "/select/estimate",{견적번호:견적번호})
            this.등록데이터 = res.data[0]
        },
        async update(){
            
            await this.axios.post(this.$uri + "/insert",this.등록데이터);
            this.수정모드=!this.수정모드
            this.등록데이터={}
            
        }
    },
   async mounted() {
        await this.select()

    
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

    .btn-close{
        position: absolute;
        right: 152px;
        top: 10px;
        z-index: 1500;
    }
</style>