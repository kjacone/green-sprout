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
  <form
    class="bg-white rounded-2xl shadow-lg p-8 grid gap-6 max-w-lg mx-auto border border-green-100"
    @submit.prevent="submit"
  >
    <!-- Name -->
    <div>
      <label for="cf-name" class="block font-semibold text-green-800 mb-2">
        Your Name
      </label>
      <input
        id="cf-name"
        v-model="form.name"
        required
        class="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-500 transition"
        :aria-invalid="!!errors.name"
        :aria-describedby="errors.name ? 'cf-name-error' : undefined"
      />
      <p v-if="errors.name" class="text-red-500 text-sm mt-1" id="cf-name-error">
        {{ errors.name }}
      </p>
    </div>

    <!-- Email -->
    <div>
      <label for="cf-email" class="block font-semibold text-green-800 mb-2">
        Your Email
      </label>
      <input
        id="cf-email"
        v-model="form.email"
        required
        type="email"
        class="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-500 transition"
        :aria-invalid="!!errors.email"
        :aria-describedby="errors.email ? 'cf-email-error' : undefined"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1" id="cf-email-error">
        {{ errors.email }}
      </p>
    </div>

    <!-- Message -->
    <div>
      <label for="cf-message" class="block font-semibold text-green-800 mb-2">
        Your Message
      </label>
      <textarea
        id="cf-message"
        v-model="form.message"
        rows="5"
        required
        class="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-500 transition"
        :aria-invalid="!!errors.message"
        :aria-describedby="errors.message ? 'cf-message-error' : undefined"
      ></textarea>
      <p
        v-if="errors.message"
        class="text-red-500 text-sm mt-1"
        id="cf-message-error"
      >
        {{ errors.message }}
      </p>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="isSubmitting"
    >
      <span v-if="isSubmitting">⏳ Sending...</span>
      <span v-else>📨 Send Message</span>
    </button>

    <!-- Status -->
    <p v-if="isSuccess" class="text-green-700 font-medium mt-2">
      ✅ Thank you for your message! We'll get back to you soon.
    </p>
    <p v-if="isError" class="text-red-600 font-medium mt-2">
      ❌ Sorry, something went wrong. Please try again later.
    </p>
  </form>
</template>
