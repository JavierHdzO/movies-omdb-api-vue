<template>
  <div class="movie-detail">
    <h2>{{movie.Title}}</h2>
    <p>{{ movie.Year }}</p>
    <img v-if="movie.Poster !== 'N/A'" :src="movie.Poster" :alt="movie.Title + 'poster'" >
    <img  v-else src='../assets/notload.jpg' :alt="movie.Title + 'Poster'" class="feature-img">
    <p>{{ movie.Plot }}</p>
  </div>
</template>

<script>
import { getMoviesByID } from "@/helpers/getMovies";

export default {
  name: "MovieByID",
  data() {
    return {
        movie: {}
    }
  },

  async beforeMount() {
    const response = await getMoviesByID(this.$route.params.id);
    this.movie = response
  }
}
</script>

<style lang="scss">
    .movie-detail{
        padding: 16px;

        h2{
            color: #fff;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .feature-img{
            display: block;
            max-width: 200px;
            margin-bottom: 16px;
        }

        p {
            color: #fff;
            font-size: 16px;
            line-height: 1.4;
        }
    }

    @media  (min-width: 600px) {
        .movie-detail{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            background-color: #496583 ;

            h2{
                font-size: 30px;
            }
            .feature-img{
                max-width: 350px;
            }

            p{
                max-width: 50%;
                font-size: 24px;
            }
        }
        
    }

    @media  (min-width: 400px) {
        .movie-detail{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            background-color: #024059 ;

            h2{
                font-size: 30px;
            }
            .feature-img{
                max-width: 350px;
            }

            p{
                max-width: 75%;
                font-size: 20px;
            }
        }
        
    }

</style>