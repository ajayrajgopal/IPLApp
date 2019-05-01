<template>
<v-content>
      <v-container fluid fill-height>
        <v-layout row align-center justify-center>
          
          <v-flex xs12 sm8 md4>
              <h1 class="text-xs-center display-3 font-weight-medium">IPL <span class="font-weight-light">Insights</span></h1>
              <v-card-text>
                <v-autocomplete
                  v-model="model"
                  :items="items"
                  :loading="isLoading"
                  :search-input.sync="search"
                  color="black"
                  menu-props="dark, allow-overflow=true"
                  hide-no-data
                  item-text="Description"
                  item-value="API"
                  label="Enter Player Name"
                  prepend-icon="search"
                  name="search"
                  @change="validate"
                  
                  
                  return-object
                ></v-autocomplete>
              </v-card-text>
          </v-flex>
        </v-layout>
      </v-container>
</v-content>
</template>
<script>
  import firebase from 'firebase';
  import { playersRef } from '../main'
  export default {
    data: () => ({
      search: null,
      test:"abc",
      valid: false,
      queryRules: [
        v => !!v || 'This field cannot be blank'
      ],
      descriptionLimit: 30,
      entries: [],
      isLoading: false,
      model: null,
      search: null
    }),
    methods: {
      validate(event) {
          this.$router.push('/player/'+event.name)  
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

<style>

</style>
