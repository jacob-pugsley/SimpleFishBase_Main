<template>
	<div id="mainSearchForm">
		<sui-form>
			<sui-form-field action="">
				<input placeholder="Genus + Species" v-model="taxonomy">
			</sui-form-field>
			<sui-form-field>
				<input placeholder="Common Name" v-model="common">
			</sui-form-field>
			<sui-form-field>
				<input placeholder="pH Min" v-model="phMin" style="width: 48%; float: left">
				<input placeholder="pH Max" v-model="phMax" style="width: 48%; float: right">
				<br><br>
			</sui-form-field>
			<sui-form-field>
				<input placeholder="Temperature Min (ºC)" v-model="tempMin" style="width: 48%; float: left">
				<input placeholder="Temperature Max (ºC)" v-model="tempMax" style="width: 48%; float: right">
			</sui-form-field>
			<sui-button type="button" id="submitbtn" 
			v-on:click="search($event, [taxonomy, common, '', '', tempMin, tempMax, phMin, phMax])">Search</sui-button>
		</sui-form>
		<br>
		<p id="pageCount"><i>Showing page {{currentPage+1}} of {{ pages.length }}.</i></p>
		<div id="pageButtons">
			<sui-button type="button" v-on:click="prevPage">Previous Page</sui-button>
			<sui-button type="button" v-on:click="nextPage">Next Page</sui-button>
		</div>
		<ul id="resultList">
			<li is="searchResult" v-for="result in pages[currentPage]" :key="result.taxonomy" :result="result">
			</li>
		</ul><br>

	</div>
</template>

<style>
#pageButtons{
	visibility: hidden;
}
#pageCount{
	visibility: hidden;
}
</style>

<script>
	/* eslint no-console: 0 */
	import axios from 'axios'
	import searchResult from './searchResult.vue'

	export default {
		name: 'mainSearchForm',	
		data(){
			return{
				taxonomy: '',
				common: '',
				description: '',
				length: '',
				phMin: '',
				phMax: '',
				tempMin: '',
				tempMax: '',
				pages: [],
				results: [],
				currentPage: 0,
			}
		},
		components:{
			searchResult
		},
		methods:{
			search: function(event, params){
				/*eslint-no-console 0*/
				//taxonomy, common name, temp min, temp max, ph min, ph max

				//number of results displayed on each page
				let resultsPerPage = 10
				
				//clear previous results
				this.allResults = []
				this.pages = []

				let pages = this.pages
				let res = this.results
				let pt = []
				
				//allows axios to access another page on localhost
				
				let config = {
					//	headers: {'Access-Control-Allow-Origin': '*'}
				}
							
				//structured url passed to the flask server
				//let url = "http://localhost:5000/params=$"
				let url = "https://raxmitax.pythonanywhere.com/params=$"
				/*
				url = url + taxonomy + "$" + commonName + "$" + tempMin + "$" + tempMax + "$" + phMin + "$" + phMax
				*/

				for( let i = 0; i < params.length; i++ ){
				
					if( params[i] != '' ){
						console.log(params[i])
						url = url + params[i]
						if( i != params.length-1){
							url = url + "$"
						}
					}else{
						url = url + "$"
					}
				}
				//alert(url)
				axios.get(url, config)
				

				//after successful call
				.then( function (response) {
					//push all results onto the results array
					for( let i = 0; i < Object.keys(response.data["results"]).length; i++ ){

						if( !pt.includes(response.data["results"][""+i]["taxonomy"]) ){
							pt.push(response.data["results"][""+i]["taxonomy"])
							res.push(response.data["results"][""+i])
						}

						//push a certain number of results
						//  onto each page
						if( res.length >= resultsPerPage ){
							pages.push(res)
							res = []
						}
					}

					//push any remaining results onto a new page
					if( res.length > 0 ){
						pages.push(res)
						res = []
					}


					//show hidden search buttons/page counter
					document.getElementById("pageButtons").style.setProperty("visibility", "visible")

					document.getElementById("pageCount").style.setProperty("visibility", "visible")
				})
				//after error
				.catch( function (error) {
					document.getElementById("resultCount").innerHTML = "<i>No results. Is your query spelled correctly?</i>"
					alert(error)
				})
			},
			nextPage: function(){
				if( this.currentPage == this.pages.length-1){
					return
				}
				this.currentPage = this.currentPage + 1
			},
			prevPage: function(){
				if( this.currentPage == 0 ){
					return
				}
				this.currentPage = this.currentPage - 1
			}
		}
	}
</script>