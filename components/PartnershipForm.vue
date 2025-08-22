<script setup lang="ts">
import { useForm } from '~/composables/useForm';

const { fields, errors, submitting, success, responseMessage, submitForm } = useForm(
  '/api/partnership',
  {
    organization: '',
    contact: '',
    idea: '',
  }
);
</script>

<template>
  <form class="bg-white rounded-lg shadow p-6 grid gap-4 max-w-md" @submit.prevent="submitForm">
    <div>
      <label for="organization" class="block font-medium text-green-800 mb-1">Organization/Company Name</label>
      <input
        id="organization"
        v-model="fields.organization"
        required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.organization"
        :aria-describedby="errors.organization ? 'org-error' : undefined"
      />
      <p v-if="errors.organization" class="text-red-500 text-sm" id="org-error">{{ errors.organization }}</p>
    </div>
    <div>
      <label for="contact" class="block font-medium text-green-800 mb-1">Contact Email or Phone</label>
      <input
        id="contact"
        v-model="fields.contact"
        required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.contact"
        :aria-describedby="errors.contact ? 'contact-error' : undefined"
      />
      <p v-if="errors.contact" class="text-red-500 text-sm" id="contact-error">{{ errors.contact }}</p>
    </div>
    <div>
      <label for="idea" class="block font-medium text-green-800 mb-1">Proposal / Idea</label>
      <textarea
        id="idea"
        v-model="fields.idea"
        rows="3"
        required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.idea"
        :aria-describedby="errors.idea ? 'idea-error' : undefined"
      ></textarea>
      <p v-if="errors.idea" class="text-red-500 text-sm" id="idea-error">{{ errors.idea }}</p>
    </div>
    <button
      type="submit"
      class="bg-green-600 text-white py-2 px-4 rounded font-semibold shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 mt-2"
      :disabled="submitting"
    >
      <span v-if="submitting">Submitting...</span>
      <span v-else>Submit</span>
    </button>
    <p v-if="success" class="text-green-700 mt-2">Thank you! Our team will get in touch to discuss partnership opportunities.</p>
    <p v-if="responseMessage && !success" class="text-red-600 mt-2">{{ responseMessage }}</p>
  </form>
</template>
