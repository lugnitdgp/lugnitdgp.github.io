<template>
  <div class="container joinus">
    <div class="mb-2 mt-5">
      <div>
        <h2 class="text-center heading font-weight-bold pb-3">
          <span class="highlighted">JOIN</span> US
        </h2>
      </div>
      <p class="pt-4 text">
        We advocate our love for open source loud and clear. Be it web development, app 
        development, graphic design or competitive programming - our interests and skills are highly 
        diverse. Some of the ways in which we try to share our knowledge and enthusiasm for the 
        same :
      </p>
      <p class="text tab pt-4">
        <strong>
          Be it workshops and tutorials like:
          <ul class="tab2">
            <li>
              Linux Bootcamp
            </li>
            <li>
              Git/GitHub Workshop
            </li>
            <li>
              Hack.Me
            </li>
          </ul>
        </strong>
      </p>
      <p class="text tab">
        <strong>
          Or events to enjoy:
          <ul class="tab2">
            <li>
              Digital Fortress
            </li>
            <li>
              Mindersnatch
            </li>
            <li>
              Freemex
            </li>
          </ul>
        </strong>
      </p>
      <p class="text tab">
        <strong>
          Or helping you to further your coding journey:
          <ul class="tab2">
            <li>
              <a href="https://10-days-of-code.netlify.app/" target="_blank"><span class="imp-links">Ten Days of Code</span></a>
            </li>
            <li>
              GSoC Heat
            </li>
            <li>
              FooBar CTF
            </li>
            <li>
              Junior Code Cracker(JCC)
            </li>
            <li>
              Code Cracker
            </li>
          </ul>
        </strong>
      </p>
      <p class="text tab">
        <strong>
          If you're a textual learner, then you can always follow our:
          <ul class="tab2">
            <li>
              <a href="https://dev.to/nitdgplug" target="_blank"><span class="imp-links">DEV profile</span></a>, wherein we've a very steady and varied carousel of explorable technologies
            </li>
            <li>
              <a href="https://nitdgplug.org/blog" target="_blank"><span class="imp-links">Our Website Blog</span></a>
            </li>
            <li>
              <a href="https://nitdgplug.org/linit" target="_blank"><span class="imp-links">Our annual magazine LINIT</span></a>
            </li>
            <li>
              Weekly Techbytes
            </li>
          </ul>
        </strong>
      </p>
      <p class="text tab">
        <strong>
          We have also been instrumental in organizing a number of tech fests over the years. They are:
          <ul class="tab2">
            <li>
              Aarohan, as a part of Team Aavishkar
            </li>
            <li>
              Aavishkar (2018-2019)
            </li>
            <li>
              Mukti (prior to 2018)
            </li>
          </ul>
        </strong>
      </p>
      <p class="text tab">
        <strong>
          We are also extremely proud of having developed and continuously maintaining the official website of NIT Durgapur.
        </strong>
      </p>
      <p class="text pt-3">
        <em>And all this is a just a small introduction to the endless opportunities we are ready to dive into.
            You can check out all the events that we do <a href="https://nitdgplug.org/events"><span class="imp-links">here.</span></a>
        </em>
      </p>
      <p class="text">
        <em>So do stay tuned as we take you through a journey through the havens of technology where we shall cover 
          and extensively support all things regarding software development in this institution.</em>
      </p>
    </div>
    <div class="mb-2 pt-5">
      <div>
        <h2 class="text-center heading font-weight-bold pb-3">
          <span class="highlighted">WHY</span> GLUG?
        </h2>
      </div>
      <p class="pt-4 text">
        We are the official Open Source Organization of NIT Durgapur. A group of FOSS enthusiasts, we are highly 
        driven towards promoting the idea of <strong>freedom of software </strong>which arms the user with 
        complete control over what he/she uses. Not only in our college but beyond. Designing, developing, 
        and contributing towards this ever-growing community, we're determined to populate this passion 
        by reaching maximum people possible.
      </p>
      <p class=" pt-3 text">
        No matter where your interests lie, we believe in learning and growing together. Collaboration is 
        the key to thrive, and we believe in enriching our community by joining hands with the 
        uninitiated. Help broaden our vision of promoting Open Source software. Come join us to 
        explore, to learn, and to contribute towards a world that creates and innovates together.
      </p>
    </div>
    <div class="pt-3 mb-5">
      <p class="text">
        <strong>
          <em>
            Are you dynamic enough, passionate enough, and willing to get involved in a club where team-spirit, 
            zeal to learn and active collaboration are key values?
          </em>
        </strong>
      </p>
    </div>
    <div class="wrapper mb-5">
      <button v-if="config !== null && config.enable" class="register btn btn-lg font-weight-bold">
        <a :href="config.value" class="register" target="_blank" rel="noopener noreferrer">REGISTER</a>
      </button>
      <button v-else class="register btn btn-lg font-weight-bold" disabled>COMING SOON!</button>
    </div>
  </div>
</template>

<script>
import common from '@/services/common.js'

export default {
  data () {
    return {
      config: null
    }
  },
  created () {
    common.getConfig()
      .then(response => {
        const configs = response.data
        this.config = configs.find(config => config.key === 'audition')
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style scoped>
.joinus {
  padding-top: 6rem;
}

.highlighted {
  color: #fa631c;
}

.heading {
  font-size: 32px !important;
  border-bottom: 4px solid #fa631c;
  word-spacing: 5px;
}

.text {
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-bottom: 3px !important;
}

.wrapper {
  text-align: center;
}

.register {
  background-color: #fa631c !important;
  color: white;
  font-size: 30px;
  border-radius: 40px;
}

.tab {
  margin-left: 40px;
}

.tab2 {
  margin-left: 80px
}

.imp-links {
  color: #fa631c !important
}

a:hover {
  text-decoration: none;
}

@media only screen and (max-width: 776px) {
  .joinus {
    padding-top: 3rem !important;
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
}

@media only screen and (max-width: 576px) {
  .tab {
    margin-left: 20px;
  }

  .tab2 {
    margin-left: 40px
  }
}
</style>
