<template>
    <div class="modal">
        <div class="modalall">
            <div style="width: 100%; height: 100%;">
                
                <!-- 액세서리 선택단 -->
                <div 
                style="
                    width: 100%;
                    padding: 10px 0;
                    border-bottom: 1px dashed #d9d9d9;
                ">
                    <table style="width: 100%;">
                        <tr>
                            <td style="width: 200px; text-align: center;">
                                구동기사양
                            </td>
                            <td>
                                <select v-model="selected">
                                    <option value="">--선택하세요--</option>
                                    <option v-for="item in 종류" :key="item" :value="item">
                                        {{item}}
                                    </option>
                                    
                                </select>
                            </td>
                            <td class="throle" style="text-align: center;">
                                <button style="width: 100%;"  @click="addTo()">
                                    추가
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>


                <div
                style="
                    width: 100%;
                    padding: 10px 0;
                    border-bottom: 1px dashed #d9d9d9;
                "
                v-for="(item,s) in selectors" :key="s">  
                    <div class="scrollwrap minwrap">
                        <table class="scrolltb" style="width: 100%;">
                            <tr>
                                <th style="width: 30px;"></th>
                                <th>구분</th>
                                <th>Type</th>
                                <th>Model</th>
                                <th>Mfr.</th>
                                <th>Air Connection</th>
                                <th>Input Signal</th>
                                <th>Feedback</th>
                                <th>Enclosure</th>
                                <th></th>
                            </tr>
                            <tr v-for="(item2,i) in item.depth2" :key="i">
                                <td>{{i+1}}</td>
                                <td class="throle">
                                    {{item2.구분}}
                                </td>
                                <td>
                                    <input type="text" v-model="item2.TYPE" @input="accesory(item2,i)">
                                </td>
                                <td>
                                    <input type="text" v-model="item2.MODEL" @input="accesory(item2,i)">
                                </td>
                                <td>
                                    <input type="text" v-model="item2.MFR" @input="accesory(item2,i)">
                                </td>
                                <td>
                                    <input type="text" v-model="item2.AIR_CONNECTION" @input="accesory(item2,i)">
                                </td>
                                <td>
                                    <input type="text" v-model="item2.INPUT_SIGNAL" @input="accesory(item2,i)">
                                </td>
                                <td>
                                    <input type="text" v-model="item2.FEEDBACK" @input="accesory(item2,i)">
                                </td>
                                <td>
                                    <input type="text" v-model="item2.ENCLOSURE" @input="accesory(item2,i)">
                                </td>
                                <td style="text-align:center">
                                    <button @click="removeRow(i,s)">X</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

             

                <!-- 이전/다음 버튼 -->
                <div style="display: flex; justify-content: space-between; padding: 10px 0;">
                    <button class="prebtn" @click="$router.push({path:`/register/${$route.params.state}/2?num=${$route.query.num}`})">이전</button>
                    <button class="prebtn" @click="$router.push({path:`/register/${$route.params.state}/4?num=${$route.query.num}`})">다음</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            종류:['Positioner','Solenoid Valve','Limit Switch','Filter Regulator','Speed Controller','Manual Handwheel','Quick Valve'],
            selected : "",
            selectors:[],
            acc:{}
        }
    },
    methods: {
        addTo(){
            if(this.selected != ""){
                var item = this.selected
                var index = this.selectors.findIndex(x=>x.depth1 == item)
                if(index == -1){
                    this.selectors.push({depth1:item,depth2:[{구분:item}]})
                }else{
                    this.selectors[index].depth2.push({구분:item})
                }
            }
        },
        removeRow(i,s){
            this.selectors[s].depth2.splice(i,1)
        },
       async accesory(item,i){
            item.견적번호 = this.$route.query.num
            item.순번 = (i+1).toString()
            await this.axios.post(this.$uri + "/accesory",item)
        }
    },
     async activated() {
        if(this.$route.params.state == 'edit'){
            const res = await this.axios.get(this.$uri + "/select/acc?num="+this.$route.query.num)
            var arr = res.data
            arr.filter((e,i)=>{
                if(i>0){
                    if(arr[i-1].depth1 == e.depth1){
                        arr.splice(i,1)
                    }
                }
            })
            this.selectors = arr
           
       
            
        }
    },
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