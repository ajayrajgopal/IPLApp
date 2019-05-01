<template>
    <v-card height="100%">
        <v-card-title class="subheading font-weight-regular ">{{Performance[0][1]=="Runs"?"Runs Conceeded for Teams":"Batsmen's Performance Against Bowlers"}}</v-card-title>
        <v-divider/>
        <v-flex  class="py-2 px-2" >
        <v-card-text v-if="Performance.length==1" class="text-xs-center title font-weight-light">No Data Available</v-card-text>
        <GChart
            v-else
            type="PieChart"
            :data="Performance"
            :options="chartOptions"/> 
        </v-flex>
    </v-card>
</template>
<script>
import { GChart } from 'vue-google-charts';

export default {
    props: {
        Performance: Array
    },
    components:{
      GChart
    },
    data: () =>({
      chartOptions: {
        pieHole: 0.5,
        chart: {
          title: 'BattingPerformance',
          
        },
        chartArea: {width: '90%'},
        colors:["#0d47a1","#1565c0","#1565c0","#1e88e5","#42a5f5","#64b5f6","#90caf9","#bbdefb"],
        
      }
    }),
    created(){
        //alert(JSON.stringify(this.BattingMVPIData));
    }
}
</script>
