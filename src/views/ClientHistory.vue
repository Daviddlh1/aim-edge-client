<template>
    <div class="container">
        <v-expansion-panels focusable>
            <h1>{{invoices[0].client.name}}</h1>
            <v-expansion-panel v-for="invoice in invoices" :key="invoice.id">
                <v-expansion-panel-header class="text-h5 title">invoice ID: {{ invoice.id }}</v-expansion-panel-header>
                <v-expansion-panel-content class="accordion-content">
                    <router-link :to="`/client/clientDetails/${invoice.clientId}`" class="link">
                        <h3><span>Client:</span> {{invoice.client.name}}</h3>
                    </router-link>
                    <p><span>Date:</span> {{invoice.date}}</p>
                    <p><span>Subtotal:</span> ${{invoice.subTotal}}</p>
                    <p><span>Discount:</span> {{invoice.discount}}%</p>
                    <p><span>Total:</span> ${{invoice.total}}</p>
                    <router-link :to="`/invoice/${invoice.id}`" class="link">
                        <v-btn class="buttons indigo lighten-3 white--text">more Details</v-btn>
                    </router-link>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
import Table from "@/components/Table.vue";
import { getClientsInvoices } from "@/services/clientsServices"

export default {
    name: "ClientHistory",
    data() {
        return{
            id: this.$route.params.id,
            invoices:[],
        }
    },
    async created(){
        this.invoices = await getClientsInvoices(this.id);
    },
    components:{
        Table,
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

    .container h1 {
        color: #1A237E;
    }

    .title {
        font-weight: bold;
    }

    .accordion-content span {
        font-weight: bold;
    }
</style>