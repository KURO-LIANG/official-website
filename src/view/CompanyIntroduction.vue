<template>
    <div id="CompanyIntroduction">
        <div class="banner container-fuild text-center">关于我们</div>
        <div class="container">
            <div class="row CompanyIntroduction-container">
                <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
                    <img class="img-responsive center-block" src="@/assets/img/about_img.png">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h3>中山市伊来喜科技有限公司</h3>
                    <p class=".text-justify">中山市伊来喜科技有限公司，重信用、守合同、保证产品质量，以互利共赢，共同发展为原则，赢得了广大客户的信任。生意诚为本，经商先做人是我们追求的宗旨。 不断的发展和完善企业，坚持“稳步发展、竟中求存、务实图谋、执著大成”之企业发展策略。在一连串硕果背后是辛勤的汗水与成功的喜悦。“以质量求生存，以效益求发展”是本公司的宗旨，公司将以不断开拓求实创新的作风，全心全意为客户服务的精神，迎接市场的挑战。深入开展生活环境科技的研究、开发和应用，以“为人类提供健康生活环境”为企业核心价值观，不断吸收国内外先进技术，积极创新，已经成为饮水机、净水机及净饮水工程的领先生产制造供应商。</p>
                    <p class=".text-justify">中山市伊来喜科技有限公司一直秉承“诚信创新发展、同心合作共赢”的经营理念，严格执行市场价格保护体系，实施统一市场营销政策，实现厂商共赢的局面。展望未来，贝尔斯顿将转变发展模式，推动战略转型，加强自主创新力度，积极推进结构调整，提升全球竞争能力。站在新高度，实现新发展，伊来喜立足中国，服务全球。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'CompanyIntroduction',
    data(){
        return{

        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    }
}
</script>
<style scoped>
.banner{
    color: #fff;
    font-size: 30px;
    height: 150px;
    line-height: 150px;
    background-image: url('../assets/img/banner_1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
}
.row{
    margin-right: 0;
    margin-left: 0;
}
.CompanyIntroduction-container{
    padding: 100px 0;
    color: #808080;
    transition: all ease 0.5s;
}
.CompanyIntroduction-container>div>p{
    font-size: 14px;
    line-height: 2.5rem;
}
@media screen and (max-width: 997px){
    .CompanyIntroduction-container{
    padding: 10px 0;
    color: #808080;
}
}
</style>

