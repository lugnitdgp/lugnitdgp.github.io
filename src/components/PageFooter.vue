<template>
  <section id="footer">
    <div class="container p-0 pt-4">
      <div class="row ">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul class="list-unstyled list-inline social text-center">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/nitdgplug"><i class="fab fa-facebook-f" /></a>
            </li>
            <li class="list-inline-item">
              <a href="https://gitter.im/lugnitdgp"><i class="fab fa-lg fa-gitter" /></a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.youtube.com/channel/UCYZPnN5vP5B1sINLLkI1aDA"><i class="fab fa-youtube" /></a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/lugnitdgp"><i class="fab fa-github" /></a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.instagram.com/nitdgplug"><i class="fab fa-instagram" /></a>
            </li>
            <li class="list-inline-item">
              <a href="mailto:contact@nitdgplug.org" target="_blank"><i class="fa fa-envelope" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 font-weight-bold text-center">
          <p><span class="highlighted">© </span>2018 GNU/Linux Users' Group</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
}
</script>

<style scoped>
/* Footer */
section {
    border-top: 1px dashed #fa631c;
    padding: 2vh 1vw;
}

#footer a {
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
  padding: 3px 0;
}
#footer ul.social li a i {
  margin-right: 7px;
  font-size:20px;
  -webkit-transition: .5s all ease;
  -moz-transition: .5s all ease;
  transition: .5s all ease;
}
#footer ul.social li:hover a i {
  font-size:25px;
  margin-top:-10px;
}
#footer ul.social li a{
  color: #333;
}
#footer ul.social li a:hover{
  color: #fa631c;
}

</style>
