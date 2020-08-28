<template>
  <fingerprint-spinner :animation-duration="1500" :size="64" color="#ff1d5e"/>
</template>

<script>
import { FingerprintSpinner } from "epic-spinners";

export default {
  name: "Spinner",
  components: {
    FingerprintSpinner
  }
};
</script>

<style lang="scss" scoped>
</style>