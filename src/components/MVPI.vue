<template>
    <v-card height="100%">
        <v-card-title class="subheading font-weight-regular ">{{MVPIData[3][0]=='Finisher'?"Batting ":"Bowling "}} MVPI Analysis</v-card-title>
        <v-divider/>
        <v-flex  class="py-2 px-2">
        <v-card-text v-if="MVPIData[3][1]==0&&MVPIData[4][1]==0&&MVPIData[2][1]==0" class="text-xs-center title font-weight-light">No Data Available</v-card-text>

        <GChart
            v-else
            type="ColumnChart"
            :data="MVPIData"
            :options="chartOptions"/> 
        </v-flex>
    </v-card>
</template>
<script>
import { GChart } from 'vue-google-charts';

export default {
    props: {
        MVPIData: Array
    },
    components:{
      GChart
    },
    data: () =>({
      chartOptions: {
        chart: {
          title: 'MVPI'
        },
        legend: {position: 'none'},
        chartArea: {width: '54%'}
      }
    }),
    created(){
        //alert(JSON.stringify(this.BattingMVPIData));
    }
}
</script>
