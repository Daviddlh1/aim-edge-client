<template>
    <v-container class="container
    ">
    <v-form
    class="form"
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
    <div class="product-container" v-for="(product, index) in currentProducts" :key="index">
        <v-autocomplete
        v-model="product.productName"
        :items="products"
        :rules="[v => !!v || 'Client is required']"
        dense
        chips
        label="Product"
        item-text="name"
        item-value="name"
        >
        </v-autocomplete>
        <v-text-field
        label="Quantity"
        v-model="product.productQty"
        :rules="[
        v => !!v || 'Name is required',
        v => /^\d+$/.test(v) || 'this field must be a number',
        ]"
        ></v-text-field>
        <v-text-field
        label="Price"
        v-model="product.productPrice"
        :rules="[
        v => !!v || 'Name is required',
        v => /^\d+$/.test(v) || 'this field must be a number',
        ]"
        ></v-text-field>
        <v-btn class="delete-btn" @click="removeProduct(product.id)">Delete product</v-btn>
    </div>
    <v-btn class="add-btn" @click="addProduct">Add a new product</v-btn>
    <v-text-field
    label="Discount"
    v-model="discount"
    :rules="[
    v => !!v || 'Name is required',
    v => /^\d+$/.test(v) || 'this field must be a number',
    ]"
    ></v-text-field>
    <router-link class="link" to="/">
        <v-btn class="indigo darken-1 white--text"   @click="saveInvoice">Create Invoice</v-btn>
    </router-link>
    </v-form>
    </v-container>
</template>

<script>
import { getAllClients } from "@/services/clientsServices";
import { getAllProducts } from "@/services/productServices";
import { createInvoice } from "@/services/invoicesServices";
import {uid} from "uid"

export default {
    name: "createInvoice",
    data() {
        return {
            dateOption: { year: "numeric", month: "short", day:"numeric"},
            valid: true,
            clients:[],
            discount: 0,
            select: null,
            products:[],
            currentProducts:[],
            finishedInvoice:{
                clientName:"",
                invoiceDate: new Date(Date.now()).toLocaleDateString("en-us", this.dateOption),
                invoiceProducts: [],
                subTotal: 0,
                total: 0,
                discount: 0,
            },
            subTotal:0        
        }
    },
    async created (){
        const clientsResponse = await getAllClients();
        this.clients = clientsResponse.map(client => client.name);
        const productsResponse = await getAllProducts();
        this.products = productsResponse.map(product => product.name)
    },
    methods: {
        addProduct(){
            this.currentProducts.push({
                id: uid(),
                productName: "",
                productQty: 0,
                productPrice: 0,
            });
        },

        removeProduct(id){
            this.currentProducts = this.currentProducts.filter(product => product.id !== id);
        },

        saveInvoice(){
            this.finishedInvoice.invoiceProducts = this.currentProducts.map(product => {
                this.subTotal = this.subTotal + (product.productPrice * product.productQty);
                return product
            });
            this.finishedInvoice.subTotal = this.subTotal;
            console.log(this.subTotal)
            this.finishedInvoice.total = this.discount === 0? this.subTotal : this.subTotal*(1 - (this.discount/100));
            this.finishedInvoice.clientName = this.select;
            this.finishedInvoice.discount = this.discount;
            console.log(this.finishedInvoice)
            createInvoice(this.finishedInvoice);
        },

        /* submitHandler(e) {
            e.target.preventDefault();
            console.log("submit");
            createInvoice(this.finishedInvoice);
        } */
    },
}
</script>

<style scoped>
    .container {
        display: grid;
        place-content: center;
    }

    .form {
        background-color:  white;
        max-width: 150%;
        padding: 1rem;
    }

    .product-container {
        margin-bottom: 2rem;
    }

    .delete-btn:hover {
        background-color: #ff5252;
        color: white;
    }

    .add-btn:hover {
        background-color:#4caf50;
        color: white;
    }

    .link {
        text-decoration: none;
    }
</style>