<template>
  <ul>
    <li>
      <span>{{address}}</span>
    </li>
    <li>
      <span>{{indate}}</span>
      <span>共{{day}}晚</span>
    </li>
    <li>
      <input type="text" readonly v-bind:value="keywords" placeholder="关键词/酒店/地址">
    </li>
    <li>
      <input type="text" readonly v-bind:value="priceStar" placeholder="价格/星级">
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      address: "北京市",
      indate: "2018-04-24",
      outdate: "2018-04-24",
      day: "3",
      keywords: "123",
      priceStar: ""
    };
  }
};
</script>
