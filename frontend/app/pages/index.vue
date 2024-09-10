<script setup lang="ts">
enum Filter {
  available = "available",
  unavailable = "unavailable",
}

const filter = ref<Filter>(Filter.available);
</script>
<template>
  <Header />
  <main class="p-4 text-gray-800 min-h-svh">
    <div class="container mx-auto max-w-[1024px]">
      <div class="flex items-center gap-2 mb-2">
        <Icon name="solar:filter-bold-duotone" class="text-2xl" />
        <p class="text-sm">Filter</p>
      </div>
      <div class="flex gap-4">
        <button
          @click="filter = Filter.available"
          :class="{
            'bg-green-500 text-white': filter === Filter.available,
            'border border-green-500 bg-white text-green-500':
              filter === Filter.unavailable,
          }"
          class="flex-1 basis-0 py-3 px-4 bg-green-500 text-white font-medium rounded-xl"
        >
          available
        </button>
        <button
          @click="filter = Filter.unavailable"
          :class="{
            'bg-gray-500  text-white': filter === Filter.unavailable,
            'border border-gray-500 bg-white text-gray-500 ':
              filter === Filter.available,
          }"
          class="flex-1 basis-0 py-3 px-4 rounded-xl"
        >
          unavailable
        </button>
      </div>
      <h3 class="font-medium mt-4">Select Bicycle to borrow</h3>
      <div class="py-4 grid grid-cols-2 sm:flex gap-4 flex-wrap">
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col max-w-52">
          <img src="/bike.png" alt="" />
          <div class="flex-1 flex-col flex">
            <h4 class="text-center font-bold">Bike 1</h4>
            <div class="flex flex-1 flex-col justify-end">
              <div
                class="bg-green-500 rounded-xl p-2 text-center font-medium text-white mt-3"
              >
                Available
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col max-w-52">
          <img src="/bike.png" alt="" />
          <div class="flex-1 flex-col flex">
            <h4 class="text-center font-bold">Bike 2</h4>
            <div class="flex flex-1 flex-col justify-end">
              <p class="text-sm text-center">
                Borrowed by <span class="font-bold italic">211-***79</span>
              </p>
              <p class="text-sm text-center">
                Available till: {{ useTimeAgo(new Date()) }}
              </p>
              <div
                class="bg-gray-500 rounded-xl p-2 text-center font-medium text-white mt-3"
              >
                Unavailable
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col max-w-52">
          <img src="/bike.png" alt="" />
          <div class="flex-1 flex-col flex">
            <h4 class="text-center font-bold">Bike 1</h4>
            <div class="flex flex-1 flex-col justify-end">
              <div
                class="bg-green-500 rounded-xl p-2 text-center font-medium text-white mt-3"
              >
                Available
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col max-w-52">
          <img src="/bike.png" alt="" />
          <div class="flex-1 flex-col flex">
            <h4 class="text-center font-bold">Bike 2</h4>
            <div class="flex flex-1 flex-col justify-end">
              <p class="text-sm text-center">
                Borrowed by <span class="font-bold italic">211-***79</span>
              </p>
              <p class="text-sm text-center">
                Available till: {{ useTimeAgo(new Date()) }}
              </p>
              <div
                class="bg-gray-500 rounded-xl p-2 text-center font-medium text-white mt-3"
              >
                Unavailable
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col max-w-52">
          <img src="/bike.png" alt="" />
          <div class="flex-1 flex-col flex">
            <h4 class="text-center font-bold">Bike 1</h4>
            <div class="flex flex-1 flex-col justify-end">
              <div
                class="bg-green-500 rounded-xl p-2 text-center font-medium text-white mt-3"
              >
                Available
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col max-w-52">
          <img src="/bike.png" alt="" />
          <div class="flex-1 flex-col flex">
            <h4 class="text-center font-bold">Bike 2</h4>
            <div class="flex flex-1 flex-col justify-end">
              <p class="text-sm text-center">
                Borrowed by <span class="font-bold italic">211-***79</span>
              </p>
              <p class="text-sm text-center">
                Available till: {{ useTimeAgo(new Date()) }}
              </p>
              <div
                class="bg-gray-500 rounded-xl p-2 text-center font-medium text-white mt-3"
              >
                Unavailable
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col max-w-52">
          <img src="/bike.png" alt="" />
          <div class="flex-1 flex-col flex">
            <h4 class="text-center font-bold">Bike 1</h4>
            <div class="flex flex-1 flex-col justify-end">
              <div
                class="bg-green-500 rounded-xl p-2 text-center font-medium text-white mt-3"
              >
                Available
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col max-w-52">
          <img src="/bike.png" alt="" />
          <div class="flex-1 flex-col flex">
            <h4 class="text-center font-bold">Bike 2</h4>
            <div class="flex flex-1 flex-col justify-end">
              <p class="text-sm text-center">
                Borrowed by <span class="font-bold italic">211-***79</span>
              </p>
              <p class="text-sm text-center">
                Available till: {{ useTimeAgo(new Date()) }}
              </p>
              <div
                class="bg-gray-500 rounded-xl p-2 text-center font-medium text-white mt-3"
              >
                Unavailable
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
