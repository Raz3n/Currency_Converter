import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      rates: [],
      money: 0,
      exchangeRate: 0,
      changedAmount: 0
    },
    mounted() {
      this.fetchRates();
    },

    computed: {
    change: function() {
      return this.changedAmount =  this.money * this.exchangeRate;
      return this.changedAmount;
    }
  },
    methods: {
      fetchRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(data => data.json())
        .then(rates => this.rates = rates.rates )
      }
    }
  });
});
