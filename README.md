# Tech Stack

Backend: [Laravel 5.8](https://laravel.com/docs/5.8/readme)

Frontend: [VueJS v2](https://v2.vuejs.org/)


# Getting Started


### Install from repository

Clone the repository:

    git clone https://github.com/monettayy/weather-forecast.git

Navigate to the directory and run:

    composer install

Copy the example .env file:

    cp .env.example .env

Generate an application key:

    php artisan key:generate

Run Mix tasks:

    npm run prod

View the website:

    php artisan serve
    
### Setup API KEY

Go to the .env File and put your API Key from AccuWeather 

    ACCUWEATHER_API_KEY=your-api-key-here

