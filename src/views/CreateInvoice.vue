<template>
    <v-form 
    ref="form"
    v-model="valid"
    lazy-validation
    >
    <v-select 
    v-model="select"
    :items="clients"
    :rules="[v => !!v || 'Client is required']"
    label="Client"
    ></v-select>
    <v-autocomplete
    v-model="products"
    :disabled="isUpdating"
    :items="products"
    dense
    chips
    label="Product"
    item-text="name"
    item-value="name"
    >
    </v-autocomplete>
    <div>
        <div :v-for="product in currentProducts" :key="product">
            <p>product: {{}}</p>
        </div>
    </div>

    </v-form>
</template>

<script>
import {getAllClients} from "@/services/clientsServices";
import ProductInput from "@/components/ProductInput.vue";

export default {
    name: "createInvoice",
    data() {
        return {
            valid: true,
            clients:[],
            select:null,
            products:[],
            currentProducts:[],
        }
    },
    async created (){
        const response = await getAllClients();
        this.clients = response.map(client => client.name);
    },
    methods: {
        isUpdating() {
    
        },

    },
    components: {
        ProductInput,
    }
}
</script>