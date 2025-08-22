<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '~/composables/useForm';

const { form, errors, isSubmitting, isSuccess, isError, submit } = useForm({
  endpoint: '/api/volunteer',
  fields: {
    name: '',
    email: '',
    phone: '',
    interests: '',
  },
});
</script>

<template>
  <form class="bg-white rounded-lg shadow p-6 grid gap-4 max-w-md" @submit.prevent="submit">
    <div>
      <label for="name" class="block font-medium text-green-800 mb-1">Full Name</label>
      <input
        id="name" type="text" v-model="form.name" required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.name"
        :aria-describedby="errors.name ? 'name-error' : undefined"
      />
      <p v-if="errors.name" class="text-red-500 text-sm" id="name-error">{{ errors.name }}</p>
    </div>
    <div>
      <label for="email" class="block font-medium text-green-800 mb-1">Email</label>
      <input
        id="email" type="email" v-model="form.email" required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.email"
        :aria-describedby="errors.email ? 'email-error' : undefined"
      />
      <p v-if="errors.email" class="text-red-500 text-sm" id="email-error">{{ errors.email }}</p>
    </div>
    <div>
      <label for="phone" class="block font-medium text-green-800 mb-1">Phone</label>
      <input
        id="phone" type="text" v-model="form.phone" required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.phone"
        :aria-describedby="errors.phone ? 'phone-error' : undefined"
      />
      <p v-if="errors.phone" class="text-red-500 text-sm" id="phone-error">{{ errors.phone }}</p>
    </div>
    <div>
      <label for="interests" class="block font-medium text-green-800 mb-1">Interests</label>
      <textarea
        id="interests" v-model="form.interests" rows="3" required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.interests"
        :aria-describedby="errors.interests ? 'interests-error' : undefined"
      ></textarea>
      <p v-if="errors.interests" class="text-red-500 text-sm" id="interests-error">{{ errors.interests }}</p>
    </div>
    <button
      type="submit"
      class="bg-green-600 text-white py-2 px-4 rounded font-semibold shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 mt-2"
      :disabled="isSubmitting"
    >
      <span v-if="isSubmitting">Submitting...</span>
      <span v-else>Submit</span>
    </button>
    <p
      v-if="isSuccess"
      class="text-green-700 mt-2">
      Thank you for joining as a volunteer! We'll be in touch soon.
    </p>
    <p v-if="isError" class="text-red-600 mt-2">Something went wrong. Please try again later.</p>
  </form>
</template>
