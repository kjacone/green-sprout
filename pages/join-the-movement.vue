<script setup>
import VolunteerForm from '~/components/VolunteerForm.vue';
import PartnershipForm from '~/components/PartnershipForm.vue';
import OutreachForm from '~/components/OutreachForm.vue';
</script>

<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <section class="mb-12">
      <h1 class="text-3xl font-bold text-green-800 mb-4">Join the Movement</h1>
      <p class="mb-6 text-green-800">Whether you are a student, professional, or educator, there's a way for you to make a difference in your community and environment.</p>
    </section>
    <section class="mb-12" aria-labelledby="volunteer-header">
      <h2 id="volunteer-header" class="text-2xl font-semibold text-green-700 mb-2">Volunteer with Us</h2>
      <p class="text-green-900 mb-4">Fill the form to join our network and become a hands-on changemaker.</p>
      <VolunteerForm />
    </section>
    <section class="mb-12" aria-labelledby="partner-header">
      <h2 id="partner-header" class="text-2xl font-semibold text-green-700 mb-2">Partner With Us</h2>
      <p class="text-green-900 mb-4">Organizations, companies, and institutions can collaborate for greater impact. Share your proposal or partnership idea below.</p>
      <PartnershipForm />
    </section>
    <section aria-labelledby="outreach-header">
      <h2 id="outreach-header" class="text-2xl font-semibold text-green-700 mb-2">School Outreach</h2>
      <p class="text-green-900 mb-4">Schools interested in Greening initiatives, please express your interest here.</p>
      <OutreachForm />
    </section>
  </main>
</template>
