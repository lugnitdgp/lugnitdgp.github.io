<template lang="html">
  <div class="container-fluid navbar-sec">
    <nav class="navbar fixed-top navbar-inverse navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <span class="part1"><span class="highlighted">GNU</span>LINUX<br></span>
        <span class="part2">USERS' GROUP</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbar-links" class="collapse navbar-collapse">
        <ul class="navbar-nav  ml-md-auto d-md-flex">
          <router-link tag="li" class="nav-item" data-toggle="collapse" data-target="#navbar-links" to="/">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" data-toggle="collapse" data-target="#navbar-links" to="/events">
            <a class="nav-link">Events</a>
          </router-link>
          <router-link tag="li" class="nav-item" data-toggle="collapse" data-target="#navbar-links" to="/timeline">
            <a class="nav-link">Timeline</a>
          </router-link>
          <router-link tag="li" class="nav-item" data-toggle="collapse" data-target="#navbar-links" to="/team">
            <a class="nav-link">Members</a>
          </router-link>
          <router-link tag="li" class="nav-item" data-toggle="collapse" data-target="#navbar-links" to="/blog">
            <a class="nav-link">Blog</a>
          </router-link>
          <router-link tag="li" class="nav-item" data-toggle="collapse" data-target="#navbar-links" to="/linit">
            <a class="nav-link">Linit</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>

.navbar-sec {
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;

  .navbar-brand {
    line-height: 1rem;
    padding: 10px 0px 10px 20px;

    .part1 {
      font-weight: 900;
      font-size: 2rem;
    }
    .part2 {
      font-size:0.8rem;
      font-weight: 700;
      color: #9c9c9c;
      letter-spacing: 0.4rem;
    }

    .highlighted {
      color: #fa631c
    }
  }

  #navbar-links .nav-link {
    color: #333;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      color: #fa631c
    }
  }
}

</style>
