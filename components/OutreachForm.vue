<script setup lang="ts">
import { useForm } from '~/composables/useForm';

const { fields, errors, submitting, success, responseMessage, submitForm } = useForm({
  endpoint: '/api/outreach',
  initialValues: {
    school: '',
    contact: '',
    location: '',
    message: '',
  },
});
</script>

<template>
  <form class="bg-white rounded-lg shadow p-6 grid gap-4 max-w-md" @submit.prevent="submitForm">
    <div>
      <label for="school" class="block font-medium text-green-800 mb-1">School Name</label>
      <input
        id="school" v-model="fields.school" required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.school"
        :aria-describedby="errors.school ? 'school-error' : undefined"
      />
      <p v-if="errors.school" class="text-red-500 text-sm" id="school-error">{{ errors.school }}</p>
    </div>
    <div>
      <label for="contact" class="block font-medium text-green-800 mb-1">Contact Email or Phone</label>
      <input
        id="contact" v-model="fields.contact" required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.contact"
        :aria-describedby="errors.contact ? 'contact-error' : undefined"
      />
      <p v-if="errors.contact" class="text-red-500 text-sm" id="contact-error">{{ errors.contact }}</p>
    </div>
    <div>
      <label for="location" class="block font-medium text-green-800 mb-1">Location</label>
      <input
        id="location" v-model="fields.location" required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.location"
        :aria-describedby="errors.location ? 'location-error' : undefined"
      />
      <p v-if="errors.location" class="text-red-500 text-sm" id="location-error">{{ errors.location }}</p>
    </div>
    <div>
      <label for="message" class="block font-medium text-green-800 mb-1">Message</label>
      <textarea
        id="message" v-model="fields.message" rows="3" required
        class="w-full px-3 py-2 border rounded focus:ring-green-400 focus:border-green-500"
        :aria-invalid="!!errors.message"
        :aria-describedby="errors.message ? 'message-error' : undefined"
      ></textarea>
      <p v-if="errors.message" class="text-red-500 text-sm" id="message-error">{{ errors.message }}</p>
    </div>
    <button type="submit" class="bg-green-600 text-white py-2 px-4 rounded font-semibold shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 mt-2" :disabled="submitting">
      <span v-if="submitting">Submitting...</span>
      <span v-else>Submit</span>
    </button>
    <p v-if="success" class="text-green-700 mt-2">Thank you! We'll contact you about your school outreach interest.</p>
    <p v-if="responseMessage && !success" class="text-red-600 mt-2">{{ responseMessage }}</p>
  </form>
</template>
