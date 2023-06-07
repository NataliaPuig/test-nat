<script>
export default {
  data() {
    return { data: null, nameName: "", description: "" };
  },
  async beforeMount() {
    this.data = await fetch("https://bibliotech.bymotto.com/api/searcher")
      .then((res) => res.json())
      .then((data) => data.data);
  },
  methods: {
    async applyFilters() {
      this.data = await fetch(
        `https://bibliotech.bymotto.com/api/searcher?name=${nameName.value}&description=${description.value}`,
        {
          method: "POST",
          body: JSON.stringify({ name: nameName, description: description }),
        }
      )
        .then((res) => res.json())
        .then((data) => data.data);
    },
  },
};
</script>

<template>
  <div>
    <Head>
      <Title>We bcn | Filter</Title>
      <Meta
        name="Description"
        content="We bcn is a company especialized in technology..."
      ></Meta>
    </Head>

    <nav>
      <ul>
        <li><RouterLink :to="'/'">Home</RouterLink></li>
      </ul>
    </nav>
    <h2>Busqueda:</h2>
    <br />
    <form @submit.prevent>
      <input v-model="nameName" type="text" name="name" placeholder="nombre" />
      <input
        v-model="description"
        type="text"
        name="description"
        placeholder="descripción"
      />
      <button @click="applyFilters()">Aplicar filtros</button>
    </form>
    <br /><br />
    <div>
      <div class="product" v-for="(product, i) in data" :key="i">
        <RouterLink :to="`/details/${product.id}`">
          <div>
            {{ product.name }}
          </div>
        </RouterLink>
        <div v-html="product.description"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 30%;
}
</style>
