<template>
  <div class="customer-list">
    <h1>Customer List</h1>
    <form @submit.prevent="createCustomer">
      <input v-model="newCustomer.name" placeholder="Name" required>
      <input v-model="newCustomer.email" placeholder="Email" type="email" required>
      <input v-model="newCustomer.phone" placeholder="Phone" type="tel">
      <button type="submit">Add Customer</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.name }} {{ customer.lastname }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <router-link :to="'/edit-customer/' + customer.id">Edit</router-link>
            <button @click="deleteCustomer(customer.id)" class="action-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CustomerList',
  data() {
    return {
      customers: [],
      newCustomer: {},
    };
  },
  mounted() {
    this.fetchCustomers();
  },```