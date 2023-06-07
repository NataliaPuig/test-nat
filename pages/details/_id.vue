<script setup lang="ts">
const route = useRoute();
const itemId = route.params.id;
const productDetails = await fetch(
  `https://bibliotech.bymotto.com/api/hubs/${itemId}`
)
  .then((res) => res.json())
  .then((data) => data.data);
const title = `${productDetails.name}`;

useHead({
  title: title,
  meta: [
    { name: "title", content: title },
    { name: "description", content: productDetails.description },
  ],
});

useServerSeoMeta({
  ogTitle: () => title,
  title: () => title,
  description: () => productDetails.description,
  ogDescription: () => productDetails.description,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => title,
  twitterDescription: () => productDetails.description,
});
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><RouterLink :to="'/'">Home</RouterLink></li>
      </ul>
    </nav>
    <div class="details">
      <h2>
        {{ productDetails.name }}
      </h2>
      <div v-html="productDetails.description"></div>
    </div>
    <br /><br />
    <i class="material-icons">add_shopping_cart</i>
  </div>
</template>
