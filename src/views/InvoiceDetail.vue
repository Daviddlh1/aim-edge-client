<template>
  <div class="main-container">
    <v-container cols="12" class="container" >
      <div>
        <h1 class="text-h4 title">Invoice ID: {{invoiceDetails.id}}</h1>
        <div class="sub-container">
          <h2 class="text-h5 subtitle" >Client info:</h2>
          <div>
            <ul>
              <li><span>{{invoiceDetails.client.name}} ID: {{invoiceDetails.clientId}}</span></li>
              <li><span>Email:</span> {{invoiceDetails.client.email}}</li>
              <li><span>Contact:</span> {{invoiceDetails.client.contact}}</li>
              <li><span>Phone Number: </span> {{invoiceDetails.client.phoneNumber}}</li>
            </ul>
          </div>
        </div>
        <div class="sub-container">
          <h2 class="text-h5 subtitle">Products:</h2>
          <div v-for="product in products" :key="product.id">
            <ul>
              <li><span>Product Name:</span> {{product.productName}}</li>
              <li><span>Quantity:</span> {{product.productQty}}</li>
              <li><span>Pice:</span> {{product.productPrice}}</li>
            </ul>
          </div>
        </div>
        <div class="sub-container">
          <h2 class="text-h5 subtitle">Other Info:</h2>
          <ul>
            <li><span>Subtotal:</span> ${{invoiceDetails.subTotal}}</li>
            <li><span>Discounts:</span> {{invoiceDetails.discount}}%</li>
            <li><span>Total:</span> ${{invoiceDetails.total}}</li>
          </ul>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import { getInvoiceById } from "@/services/invoicesServices";

export default {
  name: "invoiceDetail",
  data() {
    return {
      id: this.$route.params.id,
      invoiceDetails: {},
      products: []
    }
  },
  async created() {
    this.products = await getInvoiceById(this.id).then(data=> this.products = JSON.parse(data[0].productQuantity))
    const response = await getInvoiceById(this.id);
    this.invoiceDetails = response[0];
  }
}
</script>

<style scoped>
  .main-container {
    margin-top: 1rem;
    display: grid;
    place-content: center;
  }

  .container {
    padding: 1rem;
    background-color: white;
    border-radius: 5px;
    min-width: 300px;
  }

  .container .sub-container span {
    font-weight: bold;
  }

  .title, .subtitle {
    font-weight: bold;
    color: #1A237E;
  }

  .title {
    color: #3D5AFE;
  }
  .sub-container ul {
    list-style: none;
  }

  @media(min-width: 600px){
    .container {
      min-width: 400px;
    }
  }
</style>
