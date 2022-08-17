<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Helper\API;

class WeatherController extends Controller
{
    /**
     * Returns an array of daily forecasts for the next 3 days for a specific location
     *
     */
    public function getForecast(Request $request)
    {
        $location = $this->getLocationInfo();
        $location_key = $location["Key"];
        // $forecast = API::fetch_data("/forecasts/v1/daily/5day/{$location_key}");
        
        $forecast = '{"Headline":{"EffectiveDate":"2022-08-17T13:00:00+08:00","EffectiveEpochDate":1660712400,"Severity":5,"Text":"Thunderstorms in the area Wednesday afternoon through Wednesday evening","Category":"thunderstorm","EndDate":"2022-08-18T01:00:00+08:00","EndEpochDate":1660755600,"MobileLink":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?lang=en-us","Link":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?lang=en-us"},"DailyForecasts":[{"Date":"2022-08-17T07:00:00+08:00","EpochDate":1660690800,"Temperature":{"Minimum":{"Value":77.0,"Unit":"F","UnitType":18},"Maximum":{"Value":87.0,"Unit":"F","UnitType":18}},"Day":{"Icon":15,"IconPhrase":"Thunderstorms","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Heavy"},"Night":{"Icon":15,"IconPhrase":"Thunderstorms","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Sources":["AccuWeather"],"MobileLink":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?day=1&lang=en-us","Link":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?day=1&lang=en-us"},{"Date":"2022-08-18T07:00:00+08:00","EpochDate":1660777200,"Temperature":{"Minimum":{"Value":77.0,"Unit":"F","UnitType":18},"Maximum":{"Value":85.0,"Unit":"F","UnitType":18}},"Day":{"Icon":15,"IconPhrase":"Thunderstorms","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Heavy"},"Night":{"Icon":15,"IconPhrase":"Thunderstorms","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Sources":["AccuWeather"],"MobileLink":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?day=2&lang=en-us","Link":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?day=2&lang=en-us"},{"Date":"2022-08-19T07:00:00+08:00","EpochDate":1660863600,"Temperature":{"Minimum":{"Value":77.0,"Unit":"F","UnitType":18},"Maximum":{"Value":86.0,"Unit":"F","UnitType":18}},"Day":{"Icon":15,"IconPhrase":"Thunderstorms","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Night":{"Icon":7,"IconPhrase":"Cloudy","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Sources":["AccuWeather"],"MobileLink":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?day=3&lang=en-us","Link":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?day=3&lang=en-us"},{"Date":"2022-08-20T07:00:00+08:00","EpochDate":1660950000,"Temperature":{"Minimum":{"Value":77.0,"Unit":"F","UnitType":18},"Maximum":{"Value":89.0,"Unit":"F","UnitType":18}},"Day":{"Icon":7,"IconPhrase":"Cloudy","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Night":{"Icon":42,"IconPhrase":"Mostly cloudy w/ t-storms","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Sources":["AccuWeather"],"MobileLink":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?day=4&lang=en-us","Link":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?day=4&lang=en-us"},{"Date":"2022-08-21T07:00:00+08:00","EpochDate":1661036400,"Temperature":{"Minimum":{"Value":77.0,"Unit":"F","UnitType":18},"Maximum":{"Value":89.0,"Unit":"F","UnitType":18}},"Day":{"Icon":6,"IconPhrase":"Mostly cloudy","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Night":{"Icon":36,"IconPhrase":"Intermittent clouds","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Sources":["AccuWeather"],"MobileLink":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?day=5&lang=en-us","Link":"http://www.accuweather.com/en/ph/laging-handa/3424137/daily-weather-forecast/3424137?day=5&lang=en-us"}]}';
        $forecast = json_decode($forecast, true);

        return response()->json([
            "status"=>"OK",
            "message"=>"Successfully fetched Weather Forecast",
            "location"=>$location,
            "forecast"=>$forecast
        ]);
    }

    /**
     * Returns location information using IP Address.
     *
     * @param  null
     * @return object
     */
    private function getLocationInfo(){
        $ip_address = $this->getMyPublicIPAddress();
        // $output = API::fetch_data("/locations/v1/cities/ipaddress", "q={$ip_address}");

        $output = '{"Version":1,"Key":"3424137","Type":"City","Rank":75,"LocalizedName":"Laging Handa","EnglishName":"Laging Handa","PrimaryPostalCode":"","Region":{"ID":"ASI","LocalizedName":"Asia","EnglishName":"Asia"},"Country":{"ID":"PH","LocalizedName":"Philippines","EnglishName":"Philippines"},"AdministrativeArea":{"ID":"MNL","LocalizedName":"Metropolitan Manila","EnglishName":"Metropolitan Manila","Level":1,"LocalizedType":"Region","EnglishType":"Region","CountryID":"PH"},"TimeZone":{"Code":"PHT","Name":"Asia/Manila","GmtOffset":8.0,"IsDaylightSaving":false,"NextOffsetChange":null},"GeoPosition":{"Latitude":14.632,"Longitude":121.031,"Elevation":{"Metric":{"Value":25.0,"Unit":"m","UnitType":5},"Imperial":{"Value":82.0,"Unit":"ft","UnitType":0}}},"IsAlias":false,"ParentCity":{"Key":"264873","LocalizedName":"Quezon City","EnglishName":"Quezon City"},"SupplementalAdminAreas":[{"Level":2,"LocalizedName":"Quezon City","EnglishName":"Quezon City"}],"DataSets":["AirQualityCurrentConditions","AirQualityForecasts","Alerts","FutureRadar","MinuteCast"]}';
        $output = json_decode($output, true);

        return $output;
    }
    
    /**
     * Returns the Public IP Address.
     *
     * @param  null
     * @return string
     */
    public function getMyPublicIPAddress() {
        $ip_info = trim(shell_exec("nslookup myip.opendns.com resolver1.opendns.com"));
        $lines = array_filter(preg_split("/$\n?/m", $ip_info));
        $ip = $lines[count($lines)];
        $ip = trim(str_replace("Address:", "", $ip));

        return $ip;
     }
}
