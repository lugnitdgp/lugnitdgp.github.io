<template>
  <section class="Team container-fluid">
    <h2 class="text-center font-weight-bold pt-3">
      MEET THE<span class="highlighted"> TEAM</span>
    </h2>
    <p class="text-center font-italic">
      "None of us is as smart as all of us"
    </p>
    <div v-for="EachYear in Allyears" :key="EachYear.name">
      <div v-if="EachYear.members.length" class="container">
        <div class="card bg-light">
          <div class="card-header p-2 pl-3">
            <h6 class="font-weight-bold text-uppercase mb-0">
              {{ EachYear.name }}
            </h6>
          </div>
          <div class="row flex-wrap justify-content-center card-body">
            <div v-for="(member,index) in EachYear.members" :key="index">
              <div data-toggle="tooltip" :title="member.first_name">
                <div data-toggle="modal" :data-target="'#user'+member.id" class="Profile-avatar m-2 m-lg-4 " :style="{'background-image':'url('+member.image+')'}" />
              </div>
              <div :id="'user'+member.id" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                  <div class="modal-body">
                    <div class="Profile p-0 m-0">
                      <div class="row m-0 p-0 mb-4">
                        <div class="col-12 Profile-back" :style="{'background-image':'url('+member.image+')'}">
                          <div class="Profile-avatar mt-5 mb-0" :style="{'background-image':'url('+member.image+')'}" style="transform:scale(1.3)" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 text-center m-0">
                          <h5 class="member-name font-weight-bold mb-0 pb-0">
                            {{ member.first_name + ' '+member.last_name }}
                          </h5>
                          <span v-if="member.position||member.alias">({{ member.position||member.alias }})</span>
                          <blockquote v-if="member.bio">
                            <p class="font-italic" v-html="member.bio" />
                          </blockquote>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 text-center">
                          <div class="Profile-links fabs">
                            <a v-if="member.facebook_link != null" target="_blank" :href="member.facebook_link"><i class="fab fa-lg fa-facebook-f" /></a>

                            <a v-if="member.git_link != null" target="_blank" :href="member.git_link"><i class="fab fa-lg fa-github" /></a>

                            <a v-if="member.email != null" target="_blank" :href="'mailto:'+member.email"><i class="fa fa-lg fa-envelope" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import common from '@/services/common.js'
export default {
  data () {
    return {
      Allyears: [{name: 'Final year', members: []},
        {name: 'MCA', members: []},
        {name: 'Mtech', members: []},
        {name: 'Third Year', members: []},
        {name: 'Second Year', members: []},
        {name: 'First Year', members: []}
      ]
    }
  },
  created () {
    common.getMembers()
      .then(response => {
        const profiles = response.data
        console.log(profiles)
        profiles.forEach((member) => {
          if (member.image === null) { member.image = 'static/images/Linux-Avatar.png' }
          this.categorise(member)
        })
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
      })
      .catch(e => {
        console.log(e)
      })
  },
  methods: {
    categorise (member) {
      if (member.degree_name === 'BTECH') {
        if (member.year_name === 3) { this.Allyears[3].members.push(member) } else if (member.year_name === 2) { this.Allyears[4].members.push(member) } else if (member.year_name === 1) { this.Allyears[5].members.push(member) } else if (member.year_name === 4) { this.Allyears[0].members.push(member) }
      } else if (member.degree_name === 'MTECH') { this.Allyears[2].members.push(member) } else if (member.degree_name === 'MCA') { this.Allyears[1].members.push(member) }
    }
  }
}
</script>

<style scoped>
.Team{
  background-size: cover;
  min-height: 100vh;
  padding-top: 5rem;
  border-bottom: 1px dashed #fa631c;
}
.member-name{
  color:rgb(5, 20, 41);
}
.highlighted{
  color:#fa631c;
}
.card-header {
  color: #9c9c9c;
  background-color: rgb(5,20,41);
  letter-spacing: 0.4rem;
}
.Profile{
  display: block;
  position: relative;
  margin: 50px auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.2s ease-in-out;
  background: white;
}
.Profile-avatar:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.Profile-back{
  background-size: cover;
  background-position: center;
}
.Profile-back::before{
  background-color: rgba(5, 20, 41, 0.8);
  content: "";
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
.Profile-avatar{
  z-index: 1;
  margin: auto;
  height: 7rem ;
  width: 7rem ;
  background-size: cover;
  transition: 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 50%;
  /* background-color:lightgrey; */
}
.fabs {
  position: relative;
  overflow: hidden;
  transition: 1s ease-in-out;
  margin-top: 0px;
  background: white;
}
.fabs i {
  color : #fa631c;
  margin: 1rem;
}

blockquote {
  background: #f8f9fa;
  border-left: 10px solid rgb(5,20,41);
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
.modal-dialog a {
  pointer-events: auto;
}
</style>
