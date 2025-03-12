import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

import Home from "@/components/Home.vue";
import ToegewezenRapportages from '@/components/ToegewezenRapportages.vue';
import UitgevoerdeRapportages from '@/components/UitgevoerdeRapportages.vue';
import Kennisbase from '@/components/Kennisbase.vue';
import Instellingen from '@/components/Instellingen.vue';
import Login from '@/components/Login.vue';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/toegewezen-rapportages',
        name: 'toegewezen-rapportages',
        component: ToegewezenRapportages,
        meta: { requiresAuth: true }
    },
    {
        path: '/uitgevoerde-rapportages',
        name: 'uitgevoerde-rapportages',
        component: UitgevoerdeRapportages,
        meta: { requiresAuth: true }
    },
    {
        path: '/kennisbase',
        name: 'kennisbase',
        component: Kennisbase,
        meta: { requiresAuth: true }
    },
    {
        path: '/instellingen',
        name: 'instellingen',
        component: Instellingen,
        meta: { requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    if (authStore.isAuthenticated && to.path === '/login') {
        next('/');
    } else if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next('/login');
    } else {
        next(); 
    }
});

export default router;