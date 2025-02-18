<template>
    <div class="relative inline-block text-left" v-on-click-outside="() => isOpen = false">
        <div>
            <button @click="() => isOpen = !isOpen" type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-ui_light_base px-3 py-2 text-sm font-semibold text-ui_white shadow-xs hover:bg-ui_light_base/70" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <nuxt-icon :name="`flags/${currLocale}`" class="text-xl" filled/>
                <span class="uppercase">{{ currLocale }}</span>
                <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <!--
          Dropdown menu, show/hide based on menu state.

          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        -->
        <Transition name="dropdown-menu">
            <div
                v-if="isOpen"
                class="absolute right-0 z-10 w-36 mt-2 origin-top-right rounded-md bg-ui_light_base shadow-lg"
            >
                <div role="none">
                    <!-- Active: "bg-gray-100 text-ui_white outline-hidden", Not Active: "" -->
                    <div
                        v-for="locale in locales"
                        :class="[{'bg-ui_base': currLocale === locale.code}]"
                        class="flex justify-center cursor-pointer gap-2 px-4 py-2 text-sm"
                        @click="handleLangChange(locale.code)"
                    >
                        <nuxt-icon :name="`flags/${locale.code}`" class="text-xl" filled/>
                        {{ locale.name }}
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { vOnClickOutside } from '@vueuse/components'
import { shallowRef } from 'vue'

const isOpen = shallowRef(false);

const {locale: currLocale, setLocale} = useI18n();

const selectedLocaleName = computed(() => {
    return locales.find((l) => l.code === currLocale.value)?.name;
})

const locales = [
    {
        code: 'en',
        name: 'English',
    },
    {
        code: 'es',
        name: 'Español',
    },
    {
        code: 'fr',
        name: 'Français',
    },
    {
        code: 'it',
        name: 'Italiano',
    },
    {
        code: 'de',
        name: 'Deutsch',
    },
]

const handleLangChange = (code) => {
    setLocale(code);
    isOpen.value = false;
}

</script>

<style>
/* Enter transitions */
.dropdown-menu-enter-active {
    transition: all 100ms ease-out;
}

.dropdown-menu-enter-from {
    opacity: 0;
    transform: scale(0.95);
}

.dropdown-menu-enter-to {
    opacity: 1;
    transform: scale(1);
}

/* Leave transitions */
.dropdown-menu-leave-active {
    transition: all 75ms ease-in;
}

.dropdown-menu-leave-from {
    opacity: 1;
    transform: scale(1);
}

.dropdown-menu-leave-to {
    opacity: 0;
    transform: scale(0.95);
}
</style>