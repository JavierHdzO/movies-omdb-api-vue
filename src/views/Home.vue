<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0409591">
        <img
          class="feature-img"
          src="https://m.media-amazon.com/images/M/MV5BZWJkMTU5MjUtNGFmOC00NDFmLTk3NGYtMDgzMDY1NmI5NmFiXkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_SX300.jpg"
          alt="Sonic Poster"
        />
        <div class="detail">
          <h3>Sonic</h3>
          <p>
            The evil Dr. Robotnik takes over the planet Mobius, and it is up to
            Sonic the Hedgehog to put a stop to his evil plans.
          </p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="searchMovie" action="" class="search-box">
      <input
        v-model="search"
        type="text"
        placeholder="What are you looking for?"
      />
      <input type="submit" value="search" />
    </form>

    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link
          :to="{ name: 'movie-id', params: { id: movie.imdbID } }"
          class="movie-link"
        >
          <div class="product-image">

            <img  v-if="movie.Poster !== 'N/A'"   :src="movie.Poster"  :alt="movie.Title" />
            <img  v-else src='../assets/notload.jpg' :alt="movie.Title + 'Poster'">
            <p>{{  typeof movie.Poster }}</p>
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="detail">
            <p class="y">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getMoviesByName } from "@/helpers/getMovies";

export default {
  data() {
    return {
      search: "",
      movies: [],
    };
  },
  methods: {
    async searchMovie(e) {
      if (this.search != "") {
        const { Search } = await getMoviesByName(this.search.toLowerCase());
        this.movies = Search;
        this.search = "";
      }
    },
  },
};
</script>

<style lang="scss">
.home {
  .feature-card {
    position: relative;

    .feature-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }

    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 6px;

      h3 {
        color: #fff;
        margin-bottom: 16px;
      }

      p {
        color: #fff;
      }
    }
  }
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: rgba(255, 255, 255, 0.726);
        background-color: #024059;
        font-size: 29px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;
      }

      &::placeholder {
        color: #f3f3f3;
      }

      &:focus {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #03A64A;
        padding: 16px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
      }

      &:active {
        background-color: #3b8070;
      }
    }
  }


    .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;

    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;

      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;
        

        .product-image {
          position: relative;
          display: block;

          img {
            display: block;
            width: 100%;
            height: 500px;
            max-height: 500px;
            object-fit: cover;
          }

          .type {
            position: absolute;
            padding: 8px 6px;
            background-color: #42b883;
            color: #fff;
            bottom: 24px;
            left: 0px;
            text-transform: capitalize;
          }

          
        }

        .detail{
            background: #024059 ;
            padding: 16px 8px;
            flex: 1 1 100%;
            border-radius: 0px 0px 8px 8px;

            .y {
                color: #AAA;
                font-size: 14px;
            }

            h3{
                color: #fff;
                font-weight: 600;
                font-size: 17px;
            }
        }
      }
    }
  }
}
</style>