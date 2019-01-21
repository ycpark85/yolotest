<template>
    <v-container 
    id="grid"
    fluid
    tag="section"
    class="con pa-0">
    <header1></header1>
    <nuxt/>
    </v-container>
</template>
<script>
import header1 from '../components/admin_header'
export default {
	components:{
		header1
	}
}
</script>
<style>
.com-left{
    border-right: 1px solid;
}
</style>

