
<template>
  <div class="player">
    <v-app>
      <v-toolbar
      color="#42b883"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <span>IPL <span class="font-weight-light">Insights</span></span>
        </v-toolbar-title>
        <v-autocomplete
                  v-model="model"
                  :items="items"
                  :loading="isLoading"
                  :search-input.sync="search"
                  color="black"
                  menu-props="light, nudge-bottom, offset-overflow=true"
                  hide-no-data
                  item-text="Description"
                  item-value="API"
                  label="Enter Player Name"
                  appened-icon="search"
                  name="search"
                  class="hidden-xs-only"
                  @change="validate"
                  solo-inverted
                  flat
                  return-object
                ></v-autocomplete>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-content>
        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>
            <v-flex xs12>
                <h6 class="px-0 headline text-sm-left font-weight-bold">
                  {{$route.params.playerName}}
                </h6>
            </v-flex>
            <v-layout row wrap>
              <v-flex xs12 md4>
                <PlayerInfo v-bind:playerdata="playerdata"></PlayerInfo>
              </v-flex>
              <v-flex xs12 md4>         
                <MVPI v-bind:MVPIData="BattingMVPIData"></MVPI>
              </v-flex>
              <v-flex xs12 md4>   
                <MVPI v-bind:MVPIData="BowlingMVPIData"></MVPI>      
              </v-flex>
            </v-layout>
            
          </v-layout>
          <v-layout row wrap class="my-2">
            <v-layout row wrap>
              <v-flex xs12 md4>
                <Vitals v-bind:playerdata="playerdata"></Vitals>
              </v-flex>
              <v-flex xs12 md4>         
                <RelativePerformance v-bind:Performance="BattingPerformance"></RelativePerformance>
              </v-flex>
              <v-flex xs12 md4>
                <RelativePerformance v-bind:Performance="TeamRunsConceeded"></RelativePerformance> 
              </v-flex>
            </v-layout>
          </v-layout>
          <v-layout row wrap class="my-2">
            <v-layout row wrap>
                <v-flex xs12 md6>
                  <PlayerForm v-bind:MatchData="BatsmenMatchData"></PlayerForm>
                </v-flex>
                <v-flex xs12 md6>
                  <PlayerForm v-bind:MatchData="BowlingMatchData"></PlayerForm>
                </v-flex>
            </v-layout>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>

  import firebase from 'firebase';
  import router from '../router.js';
  import PlayerInfo from '@/components/PlayerInfo.vue';
  import Vitals from '@/components/Vitals.vue';
  import MVPI from '@/components/MVPI.vue';
  import PlayerForm from '@/components/PlayerForm.vue';
  import RelativePerformance from '@/components/RelativePerformance.vue';

  export default{
    name:"player",
    components: {
      PlayerInfo,
      MVPI,
      PlayerForm,
      RelativePerformance,
      Vitals
    },
    data: () => ({
      search: null,
      playerdata: null,
      valid: false,
      entries:[],
      count:null, 
      cats:[],
      BattingMVPIData:[],
      BowlingMVPIData:[],
      BatsmenMatchData:[],
      BowlingMatchData:[],
      BattingPerformance:[],
      TeamRunsConceeded:[],
      queryRules: [
        v => !!v || 'This field cannot be blank'
      ]
    }),
    methods: {
      validate(event) {
        this.$router.push('/player/'+event.name)  
      },
      processdata(){
        self=this;
        self.BattingMVPIData=[];
            var row=[];
            row.push('Factor');
            row.push('Percentage');
            self.BattingMVPIData.push(row);
            row=[];
            row.push('Consistency');
            row.push((self.playerdata).Consistency);
            self.BattingMVPIData.push(row);
            row=[];
            row.push('HardHittingAbility');
            row.push((self.playerdata).HardHittingAbility);
            self.BattingMVPIData.push(row);
            row=[];
            row.push('Finisher');
            row.push((self.playerdata).Finisher);
            self.BattingMVPIData.push(row);
            row=[];
            row.push('FastScoringAbility');
            row.push((self.playerdata).FastScoringAbility);
            self.BattingMVPIData.push(row);
            row=[];
            row.push('RunningBetweenWickets');
            row.push((self.playerdata).RunningBetweenWickets);
            self.BattingMVPIData.push(row);
            self.BowlingMVPIData=[];
            row=[];
            row.push('Factor');
            row.push('Percentage');
            self.BowlingMVPIData.push(row);
            row=[];
            row.push('Economy');
            row.push((self.playerdata).Economy);
            self.BowlingMVPIData.push(row);
            row=[];
            row.push('WicketTakingAbility');
            row.push((self.playerdata).WicketTakingAbility);
            self.BowlingMVPIData.push(row);
            row=[];
            row.push('Consistency');
            row.push((self.playerdata).BowlingConsistency);
            self.BowlingMVPIData.push(row);
            row=[];
            row.push('CrucialWicketTakingAbility');
            row.push((self.playerdata).CrucialWicketTakingAbility);
            self.BowlingMVPIData.push(row);
            row=[];
            self.BatsmenMatchData=[];
            row.push("Match_Date");
            row.push("Score");
            self.BatsmenMatchData.push(row);
            
            if((self.playerdata).MatchData!=undefined){
              for(var i=0;i<((self.playerdata).MatchData).length;i++){
                row=[];
                var initial = ((self.playerdata).MatchData)[i][0];
                row.push(initial);
                row.push(((self.playerdata).MatchData)[i][1]);
                self.BatsmenMatchData.push(row);
              }
            }
            
            
            self.BowlingMatchData=[];
            row=[];
            row.push("Match_Date");
            row.push("Bowling_Average");
            self.BowlingMatchData.push(row);
            if((self.playerdata).BowlingMatchData!=undefined){
              for(var i=0;i<((self.playerdata).BowlingMatchData).length;i++){
                row=[];
                var initial = ((self.playerdata).BowlingMatchData)[i][0];
                row.push(initial);
                row.push(((self.playerdata).BowlingMatchData)[i][1]);
                self.BowlingMatchData.push(row);
              }
            }
            self.BattingPerformance=[];
            row=[];
            row.push("Bowler_Type");
            row.push("Strike_Rate");
            self.BattingPerformance.push(row);
            
            if((self.playerdata).BatsmenPerformance!=undefined){
              for(var i=0;i<((self.playerdata).BatsmenPerformance).length;i++){
                row=[];
                var initial = ((self.playerdata).BatsmenPerformance)[i][0];
                row.push(initial);
                row.push(((self.playerdata).BatsmenPerformance)[i][1]);
                self.BattingPerformance.push(row);
              }
            }
            self.TeamRunsConceeded=[];
            row=[];
            row.push("Team");
            row.push("Runs");
            self.TeamRunsConceeded.push(row);
            if((self.playerdata).RunsConceeded!=undefined){
              for(var i=0;i<((self.playerdata).RunsConceeded).length;i++){
                row=[];
                var initial = ((self.playerdata).RunsConceeded)[i][0];
                row.push(initial);
                row.push(((self.playerdata).RunsConceeded)[i][1]);
                self.TeamRunsConceeded.push(row);
              }
            }
      }
      
    },
    created(){
      var self = this;
      if (localStorage.getItem(self.$route.params.playerName) === null) {
        var dbRef = firebase.database().ref();
          dbRef.child(self.$route.params.playerName).once("value", function(snapshot) {
            self.playerdata=snapshot.val();
            localStorage.setItem(self.$route.params.playerName,JSON.stringify(self.playerdata));
            self.processdata();
          });
      }
      else{
        debugger;
        self.playerdata=JSON.parse(localStorage.getItem(self.$route.params.playerName));
        self.processdata();
      }
    },
    beforeUpdate(){
      var self = this;
      if (localStorage.getItem(self.$route.params.playerName) === null) {
        var dbRef = firebase.database().ref();
          dbRef.child(self.$route.params.playerName).once("value", function(snapshot) {
            self.playerdata=snapshot.val();
            localStorage.setItem(self.$route.params.playerName,JSON.stringify(self.playerdata));
            self.processdata();
          });
      }
      else{
        debugger;
        self.playerdata=JSON.parse(localStorage.getItem(self.$route.params.playerName));
        self.processdata();
      }
      

    },
    computed: {
      fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a'
          }
        })
      },
      items () {
        return this.entries.map(entry => {
          const Description = entry.name.length > this.descriptionLimit
            ? entry.name.slice(0, this.descriptionLimit) + '...'
            : entry.name
          return Object.assign({}, entry, { Description })
        })
      }
    },

    watch: {
      search (val) {
        this.isLoading=false
        // Items have already been loaded
        if (this.items.length > 0) return

        // Items have already been requested
        if (this.isLoading) return
        
        this.isLoading=true
        var self = this;
        
        if (localStorage.getItem("PlayerList") === null) {
          var playersRef=firebase.database().ref().child("PlayerList")
          playersRef.once("value", function(snapshot) {
          self.entries=snapshot.val();
          localStorage.setItem("PlayerList",JSON.stringify(self.entries));
          self.count = (self.entries).length
          self.isLoading=false;
          })
        }
        else{
          self.entries=JSON.parse(localStorage.getItem("PlayerList",JSON.stringify(self.entries)));
          self.count = (self.entries).length
          self.isLoading=false;
        }
      }
    }
      
  }
</script>
