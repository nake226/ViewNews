<template>
  <div class="container">
    <h3 class="title text-center">Vue News</h3>
    <!-- News Categories -->
    <section class="callout secondary">
      <form>
        <div class="row text-center">
          <div class="large-6" style="margin: 20px auto 0;">
            <select v-model="section" @change="getPosts(section)">
              <option v-for="section in sections" :key="section" :value="section">{{ section }}</option>
            </select>
          </div>
        </div>
      </form>
    </section>
    <section>
      <div class="row" v-for="posts in processedPosts" :key="posts">
        <div class="columns large-3 medium-6" v-for="post in posts" :key="post">
          <div class="card">
            <!-- News Title -->
            <div class="card-divider">
              {{ post.title }}
            </div>
            <!-- News Thumbnail -->
            <a :href="post.url" target="_blank"><img :src="post.image_url"></a>
            <!-- News Summary -->
            <div class="card-section">
              {{ post.abstract }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// NYT-API base url
let ApiBaseUrl = 'https://api.nytimes.com/svc/topstories/v2/';
// NYT-API Key
let ApiKey = 'd6c24974592e4c28a27e2c7eecc4c5fe';
// Category
const SECTIONS = "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world";
/**
 * @returns url which axios connects.
 * @param {*} url 
 */
function setUrl(url){
  return ApiBaseUrl + url + '.json?api-key=' + ApiKey;
}

export default {
  name: 'hello',
  data() {
    return {
      // news from NYT
      results: [],
      sections: SECTIONS.split(', '),
      // default section
      section: 'home'
    }
  },
  computed: {
    processedPosts(){
      let posts = this.results;
      // 1. ''
      posts.map(
        post => {
          let imgObj = post.multimedia.find(media => media.format === "superJumbo");
          post.image_url = imgObj ? imgObj.url:"http://placehold.it/300x200?text=N/A";
        }
      );

      // 2. ''
      let i, j, chunkedArray = [], chunk = 4;
      for(let i=0, j=0; i < posts.length; i += chunk, j++){
        // 3. ''
        //if(JSON.stringify(posts[i]['per_facet']).match(/Trump/i)){
          chunkedArray[j] = posts.slice(i,i+chunk);
        //}
      }
      return chunkedArray;
    }
  },
  mounted(){
    this.getPosts(this.section);
  },
  methods: {
    /**
     * get posts by connecting url
     * @param {*} section => url
     */
    getPosts(section){
      let url = setUrl(section);
      axios.get(url)
      .then(
        response => {
          this.results = response.data.results;
        }
      ).catch(
        error => {
          console.log(error);
        }
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
.text-center {
  margin: auto;
}
.container img {
  width: 95%;
}
.card-section {
  width: 95%;
}
.title {
  padding: 6px 0;
  background: #42b983;
  color: #fff;
}
</style>
