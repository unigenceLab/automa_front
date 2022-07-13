<template>
    <div style="width: 100%; height: 100%; overflow: hidden;">
        <!-- 삳단 메뉴 -->
        <div class="topmenu">
            <div class="headingwrap">
                <h3>AUTOMA</h3>
            </div>
            <div style="margin-left:auto;margin-right:20px">
                <span style="cursor:pointer">로그아웃</span> 
            </div>
        </div>

        <!-- 좌우 정렬용 div -->
        <div style="display: flex;">
            <!-- 좌측 메뉴 -->
            <div class="leftmenu">

                <ul class="list-unstyled p-4">
                    <li class="mb-4">
                        <button class="btn-toggle" 
                        @click="toggleBtn($event)"
                        >
                        <span class="btnarrow turn"></span>
                        견적
                        </button>

                        <div class="collapse show">
                            <ul class="btn-toggle-nav flex-column list-unstyled">
                                <li><router-link to="/EScheck">
                                    견적조회
                                </router-link></li>
                                <li><router-link to="/register">
                                    견적등록
                                </router-link></li>
                            </ul>
                        </div>

                    </li>

                </ul>
            </div>


            <!-- 본문 -->
            <div class="content">
                <router-view></router-view>
            </div>


        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            projname:""
        }
    },
    methods:{

        toggleBtn(event){
            var togglebtn = event.currentTarget
            var collapse = togglebtn.nextElementSibling
            var btnarrow = togglebtn.children[0]

            if(collapse.classList.contains('show')){
                collapse.classList.remove('show')
                btnarrow.classList.remove('turn')
            } else{
                collapse.classList.add('show')
                btnarrow.classList.add('turn')
            }
        },
    },
   
}
</script>
<style scoped lang="scss">
    @import '@/assets/style/layout.scss';

        .btn-toggle {
            display: block;
            align-items: center;
            padding: .25rem .5rem;
            font-weight: 600;
            font-size: 17px;
            color: #222;
            background-color: transparent;
            border: 0;
        }


        .btn-toggle .btnarrow {
            width: 15px;
            margin-right: 5px;
            line-height: 0;
            content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
            transition: transform .35s ease;
            transform-origin: .5em 50%;
        }
        .btnarrow.turn {
            transform: rotate(90deg);
        }

        .btn-toggle-nav a {
            display: block;
            padding: .1875rem .5rem;
            margin-top: .125rem;
            margin-left: 30px;
            text-decoration: none;
            font-size: 15px;
        }

        .collapse {
            display: none;
        }
        .collapse.show {
            display: block;
        }
</style>