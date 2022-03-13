<template>
<div>
    <v-autocomplete
    v-model="product"
    solo
    ></v-autocomplete>
    <v-text-field
    v-model="quantity"
    >
    </v-text-field>
</div>
</template>

<script>
export default {
    data() {
        return {
            product: "",
            quantity: "",
        }
    },
}
</script>
