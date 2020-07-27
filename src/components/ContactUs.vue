<template>
  <div class="container-fluid">
    <h2 class="text-center font-weight-bold pt-5 pb-3">
      G<span class="highlighted">et</span> in T<span class="highlighted">ouc</span>h
    </h2>
    <div class="row p-0 Contact-us">
      <div class="col-md-12 col-lg-5 m-0 pb-4 pt-4">
        <div v-for="(contact,index) in contacts" :key="index" class="row d-flex justify-content-center">
          <div class="col-11 font-weight-bold ">
            <div class="contact-card">
              {{ contact.name }} <br>
              <i class="fas fa-phone" /> {{ contact.phone }} <br>
              <i class="fas fa-envelope" /> {{ contact.mail }} <br>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-7 p-0">
        <div class="Contact-footer--right" style="background-image: url('static/images/map.jpeg')">
          <div class="Contact-footer--right-content">
            <div class="row mt-2">
              <div class="col-1 p-0 mr-2">
                <i class="fas fa-map-marker-alt fa-2x" />
              </div>
              <div class="col-10">
                <p> <strong>GNU/Linux Users' Group<br>  NIT Durgapur</strong></p><p>Durgapur<br>West Bengal 713209</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: [
        {name: 'Liman Rahman (President)', phone: '+91 94755 22304', mail: 'president@nitdgplug.org'},
        {name: 'Akshat Jain (General Secretary)', phone: '+91 80049 37056', mail: 'gs@nitdgplug.org'},
        {name: 'Ayush Shukla (Treasurer)', phone: '+91 80015 07060', mail: 'treasurer@nitdgplug.org'},
        {name: 'Archana Choudhary (Convener)', phone: '+91 70447 91608', mail: 'convenor@nitdgplug.org'}
      ]
    }
  }
}
</script>

<style scoped>

h2 {
  font-size: 32px;
  text-transform: uppercase;
}
.highlighted {
  color: #fa631c;
}
.Contact-us{
  background-color: #f5f5f5;
}
.contact-card {
  background-color: white;
  margin: 5px 10px;
  min-width: 50%;
  padding: 1rem;
  border-left: 0.8vw solid #444;
}
.Contact-footer--right {
  background-size: cover;
  color: white;
  line-height: normal;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
}
.Contact-footer--right-content {
  margin: 0;
  padding: 3vh 1vw 3vh;
  width: 100%;
  float:left;
  box-sizing: border-box;
  padding-bottom: 20vh;
}
.Contact-footer--right .Contact-footer--right-content > div {
  position: relative;
  max-width: 70%;
  padding: 36px 36px 36px 36px;
  margin: auto;
  background: #444;
  box-sizing: border-box;
}
.Contact-footer--right .Contact-footer--right-content > div::after {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -12px;
  content: " ";
  pointer-events: none;
  border: solid transparent;
  border-width: 12px;
  border-color: rgba(218,77,60,0);
  border-top-color: #444;
}

</style>
