<template>
  <section aria-labelledby="donate-options" class="mt-4">
    <h2 id="donate-options" class="sr-only">Donation Methods</h2>
    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <!-- M-Pesa Option -->
      <div class="bg-white rounded-lg shadow p-5 flex flex-col items-center">
        <svg class="w-10 h-10 text-green-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m4-4H8" /></svg>
        <h3 class="text-lg font-semibold text-green-700 mb-2">M-Pesa</h3>
        <div class="mb-2 text-green-800">
          <div><span class="font-medium">Paybill:</span> 123456</div>
          <div><span class="font-medium">Account:</span> GREENSPROUT</div>
        </div>
        <button type="button" @click="copy('Paybill: 123456, Account: GREENSPROUT')" class="text-blue-600 text-sm underline">Copy Details</button>
      </div>
      <!-- PayPal Option -->
      <div class="bg-white rounded-lg shadow p-5 flex flex-col items-center">
        <svg class="w-10 h-10 text-green-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7v10M8 7v10m4-10v10" /></svg>
        <h3 class="text-lg font-semibold text-green-700 mb-2">PayPal</h3>
        <a href="https://paypal.me/greensproutkenya" target="_blank" rel="noopener" class="text-blue-600 underline mb-2">paypal.me/greensproutkenya</a>
        <button type="button" @click="copy('paypal.me/greensproutkenya')" class="text-blue-600 text-sm underline">Copy Link</button>
      </div>
      <!-- Bank Option -->
      <div class="bg-white rounded-lg shadow p-5 flex flex-col items-center">
        <svg class="w-10 h-10 text-green-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11V7a5 5 0 0110 0v4" /></svg>
        <h3 class="text-lg font-semibold text-green-700 mb-2">Bank Transfer</h3>
        <div class="mb-2 text-green-800 text-center">
          <div><span class="font-medium">Bank:</span> Kenya Green Bank</div>
          <div><span class="font-medium">Account:</span> 9876543210</div>
          <div><span class="font-medium">Branch:</span> Nairobi Central</div>
        </div>
        <button type="button" @click="copy('Kenya Green Bank, Account: 9876543210, Branch: Nairobi Central')" class="text-blue-600 text-sm underline">Copy Details</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function copy(text: string) {
  navigator.clipboard.writeText(text)
}
</script>
