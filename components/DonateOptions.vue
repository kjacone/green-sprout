<template>
  <section aria-labelledby="donate-options" class="mt-8">
    <h2 id="donate-options" class="sr-only">Donation Methods</h2>
    <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
      <!-- M-Pesa Option -->
      <div class="flex flex-col items-center bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
        <svg class="w-12 h-12 text-green-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke-width="2" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m4-4H8" />
        </svg>
        <h3 class="text-xl font-bold text-green-800 mb-2">M-Pesa</h3>
        <div class="mb-3 text-green-900 text-center space-y-1">
          <div><span class="font-semibold">Paybill:</span> 123456</div>
          <div><span class="font-semibold">Account:</span> GREENSPROUT</div>
        </div>
        <button type="button" @click="copy('Paybill: 123456, Account: GREENSPROUT')" class="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded transition">Copy Details</button>
      </div>
      <!-- PayPal Option -->
      <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
        <svg class="w-12 h-12 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="4" stroke-width="2"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7v10M8 7v10m4-10v10" />
        </svg>
        <h3 class="text-xl font-bold text-blue-800 mb-2">PayPal</h3>
        <a href="https://paypal.me/greensproutkenya" target="_blank" rel="noopener" class="text-blue-700 underline font-medium mb-3 break-all">paypal.me/greensproutkenya</a>
        <button type="button" @click="copy('paypal.me/greensproutkenya')" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded transition">Copy Link</button>
      </div>
      <!-- Bank Option -->
      <div class="flex flex-col items-center bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
        <svg class="w-12 h-12 text-yellow-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="10" rx="2" stroke-width="2"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
        <h3 class="text-xl font-bold text-yellow-800 mb-2">Bank Transfer</h3>
        <div class="mb-3 text-yellow-900 text-center space-y-1">
          <div><span class="font-semibold">Bank:</span> Kenya Green Bank</div>
          <div><span class="font-semibold">Account:</span> 9876543210</div>
          <div><span class="font-semibold">Branch:</span> Nairobi Central</div>
        </div>
        <button type="button" @click="copy('Kenya Green Bank, Account: 9876543210, Branch: Nairobi Central')" class="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-1 rounded transition">Copy Details</button>
      </div>
      <!-- Buy Me a Coffee Option -->
      <div class="flex flex-col items-center bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
        <svg class="w-12 h-12 text-orange-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17h8a4 4 0 004-4V7H4v6a4 4 0 004 4z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8" />
        </svg>
        <h3 class="text-xl font-bold text-orange-800 mb-2">Buy Me a Coffee</h3>
        <a href="https://www.buymeacoffee.com/greensprout" target="_blank" rel="noopener" class="text-orange-700 underline font-medium mb-3 break-all">buymeacoffee.com/greensprout</a>
        <button type="button" @click="copy('buymeacoffee.com/greensprout')" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded transition">Copy Link</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function copy(text: string) {
  navigator.clipboard.writeText(text)
}
</script>
