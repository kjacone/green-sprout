<script setup lang="ts">
import { useForm } from '~/composables/useForm';

const { form, errors, isSubmitting, isSuccess, isError, submit } = useForm({
  endpoint: '/api/contact',
  fields: {
    name: '',
    email: '',
    message: '',
  },
});
</script>

<template>
  <form class="bg-white rounded-lg shadow p-6 grid gap-4 max-w-md mx-auto" @submit.prevent="submit">
    <div>
      <label for="cf-name" class="block font-medium text-green-800 mb-1">Name</label>
      <input
        id="cf-name" v-model="form.name" required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.name"
        :aria-describedby="errors.name ? 'cf-name-error' : undefined"
      />
      <p v-if="errors.name" class="text-red-500 text-sm" id="cf-name-error">{{ errors.name }}</p>
    </div>
    <div>
      <label for="cf-email" class="block font-medium text-green-800 mb-1">Email</label>
      <input
        id="cf-email" v-model="form.email" required
        type="email"
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.email"
        :aria-describedby="errors.email ? 'cf-email-error' : undefined"
      />
      <p v-if="errors.email" class="text-red-500 text-sm" id="cf-email-error">{{ errors.email }}</p>
    </div>
    <div>
      <label for="cf-message" class="block font-medium text-green-800 mb-1">Message</label>
      <textarea
        id="cf-message" v-model="form.message" rows="4" required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.message"
        :aria-describedby="errors.message ? 'cf-message-error' : undefined"
      ></textarea>
      <p v-if="errors.message" class="text-red-500 text-sm" id="cf-message-error">{{ errors.message }}</p>
    </div>
    <button
      type="submit"
      class="bg-green-600 text-white py-2 px-4 rounded font-semibold shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 mt-2"
      :disabled="isSubmitting"
    >
      <span v-if="isSubmitting">Sending...</span>
      <span v-else>Send</span>
    </button>
    <p v-if="isSuccess" class="text-green-700 mt-2">Thank you for your message! We'll get back to you soon.</p>
    <p v-if="isError" class="text-red-600 mt-2">Sorry, something went wrong. Please try again later.</p>
  </form>
</template>
