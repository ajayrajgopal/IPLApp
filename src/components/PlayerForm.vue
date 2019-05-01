<template>
    <v-card height="100%">
        <v-card-title class="subheading font-weight-regular ">{{MatchData[0][1]=='Bowling_Average'?"Bowling ":"Batting "}} Form</v-card-title>
        <v-divider/>
        <v-flex xs12>
        <v-card-text v-if="MatchData.length==1" class="text-xs-center title font-weight-light">No Data Available</v-card-text>
        <GChart v-else
            type="LineChart"
            :data="MatchData"
            :options="chartOptions"/> 
        </v-flex>
    </v-card>
</template>
<script>
import { GChart } from 'vue-google-charts';

export default {
    props: {
        MatchData: Array
    },
    components:{
      GChart
    },
    data: () =>({
      chartOptions: {
        chart: {
          title: 'Form'
        },
        legend: {position: 'none'},
        hAxis: { textPosition: 'none' }
      }
    }),
    created(){
        //alert(JSON.stringify(this.BattingMVPIData));
    }
}
</script>
