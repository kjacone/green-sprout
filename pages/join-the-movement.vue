<script setup>
import VolunteerForm from '~/components/VolunteerForm.vue';
import PartnershipForm from '~/components/PartnershipForm.vue';
import OutreachForm from '~/components/OutreachForm.vue';
</script>

<template>
  <main class="max-w-5xl mx-auto px-6 py-16 bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl shadow-2xl border border-green-100">
    <section class="mb-14 text-center">
      <h1 class="text-5xl font-extrabold text-green-900 mb-5 drop-shadow-lg">Join the Movement</h1>
      <p class="mb-8 text-green-700 text-xl max-w-2xl mx-auto">
        Whether you are a student, professional, or educator, there's a way for you to make a difference in your community and environment.
      </p>
      <div class="flex justify-center gap-6 mb-4">
        <span class="inline-flex items-center gap-1 bg-green-200 text-green-900 px-5 py-2 rounded-full text-base font-semibold shadow-sm border border-green-300">
          🤝 Volunteer
        </span>
        <span class="inline-flex items-center gap-1 bg-green-200 text-green-900 px-5 py-2 rounded-full text-base font-semibold shadow-sm border border-green-300">
          🌱 Partner
        </span>
        <span class="inline-flex items-center gap-1 bg-green-200 text-green-900 px-5 py-2 rounded-full text-base font-semibold shadow-sm border border-green-300">
          🏫 Outreach
        </span>
      </div>
    </section>

    <div class="grid md:grid-cols-2 gap-10">
      <section class="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <h2 id="volunteer-header" class="text-2xl font-bold text-green-700 mb-3 flex items-center gap-2">
          <span>🤝</span> Volunteer with Us
        </h2>
        <p class="text-green-900 mb-5 text-base">
          Fill the form to join our network and become a hands-on changemaker.
        </p>
        <div class="flex-1 flex items-center">
          <VolunteerForm />
        </div>
      </section>

      <section class="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <h2 id="partner-header" class="text-2xl font-bold text-green-700 mb-3 flex items-center gap-2">
          <span>🌱</span> Partner With Us
        </h2>
        <p class="text-green-900 mb-5 text-base">
          Organizations, companies, and institutions can collaborate for greater impact. Share your proposal or partnership idea below.
        </p>
        <div class="flex-1 flex items-center">
          <PartnershipForm />
        </div>
      </section>

      <section class="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <h2 id="outreach-header" class="text-2xl font-bold text-green-700 mb-3 flex items-center gap-2">
          <span>🏫</span> School Outreach
        </h2>
        <p class="text-green-900 mb-5 text-base">
          Schools interested in Greening initiatives, please express your interest here.
        </p>
        <div class="flex-1 flex items-center">
          <OutreachForm />
        </div>
      </section>
    </div>
  </main>
</template>
