<template>
    <v-card>
        <v-card-title class="subheading font-weight-regular ">Player Info</v-card-title>
        <v-divider/>
        
        <v-card-text class="py-2"></v-card-text>
        <v-card-text class="py-2"><span class="font-weight-light">Name:&nbsp</span><span class="font-weight-regular">{{$route.params.playerName}}</span></v-card-text>
        <v-card-text class="py-2"><span class="font-weight-light">Date of Birth:&nbsp</span><span class="font-weight-regular">{{playerdata.DOB}}</span></v-card-text>
        <v-card-text class="py-2"><span class="font-weight-light">Batting Style:&nbsp</span><span class="font-weight-regular">{{battingstyle()}}</span></v-card-text>
        <v-card-text class="py-2"><span class="font-weight-light">Bowling Style:&nbsp</span><span class="font-weight-regular">{{bowlingstyle()}}</span></v-card-text>
        <v-card-text class="py-2"><span class="font-weight-light">Country:&nbsp</span><span class="font-weight-regular">{{playerdata.Country}}</span></v-card-text>
        <v-card-text class="py-2"></v-card-text>
    </v-card>
</template>
<script>
export default{
    props: {
        playerdata: Object
    },
    methods:{
       battingstyle(){
        return (this.playerdata.Batting_Hand).replace("_"," ");
      },
      bowlingstyle(){
        return (this.playerdata.Bowling_Skill).replace("-"," ");
      }
    }
}
</script>