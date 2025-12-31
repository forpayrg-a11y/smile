
import { TreatmentCase, FeatureItem } from './types';

export const TREATMENT_CASES: TreatmentCase[] = [
  {
    id: '1',
    title: 'Hollywood Smile',
    description: '20 Zirconium Crowns • 5 Days',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJctlVYa5F1iT_U-qD_kjhFCW6thaYOXJKnklvHyhWb6La1sCOtuihFcIALA-kQ_lukD2XK7l5-V1V3TW0rUT79cxssu5h2g4dLj3meWRPXqfeXODvxLpjdnceT6EzM2cr4JSkLoWot7NGJhOItBAWQ1s5aKACs21AdaI_AWI8StJB3xWuRL9wJywRWPWfRGepoXyzXruUC8gEGhG4OcU1Wnox2oWgI1zRibLxOah0B0yHOAetqkwoSsFNiMaSrO3-c-4rtETqlQ',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQPdXavq3Gz4w_Pcb84bj8UAZWDdlDNgva5qlSxBY66NtzFePTE7PGbXeYkj359byyJUH9L6HdVd_pGvRgexWqR4ONTaLCwR43MpN-poy5o2ZNq9gYGw57O1op3WGKeE2kgTE3iHV02EKDkpcjpnF9ut8psfcL1u9iEBgu7h68srFGUPlu7zUYekL2EzdGvn3d7btXCXR9ukm_NvyYPGTZkf2ingBzLCrsqg5rIj1jna6SUt1RoMsUAUcwvtg0u3gIBtUbcrFz-g',
  },
  {
    id: '2',
    title: 'Full Mouth Implants',
    description: 'All-on-6 Implants • 2 Visits',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBjWy2wNAngMMfQKI42XhkZdTOFmCehvdqvQ6bQIJRxF3czy7zXoc30oMh9yHwVU1CbgQ98fybRTpGY56RkHzaZNKcCSVRbYkoO8uFnSNiBUTmt_P1fwI04VJ5h-S2YerEkMRAY2XUe-MJs5vzvG9CBt-k2vpu1b5LAIWipcG_gF4KvAVOHjyDmYNw63KtYVl-RWY4uYCQQm5V48HiNiaY29SzT2Ll0_9LSgwZW5ANv45EPqKarSsnr5gyzslkc_EjYUhAJqMpPg',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkwGG9sVM-mzcMdG4mfGd0_oJDS6PjMxANHpw0qz_I_nBlQCRNkt-ppg2fHhmtrW73DJHQUt05seeDUcGbewChRaImLh6Iw3N8-Ejl-grGtheOjXz1SVYt1nQaA9T0uhilauoPZYxm1aBOBVwJ0aYTiV0ZLCoaCzB-efKDg6g7jI3MGku9E865ed1qm7dy_u6l3hWsQilWGVf7fd8vuE2_nqCM9cqH1oYgqUxAthsx6Q71ryiktNpge7T_nDAmu0ok5lTDWh74Yg',
  },
  {
    id: '3',
    title: 'Teeth Whitening + Bonding',
    description: 'Composite Bonding • 1 Day',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNCpdk5gHmhVMwIGekWjPsq-0FXqQu1LmrKnjN4xe6dI99RYmS8P1vW0KE29sNlQBeMuusKiXtypnoPCeBnBd8YtIbJVgrCkGbKNMnvlxc6zVwvt06NAwPc8Bq3bpwfy91UqhZhJtpI9xD1q3i2JM3U6zlqTgqsswJ0ZWm26yYuaIA4QzTIiRJFkEPZDeqKJkB-lIxdTASTOS1yYYbQY3bD7GUUZN-7gjZSG4BkjrqeaTuJMXSjm3viiYmwZeOmqGOx4XketuM3g',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFNSsWHyB68ktTdnM1k0ZIlIcuuid0B_bpG5_PAWQbzuuiTN6YzcBqTI--nXPxOyQXSdmi018lFjS0doaQ9sBe7Ubt7ok7p8TO0DA2ybKJnYxhc1GzCWZYLb6AS1lA_pjws1nzES8UO6mDlt1T-sagOYd4tGw2_HXor_OMLH0Ivj2vCEAV12G1Y7ouuWxOPDZRHn-C8Tbmqvl3MLNs_km9bvnnJo54MTZMvdmFxh89zoWQSKO93zLOkma3Aji0h4LlkcfhFId6Gg',
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: '1',
    title: 'Expert Dentists',
    description: 'Our team consists of specialists with 15+ years of experience in cosmetic dentistry and implantology.',
    icon: 'workspace_premium',
    iconColor: 'text-primary'
  },
  {
    id: '2',
    title: 'All-Inclusive Packages',
    description: 'We handle everything: Treatment, 5-star accommodation, and VIP transfers between airport, hotel, and clinic.',
    icon: 'travel_explore',
    iconColor: 'text-blue-500'
  },
  {
    id: '3',
    title: 'Lifetime Warranty',
    description: 'Peace of mind guaranteed. We offer a lifetime warranty on dental implants and extended warranties on veneers.',
    icon: 'security',
    iconColor: 'text-green-600'
  }
];
