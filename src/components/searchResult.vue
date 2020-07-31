<template>
	<div id="searchResult">
		<table>
			<tr><td><img id="searchResultImage" :src="'http://fishbase.us/images/species/' + result.image" @error="changeImage"></td>
				<td><h2>
					<router-link :to="{name: 'details', params: { taxonomy: result.taxonomy.replace(' ', '_') }}" target='_blank'>{{ result.taxonomy }}
					</router-link>
				</h2></td>
				<td><h2>Common Name</h2>
					<p v-if="result.commonName == ''"><i>No common name found.</i></p>
					{{ result.commonName }}
				</td>
			</tr>
		</table>
	</div>
</template>

<style>
#searchResult{
	margin-top: 10px;
}
h2{
	margin-bottom: 0px !important;
}
#searchResultImage{
	max-width: 200px;
	max-height: 200px;
}
table{
	width: 100%;
	background-color: #e0e1e2;
	border-radius: 5px;
}
td{
	width: 33%;
	text-align: left;
	padding-left: 0px;
	vertical-align: top;

	padding-top: 1px;
}
ul{
	margin-top: 0px;
	padding-left: 17px;
}
</style>

<script>



export default{
	name: 'searchResult',
	props: {
		result: {
			required: true
		}
		/*
		image: {
			type: String,
			required: true
		},
		taxonomy: {
			type: String,
			required: true
		},
		commonName: {
			type: Array,
			required: true
		}
		*/
	},
	methods:{
		changeImage(event){
			event.target.src = "https://upload.wikimedia.org/wikipedia/commons/1/1b/Kite%2C_Letter-winged_-_Strzelecki_Track_25-08-07_IMG_1519aa.jpg"
		}
	}
}
</script>