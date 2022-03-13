<template>
  <div>
    <Table/>
  </div>
</template>

<script>
import {getAllInvoices} from "@/services/invoicesServices";
import Table from "@/components/Table.vue"

  export default {
    name: 'Home',
    components: {
      Table
    },
  }
</script>