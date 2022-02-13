<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img class="w_100" src="@/assets/img/logo_white.png" alt="logo图">
    </div>
    <p class="title">中山市伊来喜科技有限公司</p>
    <p class="address_tel_fax">
      <span>地址：公司地址公司地址公司地址公司地址</span>
    </p>
    <p class="address_tel_fax">
      <span>全国服务热线：400-168-5956</span>
    </p>
    <p class="address_tel_fax">
      <span>全国招商热线：15976069136</span>
    </p>
    <p class="email_wx">
<!--      <span>邮箱：liyunkun_11@163.com</span>-->
      <span>公司微信号：xxxx</span>
    </p>
    <p class="copy">Copyright &copy; 2018 - 2022 中山市伊来喜科技有限公司</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000000;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  margin: 15px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

