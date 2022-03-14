<template>
    <v-container class="container ">
        <div>
            <router-link to="/create-invoice" class="link">
                <v-btn class=" buttons indigo darken-1 white--text" tile elevation="2">New Invoice</v-btn>
            </router-link>

        </div>
        <v-expansion-panels focusable>
            <v-expansion-panel v-for="invoice in invoices" :key="invoice.id">
                <v-expansion-panel-header class="text-h5 title">invoice ID: {{ invoice.id }}</v-expansion-panel-header>
                <v-expansion-panel-content class="accordion-content">
                    <h3><span>Client:</span> {{invoice.client.name}}</h3>
                    <p><span>Date:</span> {{invoice.date}}</p>
                    <p><span>Subtotal:</span> ${{invoice.subTotal}}</p>
                    <p><span>Discount:</span> {{invoice.discount}}%</p>
                    <p><span>Total:</span> ${{invoice.total}}</p>
                    <router-link :to="`/invoice/${invoice.id}`" class="link">
                        <v-btn class="buttons indigo lighten-3 white-darken--text">more Details</v-btn>
                    </router-link>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
import {getAllInvoices} from "@/services/invoicesServices";

export default {
    name: 'Table',
    data() {
      return {
        invoices: [],
        update: false,
      }
    },
    async created() {
      const response =  await getAllInvoices();
      console.log(response)
      this.invoices = response;
      this.update=!this.update
    },
    updated(){
        this.update=!this.update
    }
}
</script>

<style scoped>
    .link{
        text-decoration: none;
    }

    .buttons {
        border-radius: 5px;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 10px;
    }

    .title {
        font-weight: bold;
    }

    .accordion-content span {
        font-weight: bold;
    }

</style>