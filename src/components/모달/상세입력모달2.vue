<template>
    <div class="modal">
        <div class="modalall">
            <div style="width: 100%; height: 100%;">
                <!-- 좌우 테이블 -->
                <div
                style="
                    overflow: hidden;
                    padding: 10px 0 0;
                ">  
                    <table style="float: left; width: calc(50% - 15px); margin-right: 30px; font-weight: bold;" class="bordercolor">
                        <tr>
                            <th colspan="2">VALVE BODY / BONNET</th>
                        </tr>
                        <tr>
                            <td class="throle">body type</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="bonnet.BODY_TYPE" @input="fn_bonnet()">
                                </td>
                        </tr>
                        <tr>
                            <td class="throle">body size</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="bonnet.BODY_SIZE" @input="fn_bonnet()">
                            </td>
                        </tr>
                        <tr>
                            <td class="throle">pr. rating</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="bonnet.PR_RATING" @input="fn_bonnet()">
                            </td>
                        </tr>
                        <tr>
                            <td class="throle">end connection</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="bonnet.END_CONNECTION" @input="fn_bonnet()">
                            </td>
                        </tr>
                        <tr>
                            <td class="throle">bonnet type</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="bonnet.BONNET_TYPE" @input="fn_bonnet()">
                            </td>
                        </tr>
                        <tr>
                            <td class="throle">flow direction</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="bonnet.FLOW_DIRECTION" @input="fn_bonnet()">
                            </td>
                        </tr>
                    </table>
                    
                    <table style="width: calc(50% - 15px); font-weight: bold;" class="bordercolor">
                        <tr>
                            <th colspan="2">MATERIAL</th>
                        </tr>
                        <tr>
                            <td class="throle">body/bonnet</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="material.BONNET" @input="fn_material()">
                            </td>
                        </tr>
                        <tr>
                            <td class="throle">stem</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="material.STEM" @input="fn_material()">
                            </td>
                        </tr>
                        <tr>
                            <td class="throle">plug / disc / ball</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="material.PLUG_DISC_BALL" @input="fn_material()">
                            </td>
                        </tr>
                        <tr>
                            <td class="throle">seat ring</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="material.SEAT_RING" @input="fn_material()">
                            </td>
                        </tr>
                        <tr>
                            <td class="throle">cage / retainer</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="material.CAGE_RETAINER" @input="fn_material()">
                            </td>
                        </tr>
                        <tr>
                            <td class="throle">balance seal</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="material.BALANCE_SEAL" @input="fn_material()">
                            </td>
                        </tr>
                        <tr>
                            <td class="throle">packing</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="material.PACKING" @input="fn_material()">
                            </td>
                        </tr>
                        <tr>
                            <td class="throle">gasket</td>
                            <td colspan="3">
                                <input type="text" id="chk" v-model="material.GASKET" @input="fn_material()">
                            </td>
                        </tr>
                    </table>

                </div>


                <!-- 이미지 + 테이블 -->
                <div class="flexwrap"
                style="
                    padding: 10px 0 30px;
                    border-bottom: 1px dashed #d9d9d9;
                ">  
                    <div class="imgwrap2">
                        <img src="@/assets/testimage/테스트이미지5.png" alt="">
                        <img src="@/assets/testimage/테스트이미지6.png" alt="">
                        <img src="@/assets/testimage/테스트이미지7.png" alt="">
                        <img src="@/assets/testimage/테스트이미지8.png" alt="">
                    </div>

                    <div 
                    style="
                        width: calc(50% - 15px);
                    ">
                    
                        <table style="width: 100%; font-weight: bold; margin-bottom: 10px;" class="bordercolor">
                            <tr>
                                <th colspan="4">VALVE TRIM</th>
                            </tr>
                            <tr>
                                <td class="throle">trim type</td>
                                <td colspan="3">
                                    <input type="text" id="chk" v-model="valueTrim.TRIM_TYPE" @input="fn_valueTrim()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">port size</td>
                                <td colspan="3">
                                    <input type="text" id="chk" v-model="valueTrim.PORT_SIZE" @input="fn_valueTrim()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">flow character</td>
                                <td>
                                    <input type="text" id="chk" v-model="valueTrim.FLOW_CHARACTER" @input="fn_valueTrim()">
                                </td>
                                <td class="throle" style="text-align: center;">rated cv</td>
                                <td>
                                    <input type="text" id="chk" v-model="valueTrim.PLUG_TYPE" @input="fn_valueTrim()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">plug type</td>
                                <td colspan="3">
                                    <input type="text" id="chk" v-model="valueTrim.RATED_CV" @input="fn_valueTrim()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">seat leakage</td>
                                <td colspan="3">
                                    <input type="text" id="chk" v-model="valueTrim.SEAT_LEAKIAGE" @input="fn_valueTrim()">
                                </td>
                            </tr>
                        </table> 

                        <table style="width: 100%; font-weight: bold; margin-bottom: 10px;" class="bordercolor">
                            <tr>
                                <th>구동기 타입</th>
                                <th>
                                    Diaphragm Actuator
                                </th>
                            </tr>
                            <tr>
                                <td class="throle">type</td>
                                <td>
                                    <input type="text" id="chk" v-model="diaphragm_actuator.TYPE" @input="fn_diaphragm_actuator()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">maker</td>
                                <td>
                                    <input type="text" id="chk" v-model="diaphragm_actuator.MAKER" @input="fn_diaphragm_actuator()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">model</td>
                                <td>
                                    <input type="text" id="chk" v-model="diaphragm_actuator.MODEL" @input="fn_diaphragm_actuator()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">fail position</td>
                                <td>
                                    <input type="text" id="chk" v-model="diaphragm_actuator.FAIL_POSITION" @input="fn_diaphragm_actuator()">
                                </td>
                            </tr>
                        </table>

                        <table style="width: 100%; font-weight: bold; margin-bottom: 10px;" class="bordercolor">
                            <tr>
                                <th colspan="2">
                                    Motor
                                </th>
                            </tr>
                            <tr>
                                <td class="throle">type</td>
                                <td>
                                    <input type="text" id="chk" v-model="motor.TYPE" @input="fn_motor()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">maker</td>
                                <td>
                                    <input type="text" id="chk" v-model="motor.MAKER" @input="fn_motor()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">model</td>
                                <td>
                                    <input type="text" id="chk" v-model="motor.MODEL" @input="fn_motor()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">fail position</td>
                                <td>
                                    <input type="text" id="chk" v-model="motor.FAIL_POSITION" @input="fn_motor()">
                                </td>
                            </tr>
                        </table>

                        <table style="width: 100%; font-weight: bold;" class="bordercolor">
                            <tr>
                                <th>구동기 타입</th>
                                <th>
                                    Motor Actuator
                                </th>
                            </tr>
                            <tr>
                                <td class="throle">type</td>
                                <td>
                                    <input type="text" id="chk" v-model="motor_actuator.TYPE" @input="fn_motor_actuator()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">maker</td>
                                <td>
                                    <input type="text" id="chk" v-model="motor_actuator.MAKER" @input="fn_motor_actuator()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">model</td>
                                <td>
                                    <input type="text" id="chk" v-model="motor_actuator.MODEL" @input="fn_motor_actuator()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">fail position</td>
                                <td>
                                    <input type="text" id="chk" v-model="motor_actuator.FAIL_POSITION" @input="fn_motor_actuator()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">rated current</td>
                                <td>
                                    <input type="text" id="chk" v-model="motor_actuator.RATED_CURRENT" @input="fn_motor_actuator()">
                                </td>
                            </tr>
                            <tr>
                                <td class="throle">speed</td>
                                <td>
                                    <input type="text" id="chk" v-model="motor_actuator.SPEED" @input="fn_motor_actuator()">
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>


                
                <!-- 이전/다음 버튼 -->
                <div style="display: flex; justify-content: space-between; padding: 10px 0;">
                    <button class="prebtn" @click="$router.push({path:`/register/${$route.params.state}/1?num=${$route.query.num}`})">이전</button>
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
            bonnet:{},
            material:{},
            valueTrim:{},
            diaphragm_actuator:{},
            motor:{},
            motor_actuator:{},
        }
    },
    methods: {
       async fn_bonnet(){
            this.bonnet.견적번호 = this.$route.query.num
            await this.axios.post(this.$uri + "/bonnet",this.bonnet)
        },
        async fn_material(){
            this.material.견적번호 = this.$route.query.num
            await this.axios.post(this.$uri + "/material",this.material)
        },
        async fn_valueTrim(){
            this.valueTrim.견적번호 = this.$route.query.num
            await this.axios.post(this.$uri + "/valueTrim",this.valueTrim)
        },
        async fn_diaphragm_actuator(){
            this.diaphragm_actuator.견적번호 = this.$route.query.num
            await this.axios.post(this.$uri + "/diaphragm_actuator",this.diaphragm_actuator)
        },
        async fn_motor(){
            this.motor.견적번호 = this.$route.query.num
            await this.axios.post(this.$uri + "/motor",this.motor)
        },
        async fn_motor_actuator(){
            this.motor_actuator.견적번호 = this.$route.query.num
            await this.axios.post(this.$uri + "/motor_actuator",this.motor_actuator)
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
                this.$router.push({path:`/register/${this.$route.params.state}/3`, query: {num:this.$route.query.num}})
             }
        }
    },
   async activated() {
        if(this.$route.params.state == 'edit'){
            const res = await this.axios.get(this.$uri + "/select/second_page_datas?num="+this.$route.query.num)
            this.bonnet = JSON.parse(res.data.BONNET)[0]
            this.diaphragm_actuator = JSON.parse(res.data.DIAPHRAGM_ACTUATOR)[0]
            this.material = JSON.parse(res.data.MATERIAL)[0]
            this.motor = JSON.parse(res.data.MOTOR)[0]
            this.motor_actuator = JSON.parse(res.data.MOTOR_ACTUATOR)[0]
            this.valueTrim = JSON.parse(res.data.VALVE_TRIM)[0]

             const res2 = await this.axios.get(this.$uri + "/select/acc?num="+this.$route.query.num)
            
        }
    },
}
</script>
<style scoped lang="scss">
    @import '@/assets/style/setting.scss';
    @import '@/assets/style/modal.scss';
    @import '@/assets/style/font.css';
</style>