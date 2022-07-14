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
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">body size</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">pr. rating</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">end connection</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">bonnet type</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">flow direction</td>
                            <td colspan="3"></td>
                        </tr>
                    </table>
                    
                    <table style="width: calc(50% - 15px); font-weight: bold;" class="bordercolor">
                        <tr>
                            <th colspan="2">MATERIAL</th>
                        </tr>
                        <tr>
                            <td class="throle">body/bonnet</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">stem</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">plug / disc / ball</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">seat ring</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">cage / retainer</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">balance seal</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">packing</td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td class="throle">gasket</td>
                            <td colspan="3"></td>
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
                                <td colspan="3"></td>
                            </tr>
                            <tr>
                                <td class="throle">port size</td>
                                <td colspan="3"></td>
                            </tr>
                            <tr>
                                <td class="throle">flow character</td>
                                <td></td>
                                <td class="throle" style="text-align: center;">rated cv</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">plug type</td>
                                <td colspan="3"></td>
                            </tr>
                            <tr>
                                <td class="throle">seat leakage</td>
                                <td colspan="3"></td>
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
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">maker</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">model</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">fail position</td>
                                <td></td>
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
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">maker</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">model</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">fail position</td>
                                <td></td>
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
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">maker</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">model</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">fail position</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">rated current</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="throle">speed</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>


                
                <!-- 이전/다음 버튼 -->
                <div style="display: flex; justify-content: space-between; padding: 10px 0;">
                    <button class="prebtn">이전</button>
                    <button class="prebtn">다음</button>
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