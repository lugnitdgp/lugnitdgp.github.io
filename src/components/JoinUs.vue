<template>
  <div class="container joinus">
    <div class="mb-5 mt-5">
      <div>
        <h1 class="text-center heading font-weight-bold pb-3">
          <span class="highlighted">JOIN</span> US
        </h1>
      </div>
      <p class="pt-4 text">
        We advocate our love for open source loud and clear. Be it web development, app 
        development, graphic design or competitive programming - our interests and skills are highly 
        diverse. Some of the ways in which we try to share our knowledge and enthusiasm for the 
        same :
      </p>
      <p class="text">
        <strong>
          - Organizing regular workshops to present people with the resources to get started with 
          contributing.
        </strong>
      </p>
      <p class="text">
        <strong>
          - Spreading awareness through LINIT, our annual open source magazine.
        </strong>        
      </p>
      <p class="text">
        <strong>
          - Sharing our passion through games and quizzes like Digital Fortress, Freemex, Screencast 
          and many more.
        </strong>
      </p>
      <p class="text">
        <strong>
          - Striving towards a better coding culture in our college through our flagship event Junior Code 
          Cracker, where we use our very own open source Online Judge.
        </strong>
      </p>
      <p class="text">
        <strong>
          - Encouraging cyber security enthusiasts to find bugs and solve puzzles, as they hack their 
          way to the ultimate flag in our yearly Capture The Flag ( CTF ) event, where we see 
          international participation as well.
        </strong>
      </p>
      <p class="text">
        <strong>
          - Organizing Aarohan, the second largest technical fest in Eastern India, as a part of Team 
          Aavishkar. The fest is replete with software and hardware hackathons (HackOverFlow),
          workshops and events which blend wit with fun and creativity.
        </strong>
      </p> 
      <p class="text">
        <strong>
          - Succesfully revamping and maintaining our official institute website.
        </strong>  
      </p>
    </div>
    <div class="mb-5 pt-5">
      <div>
        <h1 class="text-center heading font-weight-bold pb-3">
          <span class="highlighted">WHY</span> GLUG?
        </h1>
      </div>
      <p class="pt-4 text">
        We are the official Open Source Organization of NIT Durgapur. A group of Free and Open
        Source Software enthusiasts, we are highly driven towards promoting the open-source culture in
        our college. Designing, developing, and contributing towards this ever-growing community, we
        wish our passion for open source to reach maximum people possible.
      </p>
      <p class="text">
        No matter where your interests lie, we believe in learning and growing together. Collaboration is 
        the key to thrive, and we believe in enriching our community by joining hands with the 
        uninitiated. Help broaden our vision of promoting Open Source software. Come join us to 
        explore, to learn, and to contribute towards a world that creates and innovates together.
      </p>
    </div>
    <div class="mb-5 pt-1">
      <p class="text">
        <strong>
          <em>
            Are you dynamic, passionate, and willing to get involved in a club where team-spirit, 
            expertise and active collaboration are key values.
          </em>
        </strong>
      </p>
    </div>
    <div class="wrapper mb-5">
      <button class="register btn btn-lg font-weight-bold" disabled>COMING SOON!</button>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$emit('hideloader', true)
    this.$emit('hideloader', true)
    this.$emit('hideloader', true)
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
  font-size: 6vh !important;
  border-bottom: 5px solid #fa631c;
  word-spacing: 20px;
}

.text {
  font-size: 2.5vh;
  word-spacing: 10px;
}

.wrapper {
  text-align: center;
}

.register {
  background-color: #fa631c !important;
  color: white;
  font-size: 4vh;
  border-radius: 40px;
}

@media only screen and (max-width: 776px) {
  .joinus {
    padding-top: 3rem !important;
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .heading {
    font-size: 4.8vh !important;
    border-bottom: 3px solid #fa631c;
    word-spacing: 17px;
  }

  .text {
    font-size: 2.2vh;
  }
}
</style>
