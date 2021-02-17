<template>
  <div class="header d-flex align-items-center justify-content-center">
    <div class="header-wrapper">
      Adaptive table by <a href="https://github.com/marry1822"> Maria Drozdova</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background: #343a40;
}
.header-wrapper {
  max-width: 80%;
  color: #fff;
}

.header-wrapper a {
  color: #fff;
}
.header-wrapper a:hover {
  color: darkgray;
  cursor: pointer;
  text-decoration: none;
}
</style>
