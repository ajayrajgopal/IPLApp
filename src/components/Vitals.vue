<template>
    <v-card>
        <v-card-title class="subheading font-weight-regular ">Player Info</v-card-title>
        <v-divider/>
        
        <v-card-text class="py-2"></v-card-text>
        <v-card-text class="py-2"><span class="font-weight-light">No. of Matches:&nbsp</span><span class="font-weight-regular text-xs-center">{{playerdata.No_of_Matches}}</span></v-card-text>
        <v-card-text class="py-2"><span class="font-weight-light">Total Runs:&nbsp</span><span class="font-weight-regular">{{playerdata["Total Runs"]}}</span></v-card-text>
        <v-card-text class="py-2"><span class="font-weight-light">Strike Rate:&nbsp</span><span class="font-weight-regular">{{Math.round(playerdata["Strike Rate"] * 100) / 100}}</span></v-card-text>
        <v-card-text class="py-2"><span class="font-weight-light">Economy:&nbsp</span><span class="font-weight-regular">{{Math.round(playerdata.Economy * 100) / 100}}</span></v-card-text>
        <v-card-text class="py-2"><span class="font-weight-light">Wickets:&nbsp</span><span class="font-weight-regular">{{playerdata.Wickets}}</span></v-card-text>
        <v-card-text class="py-2"></v-card-text>
    </v-card>
</template>
<script>
export default{
    props: {
        playerdata: Object
    }
}
</script>