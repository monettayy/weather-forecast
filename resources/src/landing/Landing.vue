<template>
<div id="landing-page">
    <div class="app-landing bg-white" >
        <Navbar />
    </div>
    <div class="bg-primary mb-4 text-white" >
        <div class="landing-steps">
            <div class="container-fluid" v-if="isLoading">
                <data-loader class="text-white"></data-loader>
            </div>
            <div class="container-fluid" v-else>
                <div class="px-3">
                    <h1 class="hero-title text-white">{{ location.Country.EnglishName }}</h1>
                    <h3 class="text-muted text-white font-weight-normal">
                        {{ forecast.Headline.Text }}
                    </h3>
                </div>
                <div class="row justify-content-center mt-4">
                    <div class="col-lg-4 col-md-6" v-for="(f, i) in forecast.DailyForecasts.slice(0, 3)">
                        <div class="landing-card">
                            <div class="card-icon">
                                <div>
                                    <span><img :src="'https://www.accuweather.com/images/weathericons/'+f.Day.Icon+'.svg'" class="h-5 w-5"></span>
                                    <span class="text-xs uppercase text-white">{{ f.Day.IconPhrase }}</span>
                                </div>
                            </div>
                            <div class="card-label">
                                <h3 class="font-weight-bold text-white">{{ f.Date | parseDate("dddd MMM DD, yyyy") }}</h3>
                                <h1 class="text-white temperature-text">{{ f.Temperature.Maximum.Value }}°F</h1>
                                <h5 class="text-muted text-white font-weight-normal step-card">
                                    <a :href="f.Link">Learn More</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
    props:[],
    components:{
        Navbar,
        Footer
    },
    filters:{
        parseDate(value, format='MM/DD/YYYY'){
            return moment(value).format(format)
        },
    },
    data(){
        return{
            isLoading: false,
            location: '',
            forecast: '',
        }
    },
    created(){
        this.getForecast();
    },
    methods:{
        getForecast(){
            this.isLoading = true;
            axios.get('/api/forecast').then((response)=>{
                this.isLoading = false;
                if(response.data.status == "OK"){
                    this.location = response.data.location;
                    this.forecast = response.data.forecast;
                }
            }).catch(()=>{
                this.isLoading = false;
                this.$alert('','Something went wrong!','error');
            });
        }
    },

}
</script>

<style scoped>
.step-card{
    -webkit-line-clamp: 12;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    white-space: normal;
    color: #fff;
    font-weight: 600;
}

#landing-page .landing-card {
    min-height: 300px;
}

#landing-page .landing-card .card-icon img{
    width: 50px;
}

.temperature-text{
    font-weight: bold;
    font-size: 4rem !important;
    line-height: 1 !important;
}

#landing-page .landing-card{
    border: 2px solid rgba(0, 0, 0, 0.1);
}

.container-fluid{
    min-height: 50vh;
}
</style>